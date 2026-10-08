import type { Metadata } from "next";
import { Playfair_Display, Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnrollmentModal from "@/components/EnrollmentModal";
import DiscourseModal from "@/components/DiscourseModal";
import SyllabusDrawer from "@/components/SyllabusDrawer";
import Toast from "@/components/Toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollObserver from "@/components/ScrollObserver";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "معهد إس آر إس القانوني | SRS Legal Institute",
  description: "منهج معاصر ورصين للتعليم القانوني. إتقان البنية المعمارية للقانون مع كبار الفقهاء والمحكمين الدوليين.",
  keywords: ["legal education", "e-learning", "law courses", "jurisprudence", "SRS legal institute", "al-qanun", "CLE credits", "corporate law", "القانون", "تعليم قانوني"],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "معهد إس آر إس القانوني - SRS Legal Institute",
    description: "إتقان البنية المعمارية للقانون عبر مسارات مهيكلة يقودها كبار القضاة والفقهاء.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${playfair.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <AppProvider>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
            <EnrollmentModal />
            <DiscourseModal />
            <SyllabusDrawer />
            <Toast />
            <WhatsAppButton />
            <ScrollObserver />
          </AppProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

