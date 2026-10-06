import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnrollmentModal from "@/components/EnrollmentModal";
import DiscourseModal from "@/components/DiscourseModal";
import SyllabusDrawer from "@/components/SyllabusDrawer";
import Toast from "@/components/Toast";

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
  title: "SRS Legal Institute | AL-QANUN - Modern Jurisprudence & E-Learning",
  description: "A rigorous, contemporary approach to legal education. Master the architecture of law with world-class jurists, appellate simulations, and specialized curricula.",
  keywords: ["legal education", "e-learning", "law courses", "jurisprudence", "SRS legal institute", "al-qanun", "CLE credits", "corporate law"],
  openGraph: {
    title: "SRS Legal Institute | AL-QANUN - Modern Jurisprudence",
    description: "Master the architecture of law with world-class faculty and structured pathways designed for modern practitioners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <AppProvider>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <EnrollmentModal />
          <DiscourseModal />
          <SyllabusDrawer />
          <Toast />
        </AppProvider>
      </body>
    </html>
  );
}
