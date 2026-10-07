"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openEnroll } = useApp();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/instructors", label: "Instructors" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link href="/" className="brand-link" aria-label="SRS Legal Institute Home">
            <Image
              src="/assets/srs-logo.png"
              alt="SRS Legal Institute"
              width={160}
              height={44}
              priority
              className="brand-logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openEnroll("General Admissions")}
            >
              Enroll Now
            </button>
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-nav-panel ${mobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
        <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
          <button
            type="button"
            className="btn btn-outline"
            style={{ flex: 1 }}
            onClick={() => {
              setMobileMenuOpen(false);
              openEnroll("Student Portal Login");
            }}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={() => {
              setMobileMenuOpen(false);
              openEnroll("General Admissions");
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  );
}
