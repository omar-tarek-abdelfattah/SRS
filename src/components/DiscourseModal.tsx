"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function DiscourseModal() {
  const { isDiscourseOpen, closeDiscourse, discourseTitle, triggerToast } = useApp();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", affiliation: "" });

  if (!isDiscourseOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      closeDiscourse();
      triggerToast(`Registration Confirmed for "${discourseTitle}". Calendar invitation & pre-reading dispatched.`);
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
          aria-label="Close modal"
        >
          &times;
        </button>

        <span className="pill-badge" style={{ marginBottom: "16px" }}>
          LIVE DISCOURSE ACCESS
        </span>

        <h3 className="headline-lg" style={{ marginBottom: "8px" }}>
          Colloquium Registration
        </h3>

        <p className="body-md" style={{ marginBottom: "28px" }}>
          Session: <strong>{discourseTitle}</strong>.
          Interactive Socratic participation is strictly limited to 60 jurists and fellows.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="discourse-name">
              Full Name & Title
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
              Institutional Email
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
              Institutional Affiliation or Chambers
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
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ flex: 1.5 }}
              disabled={submitting}
            >
              {submitting ? "Securing Seat..." : "Reserve My Seat"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
