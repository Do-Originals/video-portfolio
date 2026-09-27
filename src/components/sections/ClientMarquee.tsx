"use client";

import React from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function ClientMarquee() {
  const clients = [
    "Apex Media",
    "Nordic Studio",
    "Vanguard",
    "Cinema Craft",
    "Chronicle Co",
    "Kinetica",
  ];

  return (
    <section className="relative w-full border-b border-line py-16">
      <RevealWrapper className="portfolio-grid-container space-y-6">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <span className="eyebrow text-paper-dim">Selected Collaborations & Clients</span>
          <span className="eyebrow text-accent">2023 — Present</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-8 py-4 opacity-80">
          {clients.map((client, idx) => (
            <span
              key={idx}
              className="font-display text-xl tracking-tight text-paper-dim hover:text-paper transition-colors duration-200"
            >
              {client}
            </span>
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
