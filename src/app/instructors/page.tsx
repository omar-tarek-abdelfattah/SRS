"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { useLanguage } from "@/context/LanguageContext";

interface FacultyMember {
  id: string;
  name: string;
  chair: string;
  honorific: string;
  discipline: "constitutional" | "corporate" | "tech" | "intl";
  photo: string;
  bio: string;
  formerRole: string;
  treatise: string;
  courseId: string;
  courseTitle: string;
  cleTaught: string;
}

const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "rostova",
    name: "Prof. Elena Rostova",
    chair: "Chair of Constitutional Jurisprudence & Cyber Civil Liberties",
    honorific: "Senior Fellow, European Institute of Human Rights",
    discipline: "constitutional",
    photo: "/assets/faculty-rostova.jpg",
    bio: "Prof. Rostova is one of the world's foremost scholars on the tension between classical constitutional protections and autonomous computational surveillance. Formerly counsel to the European Court of Human Rights and special rapporteur on state bulk data interception.",
    formerRole: "Adviser to the ECHR & Hague Privacy Tribunal",
    treatise: "The Perforated Veil: Fourth Amendment Geometry in Algorithmic Societies (Oxford Univ. Press, 2023)",
    courseId: "constitutional-privacy",
    courseTitle: "Constitutional Tensions in Digital Privacy",
    cleTaught: "Constitutional Privacy & JD Essentials",
  },
  {
    id: "vance",
    name: "Hon. Marcus Vance",
    chair: "Distinguished Jurist-in-Residence & Chair of Solvency Law",
    honorific: "Former Presiding Judge, US Court of Appeals",
    discipline: "corporate",
    photo: "/assets/faculty-vance.jpg",
    bio: "With over 28 years on the federal appellate bench, Judge Vance presided over many of the century's most intricate corporate reorganizations, high-stakes Chapter 11 confirmations, and cross-border commercial disputes.",
    formerRole: "Presiding Judge, Federal Circuit Court of Appeals",
    treatise: "The Architecture of Reorganization: Modern Chapter 11 Jurisprudence (Harvard Law Review Press, 2021)",
    courseId: "corporate-restructure",
    courseTitle: "Corporate Restructuring & Solvency",
    cleTaught: "Corporate Solvency & JurisDoctorate Essentials",
  },
  {
    id: "almansoor",
    name: "Dr. Tariq Al-Mansoor",
    chair: "Chair of Supranational Arbitration & Diplomatic Treaties",
    honorific: "Senior Arbitrator, Permanent Court of Arbitration (The Hague)",
    discipline: "intl",
    photo: "/assets/faculty-almansoor.jpg",
    bio: "Dr. Al-Mansoor has represented sovereign states and transnational entities in over 70 multi-billion-dollar investor-state disputes (ISDS) and boundary delineations. He lectures regularly at Geneva, Oxford, and Leiden.",
    formerRole: "Member of the International Law Commission & ICSID Panel",
    treatise: "Sovereign Treaties in Flux: The Mechanics of Modern Bilateral Instruments (Cambridge Univ. Press, 2022)",
    courseId: "intl-treaties",
    courseTitle: "International Law & Treaties",
    cleTaught: "International Law, Geopolitical Treaties & State Immunity",
  },
  {
    id: "sterling",
    name: "Prof. Sarah Sterling",
    chair: "Chair of Computational Jurisprudence & Intellectual Property",
    honorific: "Special Master on Algorithmic Rights & Intellectual Precedent",
    discipline: "tech",
    photo: "/assets/faculty-sterling.jpg",
    bio: "Prof. Sterling has pioneered legal frameworks governing liability in autonomous neural systems, generative fair-use doctrine, and algorithmic torts. She advises both parliamentary legislative committees and major technology consortia.",
    formerRole: "Lead Reporter, American Law Institute Restatement on AI Liability",
    treatise: "Synthetic Intellect and the Law: Attribution, Authorship, and Tort (Yale Law Journal Monograph, 2024)",
    courseId: "ai-liability",
    courseTitle: "Corporate Liability in AI Decisions",
    cleTaught: "Technology & IP Law, AI Decisions & Algorithmic Liability",
  },
];

