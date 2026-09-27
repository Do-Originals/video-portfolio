"use client";

import React from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function ShortForm() {
  return (
    <section id="short-form" className="relative w-full border-b border-line py-24 md:py-32">
      <RevealWrapper className="portfolio-grid-container">
        <div className="grid grid-cols-12 gap-6 items-end mb-12">
          <div className="col-span-12 md:col-span-8 space-y-4">
            <span className="eyebrow text-accent">01 / Vertical & Dynamic</span>
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-paper">
              Short-Form Content
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 text-paper-dim text-sm">
            High-retention reels and shorts built to convert attention into revenue without feeling manufactured.
          </div>
        </div>

        {/* Placeholder grid for future ShortForm items */}
        <div className="grid grid-cols-12 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="col-span-12 md:col-span-4 aspect-[9/16] border border-line bg-ink flex flex-col justify-end p-6 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-line/20 transition-opacity duration-300 group-hover:bg-line/30" />
              <div className="relative z-10 space-y-1">
                <span className="eyebrow text-accent">Project 0{item}</span>
                <p className="font-display text-lg text-paper">Short-Form Showcase</p>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
