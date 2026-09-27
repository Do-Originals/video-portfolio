"use client";

import React from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full py-24 md:py-32">
      <RevealWrapper className="portfolio-grid-container">
        <div className="grid grid-cols-12 gap-8 items-start mb-20">
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <span className="eyebrow text-accent">Initiate a Project</span>
            <h2 className="headline-display text-paper">
              Let&apos;s cut something remarkable.
            </h2>
            <p className="max-w-xl text-paper-dim text-lg">
              Booking select projects for Q2/Q3 2026. Send your rough cuts, treatment decks, or project briefs.
            </p>
            <div className="pt-2">
              <MagneticButton
                href="mailto:contact@do-originals.com"
                className="inline-flex items-center justify-center border border-accent bg-accent/10 px-8 py-4 text-sm font-medium uppercase tracking-widest text-paper transition-all duration-300 hover:bg-accent hover:text-paper"
              >
                contact@do-originals.com
              </MagneticButton>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-8 space-y-8">
            <div className="space-y-2">
              <span className="eyebrow text-paper-dim">Direct</span>
              <p className="text-paper text-sm">studio@do-originals.com</p>
            </div>
            <div className="space-y-2">
              <span className="eyebrow text-paper-dim">Socials</span>
              <div className="flex gap-4 text-sm text-paper-dim">
                <a href="#instagram" className="hover:text-accent transition-colors">Instagram</a>
                <span>/</span>
                <a href="#youtube" className="hover:text-accent transition-colors">YouTube</a>
                <span>/</span>
                <a href="#vimeo" className="hover:text-accent transition-colors">Vimeo</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-line pt-8 gap-4">
          <p className="text-xs text-paper-dim tracking-wider uppercase">
            © {new Date().getFullYear()} DO Originals. All rights reserved.
          </p>
          <p className="text-xs text-paper-dim">
            Crafted with Next.js 16 • Tailwind CSS v4 • Framer Motion
          </p>
        </div>
      </RevealWrapper>
    </footer>
  );
}
