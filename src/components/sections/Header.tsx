"use client";

import React from "react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="portfolio-grid-container flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-semibold tracking-tight text-paper">
            DO <span className="text-accent italic font-normal">Originals</span>
          </span>
          <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        </div>

        <nav className="flex items-center gap-6">
          <span className="eyebrow text-paper-dim hidden md:inline-block">
            Video Production & Editorial
          </span>
          <MagneticButton
            href="#contact"
            className="eyebrow inline-flex items-center justify-center border border-line px-4 py-2 text-paper transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            Get in touch
          </MagneticButton>
        </nav>
      </div>
    </header>
  );
}
