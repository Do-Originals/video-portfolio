"use client";

import React from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import MagneticButton from "@/components/ui/MagneticButton";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full border-b border-line py-28 md:py-36 bg-ink overflow-hidden"
    >
      <div className="portfolio-grid-container">
        <div className="grid grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: About Narrative (leads entrance by ~150ms) */}
          <RevealWrapper
            delay={0}
            className="col-span-12 lg:col-span-6 xl:col-span-5 space-y-8"
          >
            <div className="flex items-center gap-3">
              <span className="eyebrow text-accent">03 / ABOUT</span>
              <span className="h-px w-8 bg-accent/40" />
            </div>

            <h2 className="headline-display text-paper">
              We edit to keep eyes locked, not just to{" "}
              <span className="italic font-light text-paper">fill a timeline.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-paper-dim leading-relaxed font-light">
              <p>
                We cut high-retention short-form reels and broadcast-grade long-form films for Indian founders, brands, and creators who understand that editing is where raw footage becomes unforgettable rhythm.
              </p>
              <p>
                Based in Dombivli, Mumbai, we handle the entire post-production pipeline—from pacing and tactile sound design to ACES color grading—so your content commands attention across YouTube, Instagram, and commercial broadcast.
              </p>
            </div>

            {/* Disciplines & Core Tooling */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-line/60">
              <div className="space-y-1.5">
                <span className="eyebrow text-paper-dim text-[10px]">
                  Disciplines
                </span>
                <p className="text-sm text-paper font-medium">
                  Short-Form • Podcasts • Commercials
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="eyebrow text-paper-dim text-[10px]">
                  Post Pipeline
                </span>
                <p className="text-sm text-paper font-medium">
                  DaVinci Resolve • Premiere • After Effects
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* Right Column: Direct Contact Block (staggered entrance by +150ms) */}
          <RevealWrapper
            delay={0.15}
            className="col-span-12 lg:col-span-6 xl:col-span-7 lg:border-l lg:border-line/80 lg:pl-12 xl:pl-16 space-y-10"
          >
            <div id="contact" className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-accent">04 / DIRECT CONTACT</span>
                <span className="h-px w-8 bg-accent/40" />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-light text-paper tracking-tight">
                Let&apos;s talk about your next cut.
              </h3>
              <p className="text-sm sm:text-base text-paper-dim leading-relaxed">
                Send your rough cuts, treatment decks, or project briefs directly. We respond within 24 hours.
              </p>
            </div>

            {/* Large Tappable Email Link */}
            <div className="space-y-2">
              <span className="eyebrow text-paper-dim/80 text-[11px]">
                Primary Email
              </span>
              <div>
                <a
                  href="mailto:omkar03potphode@gmail.com"
                  className="group inline-block font-display text-2xl sm:text-3xl xl:text-4xl font-normal text-paper transition-colors duration-300 hover:text-accent"
                >
                  <span className="relative pb-1 border-b border-paper/30 transition-all duration-300 group-hover:border-accent">
                    omkar03potphode@gmail.com
                  </span>
                  <span className="inline-block ml-3 text-accent transition-transform duration-200 group-hover:translate-x-1.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <span className="eyebrow text-paper-dim/80 text-[11px]">
                  WhatsApp & Phone
                </span>
                <div>
                  <a
                    href="https://wa.me/919137000000?text=Hi%20DO%20Originals,%20I%20have%20a%20video%20project%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-paper hover:text-accent transition-colors"
                  >
                    <span>+91 91370 00000</span>
                    <span className="eyebrow text-accent text-[10px] border border-accent/40 bg-accent/10 px-2 py-0.5 rounded-full">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>

              {/* Location Tag */}
              <div className="space-y-2">
                <span className="eyebrow text-paper-dim/80 text-[11px]">
                  Studio Location
                </span>
                <p className="text-base sm:text-lg font-medium text-paper flex items-center gap-2">
                  <span>Dombivli, Mumbai</span>
                  <span className="text-xs text-paper-dim font-normal">• Available Worldwide</span>
                </p>
              </div>
            </div>

            {/* Availability Indicator & Instant CTA */}
            <div className="pt-6 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-xs text-paper-dim font-mono tracking-wide">
                  Accepting select projects for Q2 / Q3 2026
                </span>
              </div>

              <MagneticButton
                href="https://wa.me/919137000000?text=Hi%20DO%20Originals,%20I%20have%20a%20video%20project%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow inline-flex items-center justify-center border border-accent bg-accent/10 px-6 py-3 text-xs uppercase tracking-[0.16em] text-paper transition-all duration-300 hover:bg-accent hover:text-white"
              >
                Chat on WhatsApp
              </MagneticButton>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
