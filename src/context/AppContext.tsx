"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface SyllabusModule {
  week: string;
  title: string;
  desc: string;
}

export interface SyllabusData {
  id: string;
  title: string;
  track: string;
  duration: string;
  faculty: string;
  description: string;
  modules: SyllabusModule[];
}

export const SYLLABUS_REGISTRY: Record<string, SyllabusData> = {
  "jd-essentials": {
    id: "jd-essentials",
    title: "JurisDoctorate (JD) Essentials",
    track: "Core Foundational Track",
    duration: "14 Weeks | 45 CLE Credits",
    faculty: "Hon. Marcus Vance & Prof. Elena Rostova",
    description: "The foundational architecture of legal reasoning, contracts, torts, and constitutional doctrine. Designed for aspiring practitioners and cross-disciplinary leaders.",
    modules: [
      { week: "Module 01-03", title: "Epistemology of Legal Reasoning & Precedent", desc: "Socratic dissection of judicial hierarchy, stare decisis, statutory interpretation, and the mechanics of ratio decidendi." },
      { week: "Module 04-07", title: "Contractual Architecture & Risk Allocation", desc: "Offer, acceptance, consideration doctrines, digital smart contracts, liquidated damages, and promissory estoppel." },
      { week: "Module 08-11", title: "Tortious Obligations & Algorithmic Liability", desc: "Proximate causation, strict liability regimes, intentional torts, and emergent machine-learning product defect theories." },
      { week: "Module 12-14", title: "Appellate Advocacy & Moot Chamber Simulation", desc: "Drafting certiorari petitions, oral argumentation before sitting jurists, and rigorous peer cross-examination." }
    ]
  },
  "intl-treaties": {
    id: "intl-treaties",
    title: "International Law & Treaties",
    track: "Global Diplomatic & Supranational",
    duration: "12 Weeks | 36 CLE Credits",
    faculty: "Dr. Tariq Al-Mansoor",
    description: "Navigating the complex webs of cross-border jurisdiction, multilateral treaty codifications, bilateral investment treaties, and international arbitral tribunals.",
    modules: [
      { week: "Module 01-03", title: "The Vienna Convention on the Law of Treaties", desc: "Treaty negotiation protocols, reservations, unilateral declarations, and invalidity triggers under customary international law." },
      { week: "Module 04-06", title: "State Immunity & Universal Jurisdiction", desc: "Foreign Sovereign Immunities Act (FSIA), state commercial exceptions, and universal jurisdiction for gross violations." },
      { week: "Module 07-09", title: "Investor-State Dispute Settlement (ISDS)", desc: "ICSID and UNCITRAL arbitration proceedings, indirect expropriation claims, and bilateral treaty enforcement." },
      { week: "Module 10-12", title: "Cross-Border Sanctions & Extraterritoriality", desc: "Secondary sanctions analysis, OFAC regulations, export controls, and blocking statutes in contested multi-jurisdictions." }
    ]
  },
  "tech-ip": {
    id: "tech-ip",
    title: "Technology & IP Law",
    track: "Emergent Technology & Cyber",
    duration: "8 Weeks | 28 CLE Credits",
    faculty: "Prof. Sarah Sterling",
    description: "Intellectual property doctrine modernized for generative neural networks, distributed ledgers, patent eligibility, software licensing, and sovereign privacy mandates.",
    modules: [
      { week: "Module 01-02", title: "AI Authorship, Fair Use & Machine Training", desc: "Copyrightability of synthesized outputs, transformative use doctrine in large language models, and fair use defense." },
      { week: "Module 03-04", title: "Patentability of Algorithmic Inventions & BioTech", desc: "Alice 101 subject matter eligibility, Section 112 written description requirements for AI-assisted molecular syntheses." },
      { week: "Module 05-06", title: "Global Data Sovereignty, GDPR & Cross-Border Flows", desc: "Extraterritorial enforcement of European privacy directives, standard contractual clauses (SCCs), and sovereign data clouds." },
      { week: "Module 07-08", title: "Decentralized Protocols & Smart Contract Jurisprudence", desc: "Legal personality of DAOs, smart contract vulnerabilities as legal breaches, and regulatory frameworks across SEC/CFTC/MiCA." }
    ]
  },
  "corporate-restructure": {
    id: "corporate-restructure",
    title: "Corporate Restructuring & Solvency",
    track: "Commercial & Financial Jurisprudence",
    duration: "10 Weeks | 32 CLE Credits",
    faculty: "Hon. Marcus Vance",
    description: "The transactional and contentious mechanics of Chapter 11 reorganizations, distressed M&A, cross-border insolvencies, and creditor committee litigation.",
    modules: [
      { week: "Module 01-03", title: "Distressed Balance Sheets & Insolvent Governance", desc: "Fiduciary duties shifting to creditor bodies in the zone of insolvency, fraudulent conveyances, and preference litigation." },
      { week: "Module 04-06", title: "Chapter 11 Plan Confirmation & Cramdown Mechanics", desc: "Absolute priority rule, Section 1129 statutory confirmation standards, debtor-in-possession (DIP) financing structures." },
      { week: "Module 07-08", title: "Distressed Asset Purchases (Section 363 Sales)", desc: "Drafting stalking horse bidding procedures, breakup fees, and free-and-clear purchase orders." },
      { week: "Module 09-10", title: "Cross-Border Insolvencies & Chapter 15 Model Law", desc: "UNCITRAL Model Law implementation, Center of Main Interests (COMI) determination, and coordination with foreign main proceedings." }
    ]
  },
  "constitutional-privacy": {
    id: "constitutional-privacy",
    title: "Constitutional Tensions in Digital Privacy",
    track: "Constitutional Law & Civil Liberties",
    duration: "6 Weeks | 20 CLE Credits",
    faculty: "Prof. Elena Rostova",
    description: "Interrogating the reasonable expectation of privacy in modern telemetry, mass encrypted communication, location surveillance, and algorithmic search warrants.",
    modules: [
      { week: "Module 01-02", title: "Evolution of Katz & The Third-Party Doctrine", desc: "From Carpenter v. United States to modern geolocation tracking and cell tower data extraction warrants." },
      { week: "Module 03-04", title: "Encrypted Enclaves & Compelled Decryption", desc: "Fifth Amendment privilege against self-incrimination applied to biometric device locks and encryption passphrases." },
      { week: "Module 05-06", title: "Predictive Policing & Algorithmic Due Process", desc: "Statutory scrutiny over risk assessment recidivism algorithms and Fourteenth Amendment Equal Protection challenges." }
    ]
  },
  "ai-liability": {
    id: "ai-liability",
    title: "Corporate Liability in AI Decisions",
    track: "Emergent Technology & Governance",
    duration: "6 Weeks | 22 CLE Credits",
    faculty: "Prof. Sarah Sterling",
    description: "Analyzing precedent and liability assignment when algorithmic systems cause demonstrable harm, algorithmic discrimination, or board-level compliance failures.",
    modules: [
      { week: "Module 01-02", title: "Algorithmic Causation & Proximate Blame", desc: "The black-box problem: resolving evidential gaps when machine output deviates from foreseeable training models." },
      { week: "Module 03-04", title: "Caremark Fiduciary Duties & AI Compliance", desc: "Board liability for failure to supervise AI implementation across healthcare, credit scoring, and automated employment decisions." },
      { week: "Module 05-06", title: "Product Liability Regimes & Strict Liability", desc: "Is autonomous software a product or a service? Analyzing evolving EU AI Liability Directives and US tort precedents." }
    ]
  }
};

