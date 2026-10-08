"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { triggerToast } = useApp();
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: "Admissions & Matriculation",
    jurisdiction: "United Kingdom & Europe",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      triggerToast(
        t(
          "Formal Petition Dispatched to the Institute Registry. You will receive an official response within 24 hours."
        )
      );
      setForm({
        name: "",
        email: "",
        inquiryType: "Admissions & Matriculation",
        jurisdiction: "United Kingdom & Europe",
        message: "",
      });
    }, 1200);
  };

  const faqs = [
    {
      q: "What are the matriculation prerequisites for candidate fellows?",
      a: "Applicants should hold an undergraduate degree in law (LL.B, JD) or demonstrate equivalent professional standing within a recognized judiciary, government counsel office, or qualified legal practice. Emerging tech practitioners with patent experience may qualify under special review."
    },
    {
      q: "How are CLE, SRA, and international credits certified?",
      a: "SRS Legal Institute is accredited across major jurisdictions. All modules grant verifiable Continuing Legal Education (CLE) and Continuing Professional Development (CPD) hours. Upon completion, fellows receive cryptographically verified digital diplomas."
    },
    {
      q: "Are discourses and Socratic colloquia held synchronously or asynchronously?",
      a: "Our core lectures, annotated case briefs, and statutory analysis modules are accessible 24/7. Live Socratic interrogations with faculty chairs take place weekly at scheduled intervals and are recorded with full judicial transcripts."
    },
    {
      q: "Can law firms and chambers license institutional enterprise access?",
      a: "Yes. Premier chambers and international law firms frequently enroll incoming associate classes into our JurisDoctorate Essentials and Technology Law curriculums. Tailored jurisdictional tracks and cohort benchmarking are provided."
    },
    {
      q: "What is the examination and moot bench evaluation protocol?",
      a: "Assessments are not multiple-choice tests. Fellows submit formal appellate briefs and participate in recorded oral arguments judged by former appellate judges and supreme court advocates against rigorous bench rubrics."
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="pill-badge" style={{ marginBottom: "16px" }}>
              {t("INSTITUTIONAL REGISTRY")}
            </span>
            <h1 className="display-md page-hero-title">
              {t("Inquiries & Institutional Access")}
            </h1>
            <p className="body-lg">
              {t(
                "Connect with the Academic Registry, Admissions Senate, or Chambers Administration regarding fellowships, corporate cohorts, or faculty colloquia."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container">
        <div className="contact-layout-grid">
          {/* Left: Contact Form Panel */}
          <div className="contact-form-panel">
            <h2 className="headline-lg" style={{ marginBottom: "8px" }}>
              {t("Submit Formal Petition")}
            </h2>
            <p className="body-md" style={{ marginBottom: "32px" }}>
              {t(
                "Please complete the inquiry dossier below. All communications are protected under academic attorney-client privilege guidelines."
              )}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  {t("Full Name & Title")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. Barrister Jonathan Sterling, KC"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  {t("Institutional / Chambers Email")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="form-control"
                  placeholder="j.sterling@lincolnsinn.org.uk"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-inquiry">
                  {t("Nature of Inquiry")}
                </label>
                <select
                  id="contact-inquiry"
                  className="form-control select-control"
                  value={form.inquiryType}
                  onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                >
                  <option value="Admissions & Matriculation">{t("Admissions & Fellowships")}</option>
                  <option value="Firm & Corporate Licensing">{t("Chambers & Firm Cohort Licensing")}</option>
                  <option value="Continuing Legal Education">{t("CLE / CPD Accreditation Verification")}</option>
                  <option value="Faculty & Academic Collaboration">{t("Academic Colloquium & Research")}</option>
                  <option value="Press & Institutional Affairs">{t("Press & Judicial Communications")}</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-jurisdiction">
                  {t("Primary Jurisdiction of Concern")}
                </label>
                <select
                  id="contact-jurisdiction"
                  className="form-control select-control"
                  value={form.jurisdiction}
                  onChange={(e) => setForm({ ...form, jurisdiction: e.target.value })}
                >
                  <option value="United Kingdom & Europe">United Kingdom & Europe (Common / Civil)</option>
                  <option value="United States Federal & State">United States Federal & State Benches</option>
                  <option value="Middle East & GCC">Middle East & GCC Arbitration Benches</option>
                  <option value="Asia-Pacific & Singapore">Asia-Pacific & SICC / HKIAC</option>
                  <option value="Supranational / International">Supranational (The Hague / ICSID / WTO)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  {t("Statement of Intent / Inquiry Details")}
                </label>
                <textarea
                  id="contact-message"
                  required
                  className="form-control"
                  placeholder="Specify candidate background, cohort scale, or research questions for the Academic Registry..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "12px" }}
                disabled={submitting}
              >
                {submitting ? t("Transmitting to Registry...") : t("Transmit Formal Petition")}
              </button>
            </form>
          </div>

          {/* Right: Chambers and Contacts Panel */}
          <div className="contact-info-panel">
            {/* Global Chambers */}
            <div className="chambers-card">
              <span className="pill-badge" style={{ marginBottom: "12px" }}>
                {t("PERMANENT REGISTRIES")}
              </span>
              <h3 className="chambers-title">{t("Global Institute Chambers")}</h3>
              <p className="body-md" style={{ fontSize: "14px" }}>
                {t("Physical offices and moot court simulation facilities for matriculated fellows.")}
              </p>

              <div className="chambers-list">
                <div className="chamber-location-item">
                  <div className="chamber-city">{t("London Chambers")}</div>
                  <div className="chamber-address">
                    12 Lincoln&apos;s Inn Fields, Holborn<br />
                    London WC2A 3TL, United Kingdom<br />
                    <span style={{ fontSize: "12px", color: "var(--primary)" }}>+44 20 7946 0912</span>
                  </div>
                </div>

                <div className="chamber-location-item">
                  <div className="chamber-city">{t("New York Registry")}</div>
                  <div className="chamber-address">
                    450 Lexington Avenue, 28th Floor<br />
                    New York, NY 10017, United States<br />
                    <span style={{ fontSize: "12px", color: "var(--primary)" }}>+1 (212) 555-0188</span>
                  </div>
                </div>

                <div className="chamber-location-item">
                  <div className="chamber-city">{t("Geneva Bureau")}</div>
                  <div className="chamber-address">
                    14 Rue du Rhône, Quartier des Banques<br />
                    1204 Genève, Switzerland<br />
                    <span style={{ fontSize: "12px", color: "var(--primary)" }}>+41 22 518 90 40</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Admissions Hotline */}
            <div className="chambers-card">
              <span className="pill-badge" style={{ marginBottom: "12px" }}>
                {t("REGISTRAR DESK")}
              </span>
              <h3 className="chambers-title">{t("Admissions Hotline")}</h3>
              <p className="body-md" style={{ fontSize: "14px", marginBottom: "16px" }}>
                {t("Direct channels for prospective fellows, corporate deans, and CLE registrars.")}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
                <div>
                  <strong>{t("General Inquiries:")}</strong>{" "}
                  <a href="mailto:admissions@srslegal.org" style={{ textDecoration: "underline" }}>
                    admissions@srslegal.org
                  </a>
                </div>
                <div>
                  <strong>{t("Academic Senate:")}</strong>{" "}
                  <a href="mailto:senate@srslegal.org" style={{ textDecoration: "underline" }}>
                    senate@srslegal.org
                  </a>
                </div>
                <div>
                  <strong>{t("Firm Enterprise Partnerships:")}</strong>{" "}
                  <a href="mailto:partnerships@srslegal.org" style={{ textDecoration: "underline" }}>
                    partnerships@srslegal.org
                  </a>
                </div>
                <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid var(--border-hairline)" }}>
                  <a
                    href="https://wa.me/201224928057?text=Hello%20SRS%20Legal%20Institute%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      fontSize: "13px",
                      padding: "10px 16px"
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.79.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.23-.19-.48-.31" />
                    </svg>
                    <span>{t("Direct WhatsApp: +20 12 24928057")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: "center" }}>
            <span className="pill-badge" style={{ marginBottom: "14px" }}>
              {t("INSTITUTIONAL PROTOCOLS")}
            </span>
            <h2 className="section-title">{t("Frequently Examined Inquiries")}</h2>
            <p className="section-subhead">
              {t("Details on matriculation, grading standards, CLE certifications, and moot participation.")}
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{t(faq.q)}</span>
                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className="faq-content">
                    {t(faq.a)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
