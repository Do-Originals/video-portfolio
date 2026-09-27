"use client";

import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const HEADLINE_LINES = [
  "We cut stories",
  "people actually",
  "finish watching.",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Scroll cue fades out after ~600px of scroll
  const scrollCueOpacity = useTransform(scrollY, [0, 200, 600], [1, 0.7, 0]);
  const scrollCueY = useTransform(scrollY, [0, 600], [0, 30]);

  return (
    <section
      id="reels"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ink pt-28 pb-16 md:pt-0 md:pb-0"
    >
      {/* Right 55-60% Viewport: Background Video with Ken Burns Scale & Dark Gradient */}
      <div className="absolute right-0 top-0 bottom-0 h-full w-full lg:w-[60%] overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1.05, 1.0, 1.05],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-full w-full will-change-transform"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80"
            className="h-full w-full object-cover"
          >
            <source src="/reel.mp4" type="video/mp4" />
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-cinematographer-operating-a-camera-with-a-monitor-40098-large.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Linear Gradient Overlay: Near-black (--color-ink) fading to transparent so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent lg:via-ink/65 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40 lg:hidden" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Main Composition: Left 40-45% Content */}
      <div className="portfolio-grid-container relative z-10 w-full py-16 lg:py-0">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 space-y-6 md:space-y-8">
            {/* Eyebrow Label */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="flex items-center gap-3"
            >
              <span className="eyebrow text-accent font-mono">
                VIDEO PRODUCTION STUDIO
              </span>
              <span className="h-px w-8 bg-accent/40" />
            </motion.div>

            {/* Staggered Clip-Path Wipe Headline (Animates on Page Load) */}
            <h1 className="headline-display text-paper">
              {HEADLINE_LINES.map((line, idx) => (
                <span key={idx} className="block overflow-hidden py-0.5">
                  <motion.span
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { clipPath: "inset(100% 0% 0% 0%)", y: "30%", opacity: 0 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { clipPath: "inset(0% 0% 0% 0%)", y: "0%", opacity: 1 }
                    }
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + idx * 0.1, // ~100ms stagger between lines
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    className={`block ${
                      idx === 2 ? "italic font-light text-paper" : "font-normal"
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* One-line Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="max-w-md text-base sm:text-lg text-paper-dim leading-relaxed"
            >
              High-retention commercial and narrative editing engineered for brands that refuse to look ordinary.
            </motion.p>

            {/* Single MagneticButton CTA */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.65, 0, 0.35, 1] }}
              className="pt-2"
            >
              <MagneticButton
                href="#work"
                className="group inline-flex items-center gap-3 border border-paper bg-paper/5 px-7 py-3.5 text-xs sm:text-sm uppercase tracking-[0.16em] font-medium text-paper transition-all duration-300 hover:bg-paper hover:text-ink"
              >
                <span>See our work</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Center Scroll Cue (Fades out past ~600px of scroll) */}
      <motion.div
        style={{
          opacity: scrollCueOpacity,
          y: scrollCueY,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5 pointer-events-none select-none"
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-paper-dim/70">
          Scroll
        </span>
        <div className="relative h-10 w-[1px] bg-line overflow-hidden">
          <motion.span
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute top-0 left-0 w-full h-4 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