interface AppContextType {
  // Syllabus Drawer
  activeSyllabus: SyllabusData | null;
  openSyllabus: (courseId: string) => void;
  closeSyllabus: () => void;

  // Enrollment Modal
  isEnrollOpen: boolean;
  enrollCourseTitle: string;
  openEnroll: (title?: string) => void;
  closeEnroll: () => void;

  // Discourse Modal
  isDiscourseOpen: boolean;
  discourseTitle: string;
  openDiscourse: (title?: string) => void;
  closeDiscourse: () => void;

  // Toast
  toastMessage: string | null;
  triggerToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeSyllabus, setActiveSyllabus] = useState<SyllabusData | null>(null);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [enrollCourseTitle, setEnrollCourseTitle] = useState("Selected Curriculum Track");
  const [isDiscourseOpen, setIsDiscourseOpen] = useState(false);
  const [discourseTitle, setDiscourseTitle] = useState("Constitutional Tensions in Digital Privacy");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const openSyllabus = (courseId: string) => {
    const course = SYLLABUS_REGISTRY[courseId] || SYLLABUS_REGISTRY["jd-essentials"];
    setActiveSyllabus(course);
  };

  const closeSyllabus = () => setActiveSyllabus(null);

  const openEnroll = (title?: string) => {
    if (title) setEnrollCourseTitle(title);
    setIsEnrollOpen(true);
  };

  const closeEnroll = () => setIsEnrollOpen(false);

  const openDiscourse = (title?: string) => {
    if (title) setDiscourseTitle(title);
    setIsDiscourseOpen(true);
  };

  const closeDiscourse = () => setIsDiscourseOpen(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <AppContext.Provider
      value={{
        activeSyllabus,
        openSyllabus,
        closeSyllabus,
        isEnrollOpen,
        enrollCourseTitle,
        openEnroll,
        closeEnroll,
        isDiscourseOpen,
        discourseTitle,
        openDiscourse,
        closeDiscourse,
        toastMessage,
        triggerToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
