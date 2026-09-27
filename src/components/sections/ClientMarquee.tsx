"use client";

import React from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";

interface ClientLogo {
  id: string;
  name: string;
  symbol: React.ReactNode;
}

const CLIENTS: ClientLogo[] = [
  {
    id: "apex",
    name: "APEX MEDIA",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="12 3 21 20 3 20" />
        <polyline points="9 15 12 9 15 15" />
      </svg>
    ),
  },
  {
    id: "vanguard",
    name: "VANGUARD",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="4 8 12 16 20 8" />
        <polyline points="7 4 12 9 17 4" />
      </svg>
    ),
  },
  {
    id: "kromatik",
    name: "KROMATIK",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 9 9" />
      </svg>
    ),
  },
  {
    id: "chronicle",
    name: "CHRONICLE CO",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="14" x2="13" y2="14" />
      </svg>
    ),
  },
  {
    id: "cinema-craft",
    name: "CINEMA CRAFT",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "nordic",
    name: "NORDIC STUDIO",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
      </svg>
    ),
  },
  {
    id: "hyperion",
    name: "HYPERION",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9" />
      </svg>
    ),
  },
  {
    id: "aura-labs",
    name: "AURA LABS",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "monolith",
    name: "MONOLITH",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="7" y="3" width="10" height="18" rx="1" />
        <line x1="10" y1="7" x2="14" y2="7" />
      </svg>
    ),
  },
  {
    id: "pulse",
    name: "PULSE AGENCY",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="2 12 6 12 9 4 15 20 18 12 22 12" />
      </svg>
    ),
  },
  {
    id: "equinox",
    name: "EQUINOX FILMS",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" fillOpacity="0.4" />
      </svg>
    ),
  },
  {
    id: "stratum",
    name: "STRATUM",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="8" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  {
    id: "kinetica",
    name: "KINETICA",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="5 4 15 12 5 20" />
        <polygon points="12 4 22 12 12 20" />
      </svg>
    ),
  },
  {
    id: "veritas",
    name: "VERITAS NEWS",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    id: "archetype",
    name: "ARCHETYPE",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="12 2 2 22 22 22" />
        <line x1="6" y1="15" x2="18" y2="15" />
      </svg>
    ),
  },
  {
    id: "sonder",
    name: "SONDER MEDIA",
    symbol: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.263-8-12.356-8-5.096 0-5.096 8 0 8 5.093 0 7.261-8 12.356-8z" />
      </svg>
    ),
  },
];

export default function ClientMarquee() {
  // Seamless loop by repeating the list
  const marqueeList = [...CLIENTS, ...CLIENTS];

  return (
    <section className="relative w-full border-b border-line py-16 md:py-20 bg-ink overflow-hidden">
      <RevealWrapper>
        {/* Small Centered Eyebrow Label */}
        <div className="flex flex-col items-center justify-center space-y-2 mb-10 px-4 text-center">
          <span className="eyebrow text-paper-dim/80 font-mono tracking-[0.25em]">
            WORKED WITH
          </span>
          <div className="h-px w-6 bg-accent/40" />
        </div>

        {/* Edge-to-Edge Continuous Marquee Container with Gradient Mask */}
        <div className="relative w-full overflow-hidden mask-marquee">
          <div className="animate-marquee items-center gap-12 sm:gap-16 lg:gap-20 py-2">
            {marqueeList.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="group flex items-center gap-3 shrink-0 cursor-default select-none grayscale opacity-45 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:text-paper"
              >
                <div className="text-paper-dim transition-colors duration-300 group-hover:text-accent">
                  {client.symbol}
                </div>
                <span className="font-body text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-paper-dim transition-colors duration-300 group-hover:text-paper">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
