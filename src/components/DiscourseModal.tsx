"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useLanguage } from "@/context/LanguageContext";

export default function DiscourseModal() {
  const { isDiscourseOpen, closeDiscourse, discourseTitle, triggerToast } = useApp();
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", affiliation: "" });

  if (!isDiscourseOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      closeDiscourse();
      triggerToast(
        t(
          "Registration Confirmed for \"{title}\". Calendar invitation & pre-reading dispatched.",
          { title: t(discourseTitle) }
        )
      );
      setForm({ name: "", email: "", affiliation: "" });
    }, 900);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeDiscourse();
      }}
    >
      <div className="modal-card">
        <button
          type="button"
          className="modal-close-btn"
          onClick={closeDiscourse}
          aria-label={t("Close")}
        >
          &times;
        </button>

        <span className="pill-badge" style={{ marginBottom: "16px" }}>
          {t("LIVE DISCOURSE ACCESS")}
        </span>

        <h3 className="headline-lg" style={{ marginBottom: "8px" }}>
          {t("Colloquium Registration")}
        </h3>

        <p className="body-md" style={{ marginBottom: "28px" }}>
          {t("Session:")} <strong>{t(discourseTitle)}</strong>.{" "}
          {t("Interactive Socratic participation is strictly limited to 60 jurists and fellows.")}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="discourse-name">
              {t("Full Name & Title")}
            </label>
            <input
              id="discourse-name"
              type="text"
              required
              className="form-control"
              placeholder="e.g. Dr. Eleanor Sterling"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="discourse-email">
              {t("Institutional / Chambers Email")}
            </label>
            <input
              id="discourse-email"
              type="email"
              required
              className="form-control"
              placeholder="e.sterling@oxford.edu"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="discourse-affiliation">
              {t("Institutional Affiliation or Chambers")}
            </label>
            <input
              id="discourse-affiliation"
              type="text"
              className="form-control"
              placeholder="Faculty of Law / Blackstone Chambers"
              value={form.affiliation}
              onChange={(e) => setForm({ ...form, affiliation: e.target.value })}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
            <button
              type="button"
              className="btn btn-outline"
              style={{ flex: 1 }}
              onClick={closeDiscourse}
            >
              {t("Cancel")}
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ flex: 1.5 }}
              disabled={submitting}
            >
              {submitting ? t("Securing Seat...") : t("Reserve My Seat")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
