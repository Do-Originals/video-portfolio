"use client";

import React from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function LongForm() {
  return (
    <section id="long-form" className="relative w-full border-b border-line py-24 md:py-32">
      <RevealWrapper className="portfolio-grid-container">
        <div className="grid grid-cols-12 gap-6 items-end mb-12">
          <div className="col-span-12 md:col-span-8 space-y-4">
            <span className="eyebrow text-accent">02 / Narrative & Commercial</span>
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-paper">
              Long-Form Editorial
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 text-paper-dim text-sm">
            Documentaries, brand stories, and YouTube masterclasses engineered with pacing that sustains immersion.
          </div>
        </div>

        {/* Placeholder grid for future LongForm items */}
        <div className="grid grid-cols-12 gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="col-span-12 md:col-span-6 aspect-video border border-line bg-ink flex flex-col justify-end p-6 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-line/20 transition-opacity duration-300 group-hover:bg-line/30" />
              <div className="relative z-10 space-y-1">
                <span className="eyebrow text-accent">Feature 0{item}</span>
                <p className="font-display text-xl text-paper">Brand Documentary Film</p>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