export default function InstructorsPage() {
  const { openSyllabus, openDiscourse, triggerToast } = useApp();
  const { t } = useLanguage();
  const [activeDiscipline, setActiveDiscipline] = useState<string>("all");

  const filteredFaculty = FACULTY_MEMBERS.filter(
    (f) => activeDiscipline === "all" || f.discipline === activeDiscipline
  );

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner reveal">
            <span className="pill-badge" style={{ marginBottom: "16px" }}>
              {t("ACADEMIC SENATE & JURISTS")}
            </span>
            <h1 className="display-md page-hero-title">
              {t("The Faculty of Jurists & Scholars")}
            </h1>
            <p className="body-lg">
              {t(
                "Education at SRS Legal Institute is commanded by sitting arbitrators, retired appellate jurists, and leading legal theoreticians who draft the precedents shaping global jurisprudence."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="faculty-filter-bar reveal delay-75">
        <div className="container">
          <div className="filter-categories mt-5" style={{ justifyContent: "center" }}>
            <button
              type="button"
              className={`filter-pill ${activeDiscipline === "all" ? "active" : ""}`}
              onClick={() => setActiveDiscipline("all")}
            >
              {t("All Faculty")} ({FACULTY_MEMBERS.length})
            </button>
            <button
              type="button"
              className={`filter-pill ${activeDiscipline === "constitutional" ? "active" : ""}`}
              onClick={() => setActiveDiscipline("constitutional")}
            >
              {t("Constitutional Bench")}
            </button>
            <button
              type="button"
              className={`filter-pill ${activeDiscipline === "corporate" ? "active" : ""}`}
              onClick={() => setActiveDiscipline("corporate")}
            >
              {t("Corporate Restructuring")}
            </button>
            <button
              type="button"
              className={`filter-pill ${activeDiscipline === "intl" ? "active" : ""}`}
              onClick={() => setActiveDiscipline("intl")}
            >
              {t("International & Treaties")}
            </button>
            <button
              type="button"
              className={`filter-pill ${activeDiscipline === "tech" ? "active" : ""}`}
              onClick={() => setActiveDiscipline("tech")}
            >
              {t("Technology & AI Ethics")}
            </button>
          </div>
        </div>
      </div>

      {/* Faculty Roster */}
      <section className="instructors-roster">
        <div className="container">
          {filteredFaculty.map((member) => (
            <div key={member.id} className="instructor-expanded-card reveal-scale">
              {/* Left Photo */}
              <div className="instructor-card-media">
                <Image
                  src={member.photo}
                  alt={t(member.name)}
                  width={600}
                  height={600}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>

              {/* Right Details */}
              <div className="instructor-card-body">
                <div>
                  <div className="instructor-header-group">
                    <span className="instructor-honorific">{t(member.honorific)}</span>
                    <h2 className="instructor-faculty-title">{t(member.name)}</h2>
                    <p className="label-md" style={{ color: "var(--primary)", marginTop: "4px" }}>
                      {t(member.chair)}
                    </p>
                  </div>

                  <p className="body-md" style={{ marginBottom: "20px" }}>
                    {t(member.bio)}
                  </p>

                  <div className="instructor-dossier-list">
                    <div className="dossier-item">
                      <span className="dossier-item-label">{t("Prior Appointment")}</span>
                      <span className="dossier-item-val">{t(member.formerRole)}</span>
                    </div>
                    <div className="dossier-item">
                      <span className="dossier-item-label">{t("Curriculum Lead")}</span>
                      <span className="dossier-item-val">{t(member.courseTitle)}</span>
                    </div>
                    <div className="dossier-item">
                      <span className="dossier-item-label">{t("Seminars Taught")}</span>
                      <span className="dossier-item-val">{t(member.cleTaught)}</span>
                    </div>
                  </div>

                  <div style={{ padding: "14px 18px", backgroundColor: "var(--surface)", borderRadius: "var(--radius-base)", border: "1px solid var(--border-hairline)" }}>
                    <span className="dossier-item-label">{t("Key Published Treatise")}</span>
                    <p style={{ fontStyle: "italic", fontSize: "13px", marginTop: "4px", color: "var(--on-surface)" }}>
                      &ldquo;{t(member.treatise)}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="instructor-actions">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => openSyllabus(member.courseId)}
                  >
                    {t("View Assigned Curriculum")}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => openDiscourse(t("Colloquium with {name}", { name: t(member.name) }))}
                  >
                    {t("Request Socratic Pass")}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => triggerToast(t("Academic Dossier for {name} copied to clipboard.", { name: t(member.name) }))}
                    style={{ padding: "0 16px" }}
                    title={t("Share Academic Profile")}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Lecturers and Visiting Judges */}
      <section className="programs-section" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: "center" }}>
            <span className="pill-badge" style={{ marginBottom: "14px" }}>
              {t("VISITING JURISTS & CHAIRS")}
            </span>
            <h2 className="section-title">{t("Honorary Bench Lecturers")}</h2>
            <p className="section-subhead">
              {t("SRS Fellows regularly engage with guest lecturers from supreme tribunals and premier law chambers around the world.")}
            </p>
          </div>

          <div className="metrics-grid" style={{ marginTop: "40px" }}>
            <div className="metric-item reveal delay-75">
              <span className="faculty-name" style={{ fontSize: "18px" }}>{t("Lord Chancellor Peter Croft")}</span>
              <span className="instructor-honorific" style={{ fontSize: "11px", margin: "4px 0" }}>{t("King's Bench Division (Ret.)")}</span>
              <p className="body-md" style={{ fontSize: "13px" }}>{t("Directing the Annual Hilary Moot Championship on supranational commercial jurisdiction.")}</p>
            </div>
            <div className="metric-item reveal delay-150">
              <span className="faculty-name" style={{ fontSize: "18px" }}>{t("Dame Miriam O'Connor")}</span>
              <span className="instructor-honorific" style={{ fontSize: "11px", margin: "4px 0" }}>{t("High Court of Admiralty")}</span>
              <p className="body-md" style={{ fontSize: "13px" }}>{t("Leading specialized colloquia on maritime salvage rights and cross-border arrest of ships.")}</p>
            </div>
            <div className="metric-item reveal delay-200">
              <span className="faculty-name" style={{ fontSize: "18px" }}>{t("Dr. Aris Thorne")}</span>
              <span className="instructor-honorific" style={{ fontSize: "11px", margin: "4px 0" }}>{t("Geneva Institute of Diplomatic Law")}</span>
              <p className="body-md" style={{ fontSize: "13px" }}>{t("Overseeing sovereign immunity seminars and extraterritorial economic sanctions frameworks.")}</p>
            </div>
            <div className="metric-item reveal delay-250">
              <span className="faculty-name" style={{ fontSize: "18px" }}>{t("Justice Evelyn Chen")}</span>
              <span className="instructor-honorific" style={{ fontSize: "11px", margin: "4px 0" }}>{t("Singapore International Commercial Court")}</span>
              <p className="body-md" style={{ fontSize: "13px" }}>{t("Chairing masterclasses on multi-tiered dispute resolution in Asian commercial corridors.")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
