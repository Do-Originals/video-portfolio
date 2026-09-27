"use client";

import React from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import MagneticButton from "@/components/ui/MagneticButton";

export default function About() {
  return (
    <section id="about" className="relative w-full border-b border-line py-24 md:py-36">
      <RevealWrapper className="portfolio-grid-container">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <span className="eyebrow text-accent">03 / Philosophy & Craft</span>
            <h2 className="headline-display text-paper">
              Editing is where raw footage becomes unforgettable rhythm.
            </h2>
            <p className="max-w-2xl text-lg text-paper-dim leading-relaxed">
              Every cut is an editorial decision: where the audience breathes, where tension mounts, and when they are compelled to take action. We partner with founders, brands, and creators to shape footage into a bespoke visual narrative.
            </p>
            <div className="pt-4">
              <MagneticButton
                href="#contact"
                className="inline-flex items-center justify-center border border-paper px-6 py-3 text-sm font-medium uppercase tracking-wider text-paper transition-colors duration-200 hover:bg-paper hover:text-ink"
              >
                Inquire About Availability
              </MagneticButton>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-8 space-y-6">
            <div className="space-y-1">
              <span className="eyebrow text-paper-dim">Tooling</span>
              <p className="text-sm text-paper">DaVinci Resolve Studio • Premiere Pro • After Effects</p>
            </div>
            <div className="space-y-1">
              <span className="eyebrow text-paper-dim">Color & Finish</span>
              <p className="text-sm text-paper">ACES Color Managed Workflow • Film Print Emulation</p>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
