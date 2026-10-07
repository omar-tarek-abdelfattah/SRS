"use client";

import React, { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "201224928057";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello SRS Legal Institute, I would like to inquire about admissions and programs."
  )}`;

  return (
    <div className="fixed bottom-7 right-7 z-50 flex items-center justify-end">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-[52px] w-[52px] items-center justify-center rounded bg-black text-white shadow-lg border border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a1e24] hover:border-white/40 hover:shadow-xl"
        aria-label="Direct Chambers WhatsApp: +20 12 24928057"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.91C21.95 9.26 20.92 6.77 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM16.57 15.33C16.32 15.2 15.1 14.61 14.87 14.52C14.64 14.44 14.48 14.39 14.31 14.65C14.14 14.9 13.67 15.46 13.52 15.62C13.38 15.79 13.23 15.81 12.98 15.68C12.73 15.55 11.92 15.29 10.95 14.43C10.2 13.76 9.69 12.93 9.54 12.68C9.39 12.43 9.52 12.29 9.65 12.17C9.76 12.06 9.9 11.88 10.02 11.73C10.14 11.58 10.19 11.48 10.27 11.31C10.35 11.14 10.31 11 10.25 10.87C10.19 10.74 9.69 9.52 9.48 9.02C9.28 8.53 9.07 8.6 8.92 8.59L8.44 8.58C8.27 8.58 8 8.64 7.77 8.89C7.54 9.14 6.89 9.75 6.89 10.99C6.89 12.23 7.79 13.43 7.92 13.6C8.04 13.77 9.69 16.31 12.22 17.39C12.82 17.65 13.29 17.81 13.66 17.93C14.27 18.12 14.82 18.1 15.26 18.03C15.75 17.96 16.73 17.43 16.94 16.85C17.15 16.27 17.15 15.78 17.09 15.67C17.03 15.55 16.86 15.48 16.61 15.36L16.57 15.33Z"
            fill="#ffffff"
          />
        </svg>
      </a>

      {/* Elegant Architectural Tooltip */}
      <div
        className={`pointer-events-none absolute right-[calc(100%+14px)] whitespace-nowrap rounded border border-white/15 bg-black px-3.5 py-2 text-white shadow-xl transition-all duration-200 ${
          isHovered ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
        }`}
        role="tooltip"
      >
        <div className="font-serif text-sm font-semibold tracking-wide text-white">+20 12 24928057</div>
      </div>
    </div>
  );
}
