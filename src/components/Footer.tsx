import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <Link href="/" className="footer-brand" aria-label="SRS Legal Institute Home">
            <Image
              src="/assets/srs-logo.png"
              alt="SRS Legal Institute"
              width={140}
              height={38}
              className="brand-logo-img footer-logo-img"
            />
          </Link>

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
            <a
              href="https://wa.me/201224928057"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-badge"
              aria-label="Direct Chambers WhatsApp: +20 12 24928057"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.79.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.23-.19-.48-.31" />
              </svg>
              <span>WhatsApp: +20 12 24928057</span>
            </a>
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
