"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useLanguage } from "@/context/LanguageContext";

interface CourseItem {
  id: string;
  category: "foundational" | "tech" | "corporate" | "intl" | "constitutional";
  track: string;
  title: string;
  summary: string;
  duration: string;
  cle: string;
  faculty: string;
  level: "Comprehensive" | "Advanced Master" | "Executive Fellow";
}

const COURSES_DATA: CourseItem[] = [
  {
    id: "jd-essentials",
    category: "foundational",
    track: "Core Foundational Track",
    title: "JurisDoctorate (JD) Essentials",
    summary: "The foundational architecture of legal reasoning, contracts, and torts. Rigorous analysis of precedent and judicial interpretation for the modern era.",
    duration: "14 Weeks",
    cle: "45 CLE Credits",
    faculty: "Hon. Marcus Vance & Prof. Elena Rostova",
    level: "Comprehensive",
  },
  {
    id: "tech-ip",
    category: "tech",
    track: "Emergent Technology & Cyber",
    title: "Technology & IP Law",
    summary: "Protecting innovation in an era of generative models, algorithmic copyright, decentralized autonomous protocols, and sovereign cloud mandates.",
    duration: "8 Weeks",
    cle: "28 CLE Credits",
    faculty: "Prof. Sarah Sterling",
    level: "Advanced Master",
  },
  {
    id: "corporate-restructure",
    category: "corporate",
    track: "Commercial & Financial",
    title: "Corporate Restructuring & Solvency",
    summary: "The transactional and contentious mechanics of Chapter 11 reorganizations, distressed M&A, cross-border insolvencies, and creditor rights.",
    duration: "10 Weeks",
    cle: "32 CLE Credits",
    faculty: "Hon. Marcus Vance",
    level: "Executive Fellow",
  },
  {
    id: "intl-treaties",
    category: "intl",
    track: "Global Diplomatic & Supranational",
    title: "International Law & Treaties",
    summary: "Navigating the complex webs of cross-border jurisdiction, supranational agreements, ISDS bilateral arbitrations, and state immunity doctrines.",
    duration: "12 Weeks",
    cle: "36 CLE Credits",
    faculty: "Dr. Tariq Al-Mansoor",
    level: "Advanced Master",
  },
  {
    id: "constitutional-privacy",
    category: "constitutional",
    track: "Constitutional Law & Civil Liberties",
    title: "Constitutional Tensions in Digital Privacy",
    summary: "Interrogating the reasonable expectation of privacy in modern communications, bulk surveillance, location telemetry, and algorithmic search warrants.",
    duration: "6 Weeks",
    cle: "20 CLE Credits",
    faculty: "Prof. Elena Rostova",
    level: "Executive Fellow",
  },
  {
    id: "ai-liability",
    category: "tech",
    track: "Emergent Technology & Governance",
    title: "Corporate Liability in AI Decisions",
    summary: "Analyzing precedent and liability assignment when algorithmic systems cause demonstrable financial, civil, or medical harm.",
    duration: "6 Weeks",
    cle: "22 CLE Credits",
    faculty: "Prof. Sarah Sterling",
    level: "Advanced Master",
  },
];

