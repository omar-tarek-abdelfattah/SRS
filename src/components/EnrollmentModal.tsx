"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function EnrollmentModal() {
  const { isEnrollOpen, closeEnroll, enrollCourseTitle, triggerToast } = useApp();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jurisdiction: "United Kingdom (SRA / Bar Council)",
    academicBackground: "",
    notes: ""
  });

  if (!isEnrollOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      closeEnroll();
      triggerToast(`Admissions Dossier received for ${formData.fullName || "Applicant"}. SRS Registrar will review within 24 hours.`);
      setFormData({
        fullName: "",
        email: "",
        jurisdiction: "United Kingdom (SRA / Bar Council)",
        academicBackground: "",
        notes: ""
      });
    }, 1000);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEnroll();
      }}
    >
      <div className="modal-card">
        <button
          type="button"
          className="modal-close-btn"
          onClick={closeEnroll}
          aria-label="Close modal"
        >
          &times;
        </button>

        <span className="pill-badge" style={{ marginBottom: "16px" }}>
          ADMISSIONS & ENROLLMENT
        </span>

        <h3 className="headline-lg" style={{ marginBottom: "8px" }}>
          Candidate Matriculation
        </h3>

        <p className="body-md" style={{ marginBottom: "28px" }}>
          Registering application for: <strong>{enrollCourseTitle}</strong>.
          Our admissions board evaluates prior academic standing and professional acumen.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="modal-name">
              Full Legal Name
            </label>
            <input
              id="modal-name"
              type="text"
              required
              className="form-control"
              placeholder="e.g. Julian Thorne, Esq."
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modal-email">
              Institutional Email
            </label>
            <input
              id="modal-email"
              type="email"
              required
              className="form-control"
              placeholder="julian.thorne@chambers.law"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modal-jurisdiction">
              Primary Jurisdiction of Practice
            </label>
            <select
              id="modal-jurisdiction"
              className="form-control select-control"
              value={formData.jurisdiction}
              onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
            >
              <option value="United Kingdom (SRA / Bar Council)">United Kingdom (SRA / Bar Council)</option>
              <option value="United States (State Bar / ABA)">United States (State Bar / ABA)</option>
              <option value="European Union (Civil Law Jurisdictions)">European Union (Civil Law Jurisdictions)</option>
              <option value="Middle East & GCC Arbitration Regimes">Middle East & GCC Arbitration Regimes</option>
              <option value="Asia-Pacific & Commonwealth">Asia-Pacific & Commonwealth</option>
              <option value="Other / Pre-Law Scholar">Other / Pre-Law Scholar</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modal-background">
              Current Title & Organization
            </label>
            <input
              id="modal-background"
              type="text"
              className="form-control"
              placeholder="Senior Associate, Commercial Litigation"
              value={formData.academicBackground}
              onChange={(e) => setFormData({ ...formData, academicBackground: e.target.value })}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
            <button
              type="button"
              className="btn btn-outline"
              style={{ flex: 1 }}
              onClick={closeEnroll}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ flex: 1.5 }}
              disabled={submitting}
            >
              {submitting ? "Transmitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
