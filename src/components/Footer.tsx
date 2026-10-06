import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <span>AL-QANUN</span>
          </div>

          {/* Legal / Policy Navigation */}
          <nav className="footer-links" aria-label="Legal & Policies">
            <Link href="/contact" className="footer-link">
              Terms of Service
            </Link>
            <Link href="/contact" className="footer-link">
              Privacy Policy
            </Link>
            <Link href="/contact" className="footer-link">
              Legal Disclaimer
            </Link>
            <Link href="/contact" className="footer-link">
              Accessibility
            </Link>
          </nav>

          {/* Copyright notice */}
          <div className="footer-copyright">
            © {new Date().getFullYear()} SRS Legal Institute. All Rights Reserved.
          </div>
        </div>

        {/* Bottom Contact link exactly as in screen.png */}
        <div className="footer-bottom">
          <Link href="/contact" className="footer-contact-link">
            CONTACT
          </Link>
        </div>
      </div>
    </footer>
  );
}