export default function CoursesPage() {
  const { openSyllabus, openEnroll } = useApp();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const translatedTitle = t(course.title);
    const translatedSummary = t(course.summary);
    const translatedFaculty = t(course.faculty);
    const term = searchTerm.toLowerCase();

    const matchesSearch =
      !searchTerm ||
      course.title.toLowerCase().includes(term) ||
      course.summary.toLowerCase().includes(term) ||
      course.faculty.toLowerCase().includes(term) ||
      translatedTitle.toLowerCase().includes(term) ||
      translatedSummary.toLowerCase().includes(term) ||
      translatedFaculty.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="pill-badge" style={{ marginBottom: "16px" }}>
              {t("ACADEMIC CURRICULA")}
            </span>
            <h1 className="display-md page-hero-title">
              {t("Curated Programs & Syllabus Directory")}
            </h1>
            <p className="body-lg">
              {t(
                "Structured pathways engineered for practicing advocates, corporate counsels, and judiciary candidates seeking mastery in modern jurisprudential doctrines."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="courses-filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            {/* Search Input */}
            <div className="search-input-group">
              <span className="search-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                className="search-input"
                placeholder={t("Search curricula by doctrine, topic, or faculty...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Pills */}
            <div className="filter-categories">
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                {t("All Curricula")} ({COURSES_DATA.length})
              </button>
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "foundational" ? "active" : ""}`}
                onClick={() => setSelectedCategory("foundational")}
              >
                {t("Foundational JD")}
              </button>
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "tech" ? "active" : ""}`}
                onClick={() => setSelectedCategory("tech")}
              >
                {t("Technology & AI Law")}
              </button>
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "corporate" ? "active" : ""}`}
                onClick={() => setSelectedCategory("corporate")}
              >
                {t("Corporate Restructuring")}
              </button>
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "intl" ? "active" : ""}`}
                onClick={() => setSelectedCategory("intl")}
              >
                {t("International Treaties")}
              </button>
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "constitutional" ? "active" : ""}`}
                onClick={() => setSelectedCategory("constitutional")}
              >
                {t("Constitutional Privacy")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Catalog Grid */}
      <section className="courses-catalog-section">
        <div className="container">
          <div style={{ marginBottom: "28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="label-md" style={{ color: "var(--outline)" }}>
              {t("SHOWING")} {filteredCourses.length} {filteredCourses.length === 1 ? t("PROGRAM") : t("PROGRAMS")}
            </span>
            <span className="label-md" style={{ color: "var(--secondary)" }}>
              {t("ALL PROGRAMS CLE & SRA ACCREDITED")}
            </span>
          </div>

          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div>
                  <div className="course-badge-row">
                    <span className="pill-badge">{t(course.track)}</span>
                    <span className="label-md" style={{ color: "var(--outline)" }}>
                      {t(course.level)}
                    </span>
                  </div>

                  <h3 className="course-title">{t(course.title)}</h3>
                  <p className="course-summary">{t(course.summary)}</p>
                </div>

                <div>
                  <div className="course-meta-list">
                    <div className="course-meta-item">
                      <span className="course-meta-label">{t("Duration")}</span>
                      <span className="course-meta-val">{t(course.duration)}</span>
                    </div>
                    <div className="course-meta-item">
                      <span className="course-meta-label">{t("Credits")}</span>
                      <span className="course-meta-val">{t(course.cle)}</span>
                    </div>
                    <div className="course-meta-item" style={{ gridColumn: "span 2" }}>
                      <span className="course-meta-label">{t("Faculty Lead")}</span>
                      <span className="course-meta-val">{t(course.faculty)}</span>
                    </div>
                  </div>

                  <div className="course-actions">
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => openSyllabus(course.id)}
                    >
                      {t("View Syllabus")}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => openEnroll(t(course.title))}
                    >
                      {t("Apply Now")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <h3 className="headline-lg" style={{ marginBottom: "12px" }}>
                {t("No Matching Programs Found")}
              </h3>
              <p className="body-md" style={{ marginBottom: "24px" }}>
                {t("Try adjusting your search criteria or explore our foundational syllabus.")}
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
              >
                {t("Reset Curricula Filters")}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Pedagogical Rigor Section */}
      <section className="programs-section" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "center" }}>
            <span className="pill-badge" style={{ marginBottom: "14px" }}>
              {t("PEDAGOGICAL ARCHITECTURE")}
            </span>
            <h2 className="section-title">{t("The SRS Learning Standard")}</h2>
            <p className="section-subhead">
              {t("We blend classical Socratic methods with modern algorithmic legal simulations.")}
            </p>
          </div>

          <div className="metrics-grid" style={{ marginTop: "48px" }}>
            <div className="metric-item">
              <span className="metric-number">01</span>
              <span className="metric-label" style={{ color: "var(--primary)", fontSize: "14px", marginBottom: "8px" }}>
                {t("Socratic Interrogations")}
              </span>
              <p className="body-md" style={{ fontSize: "14px", lineHeight: "22px" }}>
                {t("Bi-weekly live video colloquia dissecting active court cases with sitting federal and supranational judges.")}
              </p>
            </div>
            <div className="metric-item">
              <span className="metric-number">02</span>
              <span className="metric-label" style={{ color: "var(--primary)", fontSize: "14px", marginBottom: "8px" }}>
                {t("Asynchronous Moot Bench")}
              </span>
              <p className="body-md" style={{ fontSize: "14px", lineHeight: "22px" }}>
                {t("Submit briefs and recorded oral arguments reviewed by high-court fellows with line-by-line judicial annotations.")}
              </p>
            </div>
            <div className="metric-item">
              <span className="metric-number">03</span>
              <span className="metric-label" style={{ color: "var(--primary)", fontSize: "14px", marginBottom: "8px" }}>
                {t("Verifiable Credentials")}
              </span>
              <p className="body-md" style={{ fontSize: "14px", lineHeight: "22px" }}>
                {t("Cryptographically signed CLE certificates recognized across prominent bar associations and arbitral tribunals.")}
              </p>
            </div>
            <div className="metric-item">
              <span className="metric-number">04</span>
              <span className="metric-label" style={{ color: "var(--primary)", fontSize: "14px", marginBottom: "8px" }}>
                {t("Institutional Network")}
              </span>
              <p className="body-md" style={{ fontSize: "14px", lineHeight: "22px" }}>
                {t("Direct access to chambers, international tribunals in The Hague, and premier corporate restructuring teams.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
