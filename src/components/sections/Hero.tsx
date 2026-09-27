"use client";

import React from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative w-full border-b border-line py-24 md:py-36">
      <RevealWrapper className="portfolio-grid-container">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Asymmetric composition: 8 cols for main editorial headline */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-accent">Editorial Reel & Production</span>
              <span className="h-px w-10 bg-accent/40" />
            </div>

            <h1 className="headline-display text-paper">
              Cinematic stories cut with intention and precision.
            </h1>

            <p className="max-w-xl text-lg text-paper-dim leading-relaxed">
              We produce and cut high-impact visual media for local business owners and brands who value craft over templates.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton
                href="#reel"
                className="inline-flex items-center justify-center border border-paper px-6 py-3 text-sm font-medium uppercase tracking-wider text-paper transition-colors duration-200 hover:bg-paper hover:text-ink"
              >
                Watch 2026 Reel
              </MagneticButton>
              <MagneticButton
                href="#work"
                className="inline-flex items-center justify-center border border-line px-6 py-3 text-sm font-medium uppercase tracking-wider text-paper-dim transition-colors duration-200 hover:border-paper hover:text-paper"
              >
                Selected Works
              </MagneticButton>
            </div>
          </div>

          {/* Asymmetric sidebar: 4 cols */}
          <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 flex flex-col justify-between self-stretch border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-8 space-y-8">
            <div className="space-y-2">
              <span className="eyebrow text-paper-dim">Discipline</span>
              <p className="text-sm text-paper">Commercials • Short-Form • Documentaries</p>
            </div>
            <div className="space-y-2">
              <span className="eyebrow text-paper-dim">Based in</span>
              <p className="text-sm text-paper">Global Production / Remote Editorial</p>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
