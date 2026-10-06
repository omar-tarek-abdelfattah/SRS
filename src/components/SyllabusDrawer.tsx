"use client";

import React from "react";
import { useApp } from "@/context/AppContext";

export default function SyllabusDrawer() {
  const { activeSyllabus, closeSyllabus, openEnroll } = useApp();

  if (!activeSyllabus) return null;

  return (
    <div
      className="drawer-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeSyllabus();
      }}
    >
      <div className="drawer-panel">
        <div className="drawer-header">
          <div>
            <span className="pill-badge" style={{ marginBottom: "12px" }}>
              {activeSyllabus.track}
            </span>
            <h3 className="headline-lg" style={{ fontSize: "28px" }}>
              {activeSyllabus.title}
            </h3>
            <p className="label-md" style={{ color: "var(--secondary)", marginTop: "6px" }}>
              {activeSyllabus.duration}
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            style={{ position: "static" }}
            onClick={closeSyllabus}
            aria-label="Close syllabus"
          >
            &times;
          </button>
        </div>

        <div className="drawer-body">
          <p className="body-md" style={{ marginBottom: "20px" }}>
            {activeSyllabus.description}
          </p>

          <div
            style={{
              padding: "16px",
              backgroundColor: "var(--surface)",
              borderRadius: "var(--radius-base)",
              border: "1px solid var(--border-hairline)",
              marginBottom: "28px"
            }}
          >
            <span className="label-md" style={{ color: "var(--outline)" }}>
              FACULTY CHAIR
            </span>
            <div style={{ fontWeight: 600, fontSize: "15px", marginTop: "4px" }}>
              {activeSyllabus.faculty}
            </div>
          </div>

          <h4 className="headline-sm" style={{ fontSize: "20px", marginBottom: "16px" }}>
            Curriculum Sequence & Modules
          </h4>

          <div className="syllabus-timeline">
            {activeSyllabus.modules.map((mod, idx) => (
              <div key={idx} className="syllabus-module">
                <span className="syllabus-module-week">{mod.week}</span>
                <h5 className="syllabus-module-title">{mod.title}</h5>
                <p className="syllabus-module-desc">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="drawer-footer">
          <button
            type="button"
            className="btn btn-outline"
            onClick={closeSyllabus}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              const title = activeSyllabus.title;
              closeSyllabus();
              openEnroll(title);
            }}
          >
            Apply For This Track
          </button>
        </div>
      </div>
    </div>
  );
}
