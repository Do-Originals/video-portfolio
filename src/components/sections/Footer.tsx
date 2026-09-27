"use client";

import React from "react";
import Link from "next/link";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-line bg-ink py-16 md:py-24">
      <RevealWrapper className="portfolio-grid-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
          {/* Left: Wordmark / Logo + Copyright line */}
          <div className="space-y-3">
            <Link
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2.5 font-body text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-paper transition-opacity duration-200 hover:opacity-80"
              aria-label="DO Originals Home"
            >
              <span>DO ORIGINALS</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
            </Link>

            <p className="font-mono text-[11px] uppercase tracking-wider text-paper-dim/80">
              © {new Date().getFullYear()} DO Originals. All rights reserved.
            </p>
          </div>

          {/* Right: Instagram + YouTube only (as small text labels with hover-underline) */}
          <div className="flex items-center gap-8 sm:gap-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs sm:text-sm uppercase tracking-[0.16em] text-paper-dim transition-colors duration-200 hover:text-paper relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Instagram
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs sm:text-sm uppercase tracking-[0.16em] text-paper-dim transition-colors duration-200 hover:text-paper relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              YouTube
            </a>
          </div>
        </div>
      </RevealWrapper>
    </footer>
  );
}
