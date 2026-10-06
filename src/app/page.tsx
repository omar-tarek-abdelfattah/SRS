"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function HomePage() {
  const { openSyllabus, openEnroll, openDiscourse } = useApp();
  const [manifestoOpen, setManifestoOpen] = useState(false);

  // Dynamic countdown states
  const [time1, setTime1] = useState({ days: "02", hours: "14", minutes: "45" });
  const [time2, setTime2] = useState({ days: "05", hours: "09", minutes: "12" });

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate live decrementing countdown
      setTime1((prev) => {
        let m = parseInt(prev.minutes, 10) - 1;
        let h = parseInt(prev.hours, 10);
        let d = parseInt(prev.days, 10);
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 23;
          d -= 1;
        }
        return {
          days: String(d).padStart(2, "0"),
          hours: String(h).padStart(2, "0"),
          minutes: String(m).padStart(2, "0"),
        };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 1. HERO SECTION (Matches screen.png) */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <span className="pill-badge hero-pill">
                MODERN JURISPRUDENCE
              </span>

              <h1 className="display-lg hero-title">
                Master the Architecture of Law.
              </h1>

              <p className="body-lg hero-description">
                A rigorous, contemporary approach to legal education. We strip
                away the archaic to focus on structural integrity, critical
                analysis, and the pure mechanics of justice in the digital age.
              </p>

              <div className="hero-actions">
                <Link href="/courses" className="btn btn-primary">
                  EXPLORE CURRICULUM
                </Link>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setManifestoOpen(true)}
                  style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}
                >
                  <span className="btn-icon-circle">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </span>
                  VIEW MANIFESTO
                </button>
              </div>
            </div>

            {/* Right Architectural Visual */}
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <Image
                  src="/assets/hero-monolith.jpg"
                  alt="Minimalist architectural monolith symbolizing structural jurisprudence"
                  width={600}
                  height={800}
                  priority
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL METRICS BANNER */}
      <section className="metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-number">98.4%</span>
              <span className="metric-label">Bar & Tribunal Examination Pass Rate</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">45+</span>
              <span className="metric-label">Accredited Specialization Modules</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">140+</span>
              <span className="metric-label">Partner Chambers, Firms & Tribunals</span>
            </div>
            <div className="metric-item">
              <span className="metric-number">12:1</span>
              <span className="metric-label">Candidate Fellow to Senior Jurist Ratio</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIVE DISCOURSE SECTION (Matches screen.png) */}
      <section className="discourse-section">
        <div className="container">
          <div className="section-header flex-header">
            <div>
              <h2 className="section-title">Live Discourse</h2>
              <p className="section-subhead">
                Join our faculty for imminent interrogations of contemporary legal frameworks.
              </p>
            </div>
            <Link href="/courses" className="section-header-link">
              ALL SESSIONS &rarr;
            </Link>
          </div>

          <div className="discourse-grid">
            {/* Discourse Card 1 */}
            <div className="discourse-card">
              <div>
                <div className="discourse-card-top">
                  <span className="pill-badge dark">SEMINAR</span>
                  <div className="discourse-card-icon" title="Legal Philosophy & Rights">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>

                <h3 className="discourse-card-title">
                  Constitutional Tensions in Digital Privacy
                </h3>

                <p className="discourse-card-desc">
                  Prof. Elena Rostova explores the friction between 4th Amendment principles and pervasive algorithmic data collection.
                </p>
              </div>

              <div className="discourse-card-footer">
                <div className="countdown-box">
                  <div className="countdown-unit">
                    <span className="countdown-digits">{time1.days}</span>
                    <span className="countdown-label">DAYS</span>
                  </div>
                  <div className="countdown-unit">
                    <span className="countdown-digits">{time1.hours}</span>
                    <span className="countdown-label">HRS</span>
                  </div>
                  <div className="countdown-unit">
                    <span className="countdown-digits">{time1.minutes}</span>
                    <span className="countdown-label">MIN</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => openDiscourse("Constitutional Tensions in Digital Privacy")}
                >
                  REGISTER
                </button>
              </div>
            </div>

            {/* Discourse Card 2 */}
            <div className="discourse-card">
              <div>
                <div className="discourse-card-top">
                  <span className="pill-badge" style={{ backgroundColor: "var(--neutral-stone)" }}>
                    WORKSHOP
                  </span>
                  <div className="discourse-card-icon" title="Courtroom & Judicial Precedent">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 21h18M4 18h16M6 18V9M10 18V9M14 18V9M18 18V9M2 9l10-5 10 5" />
                    </svg>
                  </div>
                </div>

                <h3 className="discourse-card-title">
                  Corporate Liability in AI Decisions
                </h3>

                <p className="discourse-card-desc">
                  Analyzing precedent and liability assignment when algorithmic systems cause demonstrable financial and societal harm.
                </p>
              </div>

              <div className="discourse-card-footer">
                <div className="countdown-box">
                  <div className="countdown-unit">
                    <span className="countdown-digits">{time2.days}</span>
                    <span className="countdown-label">DAYS</span>
                  </div>
                  <div className="countdown-unit">
                    <span className="countdown-digits">{time2.hours}</span>
                    <span className="countdown-label">HRS</span>
                  </div>
                  <div className="countdown-unit">
                    <span className="countdown-digits">{time2.minutes}</span>
                    <span className="countdown-label">MIN</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => openDiscourse("Corporate Liability in AI Decisions")}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURATED PROGRAMS SECTION (Matches screen.png) */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Curated Programs</h2>
            <p className="section-subhead">
              Structured pathways designed to impart absolute mastery over specific legal domains.
            </p>
          </div>

          <div className="programs-grid">
            {/* Large Featured Core Track Card */}
            <div
              className="program-card program-card-core"
              onClick={() => openSyllabus("jd-essentials")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") openSyllabus("jd-essentials"); }}
            >
              <div>
                <div className="program-card-top">
                  <span className="program-meta-track">CORE TRACK</span>
                  <div style={{ color: "var(--outline)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 21h18M4 18h16M6 18V9M10 18V9M14 18V9M18 18V9M2 9l10-5 10 5" />
                    </svg>
                  </div>
                </div>

                <h3 className="program-card-title">
                  JurisDoctorate (JD) Essentials
                </h3>

                <p className="program-card-desc">
                  The foundational architecture of legal reasoning, contracts, and torts. Rigorous analysis of precedent and judicial interpretation for the modern era.
                </p>
              </div>

              <div className="program-card-footer">
                <span>14 WEEKS &bull; 45 CLE CREDITS</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  VIEW SYLLABUS &rarr;
                </span>
              </div>
            </div>

            {/* Right 2x2 Subgrid */}
            <div className="programs-subgrid">
              {/* Subcard 1 */}
              <div
                className="program-card program-card-compact"
                onClick={() => openSyllabus("intl-treaties")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") openSyllabus("intl-treaties"); }}
              >
                <div>
                  <div className="program-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h4 className="program-card-title">
                    International Law & Treaties
                  </h4>
                  <p className="program-card-desc">
                    Navigating the complex webs of cross-border jurisdiction and supranational agreements.
                  </p>
                </div>
                <div className="program-card-footer">
                  <span>12 MODULES</span>
                  <span>&rarr;</span>
                </div>
              </div>

              {/* Subcard 2 */}
              <div
                className="program-card program-card-compact"
                onClick={() => openSyllabus("tech-ip")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") openSyllabus("tech-ip"); }}
              >
                <div>
                  <div className="program-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" />
                      <line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" />
                      <line x1="15" y1="20" x2="15" y2="23" />
                    </svg>
                  </div>
                  <h4 className="program-card-title">
                    Technology & IP Law
                  </h4>
                  <p className="program-card-desc">
                    Protecting innovation in an era of rapid technological disruption and AI models.
                  </p>
                </div>
                <div className="program-card-footer">
                  <span>8 MODULES</span>
                  <span>&rarr;</span>
                </div>
              </div>

              {/* Subcard 3 */}
              <div
                className="program-card program-card-compact"
                onClick={() => openSyllabus("corporate-restructure")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") openSyllabus("corporate-restructure"); }}
              >
                <div>
                  <div className="program-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h4 className="program-card-title">
                    Corporate Restructuring
                  </h4>
                  <p className="program-card-desc">
                    The mechanics of bankruptcy, cross-border mergers, and massive structural shifts.
                  </p>
                </div>
                <div className="program-card-footer">
                  <span>10 MODULES</span>
                  <span>&rarr;</span>
                </div>
              </div>

              {/* Subcard 4: Solid Black Accent Card (Matches screen.png) */}
              <div className="program-card program-card-black">
                <div style={{ color: "#ffffff", opacity: 0.8 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <h4 className="program-card-title">
                  View Syllabus Directory
                </h4>
                <p className="program-card-desc">
                  Explore all 45+ specialized programs and sovereign jurisprudence modules.
                </p>
                <Link href="/courses" className="btn btn-outline-white">
                  BROWSE ALL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FACULTY SPOTLIGHT SECTION */}
      <section className="faculty-spotlight">
        <div className="container">
          <div className="section-header flex-header">
            <div>
              <h2 className="section-title">The Jurists & Scholars</h2>
              <p className="section-subhead">
                Instruction led by senior jurists, former appellate justices, and supreme court advocates.
              </p>
            </div>
            <Link href="/instructors" className="section-header-link">
              MEET FULL FACULTY &rarr;
            </Link>
          </div>

          <div className="faculty-grid">
            {/* Faculty 1 */}
            <div className="faculty-card">
              <div className="faculty-photo-wrap">
                <Image
                  src="/assets/faculty-rostova.jpg"
                  alt="Prof. Elena Rostova"
                  width={400}
                  height={400}
                />
              </div>
              <div className="faculty-info">
                <h4 className="faculty-name">Prof. Elena Rostova</h4>
                <span className="faculty-chair">Constitutional Law & Cyber Rights</span>
                <p className="faculty-bio">
                  Former advisor to the European Court of Human Rights. Leading authority on digital Fourth Amendment privacy and algorithmic surveillance.
                </p>
                <Link href="/instructors" className="faculty-link">
                  VIEW DOSSIER &rarr;
                </Link>
              </div>
            </div>

            {/* Faculty 2 */}
            <div className="faculty-card">
              <div className="faculty-photo-wrap">
                <Image
                  src="/assets/faculty-vance.jpg"
                  alt="Hon. Marcus Vance"
                  width={400}
                  height={400}
                />
              </div>
              <div className="faculty-info">
                <h4 className="faculty-name">Hon. Marcus Vance</h4>
                <span className="faculty-chair">Appellate Procedure & Solvency</span>
                <p className="faculty-bio">
                  Former Federal Appellate Judge with 28 years presiding over major corporate reorganizations and complex commercial litigation.
                </p>
                <Link href="/instructors" className="faculty-link">
                  VIEW DOSSIER &rarr;
                </Link>
              </div>
            </div>

            {/* Faculty 3 */}
            <div className="faculty-card">
              <div className="faculty-photo-wrap">
                <Image
                  src="/assets/faculty-almansoor.jpg"
                  alt="Dr. Tariq Al-Mansoor"
                  width={400}
                  height={400}
                />
              </div>
              <div className="faculty-info">
                <h4 className="faculty-name">Dr. Tariq Al-Mansoor</h4>
                <span className="faculty-chair">International Treaties & Arbitration</span>
                <p className="faculty-bio">
                  Senior Arbitrator at the Permanent Court of Arbitration in The Hague. Counsel on cross-border treaty disputes and sovereign claims.
                </p>
                <Link href="/instructors" className="faculty-link">
                  VIEW DOSSIER &rarr;
                </Link>
              </div>
            </div>

            {/* Faculty 4 */}
            <div className="faculty-card">
              <div className="faculty-photo-wrap">
                <Image
                  src="/assets/faculty-sterling.jpg"
                  alt="Prof. Sarah Sterling"
                  width={400}
                  height={400}
                />
              </div>
              <div className="faculty-info">
                <h4 className="faculty-name">Prof. Sarah Sterling</h4>
                <span className="faculty-chair">AI Liability & Intellectual Property</span>
                <p className="faculty-bio">
                  Special Master on generative neural net copyright and synthetic intelligence liability frameworks across US and EU jurisdictions.
                </p>
                <Link href="/instructors" className="faculty-link">
                  VIEW DOSSIER &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div>
              <span className="pill-badge" style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", color: "#ffffff", borderColor: "rgba(255,255,255,0.2)", marginBottom: "16px" }}>
                ROLLING MATRICULATION
              </span>
              <h2>Admissions for Michaelmas & Hilary Terms</h2>
              <p>
                Applications for specialized fellowships and CLE certifications are reviewed by the Academic Senate. Join an uncompromising community of legal practitioners.
              </p>
            </div>
            <div className="cta-buttons">
              <button
                type="button"
                className="btn btn-outline-white"
                onClick={() => openEnroll("Admissions Fellowship Application")}
              >
                APPLY FOR FELLOWSHIP
              </button>
              <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
                CONTACT ADMISSIONS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO MODAL */}
      {manifestoOpen && (
        <div
          className="modal-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) setManifestoOpen(false); }}
        >
          <div className="modal-card" style={{ maxWidth: "700px" }}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setManifestoOpen(false)}
            >
              &times;
            </button>
            <span className="pill-badge" style={{ marginBottom: "16px" }}>
              INSTITUTE MANIFESTO
            </span>
            <h3 className="headline-lg" style={{ marginBottom: "16px" }}>
              The Philosophy of Modern Jurisprudence
            </h3>
            <p className="body-md" style={{ marginBottom: "16px" }}>
              Legal institutions cannot remain static while commerce, sovereign borders, and computational intelligence fundamentally re-architect society.
            </p>
            <p className="body-md" style={{ marginBottom: "16px" }}>
              At SRS Legal Institute (Al-Qanun), we strip away procedural bloat to focus on structural rigor. We teach jurisprudence not as historical trivia, but as the underlying operating system of civilization.
            </p>
            <div style={{ marginTop: "28px", borderTop: "1px solid var(--border-hairline)", paddingTop: "20px" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setManifestoOpen(false)}
              >
                Return to Curriculum
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
