"use client";

import React from "react";
import Image from "next/image";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Omkar Potphode",
    role: "Founder & Lead Editor",
    specialty: "Editorial Pacing • Retention Architecture",
    image: "/team/team-1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    specialty: "Visual Direction • Cinematic Framing",
    image: "/team/team-2.jpg",
  },
  {
    name: "Rohan Varma",
    role: "Senior Motion Lead",
    specialty: "3D Animation • Kinetic Typography",
    image: "/team/team-3.jpg",
  },
  {
    name: "Kabir Sen",
    role: "Sound & Color Architect",
    specialty: "Tactile Foley • ACES Color Science",
    image: "/team/team-4.jpg",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full border-b border-line py-20 md:py-28 bg-ink overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-full max-w-4xl rounded-full bg-accent/5 blur-[120px]" />

      <div className="portfolio-grid-container relative z-10 space-y-12 md:space-y-16">
        {/* Shorter Header Row: Eyebrow, Heading, and Subheading */}
        <RevealWrapper className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-accent">03 / THE TEAM</span>
            <span className="h-px w-8 bg-accent/40" />
          </div>

          <h2 className="headline-display text-paper">
            The minds behind the{" "}
            <span className="italic font-light text-paper">cut.</span>
          </h2>

          <p className="text-base sm:text-lg text-paper-dim font-light leading-relaxed">
            Based in Dombivli, Mumbai. We are a focused collective of editors, colorists, and motion designers dedicated to transforming raw footage into high-retention cinematic rhythm.
          </p>

          {/* Direct Email & WhatsApp Quick-Action Pills */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <a
              href="mailto:dooriginals08@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
              aria-label="Email DO Originals"
            >
              <FiMail className="text-sm text-accent group-hover:scale-110 transition-transform duration-200" />
              <span>dooriginals08@gmail.com</span>
            </a>

            <a
              href="https://wa.me/919867904334?text=Hi%20DO%20Originals,%20I'm%20interested%20in%20working%20together"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
              aria-label="WhatsApp DO Originals"
            >
              <FaWhatsapp className="text-sm text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
              <span>+91 98679 04334</span>
            </a>
          </div>
        </RevealWrapper>

        {/* 4 Square Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <RevealWrapper
              key={member.name}
              delay={idx * 0.08}
              className="group flex flex-col space-y-4"
            >
              {/* 1:1 Square Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-line bg-paper/[0.02] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:border-accent/40">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover filter grayscale-[15%] transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Subtle vignette gradient at base of square */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                {/* Corner accent marker */}
                <div className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-accent/70 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125" />
              </div>

              {/* Member Details */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg sm:text-xl text-paper font-normal transition-colors duration-200 group-hover:text-accent">
                    {member.name}
                  </h3>
                  <span className="font-mono text-[10px] text-paper-dim/60">
                    0{idx + 1}
                  </span>
                </div>

                <p className="font-mono text-xs uppercase tracking-wider text-accent font-medium">
                  {member.role}
                </p>

                <p className="text-xs text-paper-dim font-light pt-0.5">
                  {member.specialty}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
