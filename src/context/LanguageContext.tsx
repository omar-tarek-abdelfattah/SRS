"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import arData from "@/locales/ar.json";
import enData from "@/locales/en.json";

export type Language = "ar" | "en";
export type Direction = "rtl" | "ltr";

type TranslationsRecord = Record<string, any>;

const translations: Record<Language, TranslationsRecord> = {
  ar: arData,
  en: enData,
};

export interface LanguageContextType {
  language: Language;
  dir: Direction;
  isArabic: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (text: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Website is Arabic first by default
  const [language, setLanguageState] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved language preference or default to Arabic
    const saved = localStorage.getItem("srs_language") as Language | null;
    if (saved === "ar" || saved === "en") {
      setLanguageState(saved);
    } else {
      setLanguageState("ar");
    }
    setMounted(true);
  }, []);

  const dir: Direction = language === "ar" ? "rtl" : "ltr";
  const isArabic = language === "ar";

  useEffect(() => {
    // Synchronize HTML attributes for RTL/LTR & language
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.documentElement.setAttribute("data-lang", language);
  }, [language, dir]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("srs_language", lang);
    } catch {
      // Storage might be disabled in private mode
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "ar" ? "en" : "ar");
  }, [language, setLanguage]);

  // Translation helper function that takes the string and translates it
  const t = useCallback(
    (text: string, params?: Record<string, string | number>): string => {
      if (!text) return "";
      const trimmed = text.trim();

      const currentDict = translations[language] || {};
      const fallbackDict = translations[language === "ar" ? "en" : "ar"] || {};

      let result: string | undefined = undefined;

      // 1. Direct match on full or trimmed string
      if (currentDict[text] !== undefined) {
        result = currentDict[text];
      } else if (currentDict[trimmed] !== undefined) {
        result = currentDict[trimmed];
      }

      // 2. Nested dot notation lookup (e.g., "nav.home")
      if (!result && text.includes(".")) {
        const parts = text.split(".");
        let cur: any = currentDict;
        for (const p of parts) {
          if (cur && typeof cur === "object" && p in cur) {
            cur = cur[p];
          } else {
            cur = undefined;
            break;
          }
        }
        if (typeof cur === "string") {
          result = cur;
        }
      }

      // 3. Fallback: if not found in current dictionary
      if (!result) {
        if (language === "en") {
          // In English, if key not in dictionary, text itself is likely the English phrase
          result = fallbackDict[text] !== undefined ? text : text;
        } else {
          // In Arabic, try reverse lookup if key happens to match an English entry
          result = text;
        }
      }

      // 4. Interpolate variables like {name}, {count}
      if (params && typeof result === "string") {
        Object.entries(params).forEach(([paramKey, paramVal]) => {
          result = (result as string).replace(
            new RegExp(`\\{${paramKey}\\}`, "g"),
            String(paramVal)
          );
        });
      }

      return result ?? text;
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        isArabic,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to access language context and helper function
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Alias for convenience (both useTranslation and useLanguage work)
export const useTranslation = useLanguage;
