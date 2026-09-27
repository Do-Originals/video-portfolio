"use client";

import React, { useRef, useState, useEffect } from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { useInView } from "framer-motion";

interface ReelItem {
  id: string;
  category: "Politics" | "Face" | "Info" | "AI" | "Clients";
  categoryCode: string;
  title: string;
  hook: string;
  metrics: string;
  duration: string;
  videoSrc: string;
  fallbackSrc: string;
  poster: string;
}

const REELS: ReelItem[] = [
  {
    id: "politics-1",
    category: "Politics",
    categoryCode: "01",
    title: "Campaign Momentum & Rhetoric",
    hook: "Opening 1.5s hook retained 88% past intro cut.",
    metrics: "2.4M Views",
    duration: "0:42",
    videoSrc: "/videos/reels/politics-1.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-politician-speaking-at-a-press-conference-40890-large.mp4",
    poster: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "politics-2",
    category: "Politics",
    categoryCode: "02",
    title: "Hot Mic Debate Breakdown",
    hook: "Rapid cross-cuts timed to vocal cadence and sub-bass hits.",
    metrics: "1.1M Views",
    duration: "0:30",
    videoSrc: "/videos/reels/politics-2.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-crowd-clapping-at-an-outdoor-event-43360-large.mp4",
    poster: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "face-1",
    category: "Face",
    categoryCode: "03",
    title: "Founder Vision & Raw Monologue",
    hook: "Personal brand narrative with film grain and dynamic kinetic type.",
    metrics: "890K Views",
    duration: "0:58",
    videoSrc: "/videos/reels/face-1.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-young-man-talking-at-a-videoconference-42525-large.mp4",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "face-2",
    category: "Face",
    categoryCode: "04",
    title: "Keynote Punchline & Stage Energy",
    hook: "Multi-cam reframing from a single 4K master angle.",
    metrics: "1.5M Views",
    duration: "0:35",
    videoSrc: "/videos/reels/face-2.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-man-speaking-at-a-business-meeting-43354-large.mp4",
    poster: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "info-1",
    category: "Info",
    categoryCode: "05",
    title: "Visual Essay: The Attention Economy",
    hook: "Information dense motion graphics and bespoke SFX staging.",
    metrics: "3.2M Views",
    duration: "0:59",
    videoSrc: "/videos/reels/info-1.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-42998-large.mp4",
    poster: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "info-2",
    category: "Info",
    categoryCode: "06",
    title: "Complex Systems in 45 Seconds",
    hook: "Animated infographics keeping watch time over 105%.",
    metrics: "940K Views",
    duration: "0:45",
    videoSrc: "/videos/reels/info-2.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-graphs-42045-large.mp4",
    poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai-1",
    category: "AI",
    categoryCode: "07",
    title: "Generative Cinema: The Synthetic World",
    hook: "Midjourney to Runway sequence graded to 35mm film emulation.",
    metrics: "4.1M Views",
    duration: "0:28",
    videoSrc: "/videos/reels/ai-1.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-circuits-and-shapes-42407-large.mp4",
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai-2",
    category: "AI",
    categoryCode: "08",
    title: "Neural VFX & Surreal Match Cuts",
    hook: "High-tempo AI morphs designed for loop completion.",
    metrics: "1.7M Views",
    duration: "0:38",
    videoSrc: "/videos/reels/ai-2.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-animation-43098-large.mp4",
    poster: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "clients-1",
    category: "Clients",
    categoryCode: "09",
    title: "E-Commerce Brand Campaign",
    hook: "Direct-response pacing lifting ROAS by 3.4x in the first 7 days.",
    metrics: "2.1M Views",
    duration: "0:30",
    videoSrc: "/videos/reels/clients-1.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-42353-large.mp4",
    poster: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "clients-2",
    category: "Clients",
    categoryCode: "10",
    title: "D2C Founder Story & Launch",
    hook: "Raw documentary pacing turned 10K waitlist into paying customers.",
    metrics: "1.8M Views",
    duration: "0:45",
    videoSrc: "/videos/reels/clients-2.mp4",
    fallbackSrc: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-at-a-laptop-in-an-office-42880-large.mp4",
    poster: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = ["All", "Politics", "Face", "Info", "AI", "Clients"] as const;

function ReelTile({ item }: { item: ReelItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(cardRef, { amount: 0.6 });
  const [isPlaying, setIsPlaying] = useState(false);

  // Mobile: Autoplay when tile is >60% in view
  useEffect(() => {
    const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
    if (isTouch && videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] w-[260px] sm:w-[290px] md:w-[320px] shrink-0 snap-start overflow-hidden border border-line bg-ink transition-all duration-500 ease-out hover:scale-[1.03] hover:border-accent/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer"
    >
      {/* Video Preview */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={item.poster}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="h-full w-full object-cover transition-opacity duration-300"
      >
        <source src={item.videoSrc} type="video/mp4" />
        <source src={item.fallbackSrc} type="video/mp4" />
      </video>

      {/* Static Poster Backdrop Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

      {/* Top Meta: Duration & Live Indicator */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <span className="eyebrow bg-ink/70 backdrop-blur-md px-2 py-0.5 text-[10px] text-paper-dim border border-line/60">
          {item.duration}
        </span>
        <div className="flex items-center gap-1.5 bg-ink/70 backdrop-blur-md px-2 py-0.5 border border-line/60">
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              isPlaying ? "bg-accent animate-pulse" : "bg-paper-dim/60"
            }`}
          />
          <span className="text-[10px] font-mono uppercase tracking-wider text-paper-dim">
            {isPlaying ? "PLAYING" : "PREVIEW"}
          </span>
        </div>
      </div>

      {/* Bottom Overlaid Details: Category Label, Title, Metrics */}
      <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2 pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className="eyebrow text-accent font-mono text-[11px]">
            {item.category.toUpperCase()} • {item.categoryCode}
          </span>
          <span className="h-px w-4 bg-accent/40" />
          <span className="text-[10px] font-mono text-paper-dim uppercase">
            {item.metrics}
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-light text-paper tracking-tight leading-snug group-hover:text-white transition-colors">
          {item.title}
        </h3>

        <p className="text-xs text-paper-dim line-clamp-2 leading-relaxed">
          {item.hook}
        </p>
      </div>

      {/* Subtle hairline hover border highlight */}
      <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-accent/40" />
    </div>
  );
}

export default function ShortForm() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const railRef = useRef<HTMLDivElement>(null);

  const filteredReels =
    activeCategory === "All"
      ? REELS
      : REELS.filter((r) => r.category === activeCategory);

  const scrollRail = (direction: "left" | "right") => {
    if (railRef.current) {
      const scrollAmount = 340;
      railRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="reels" className="relative w-full border-b border-line py-28 md:py-36 bg-ink overflow-hidden">
      <RevealWrapper>
        {/* Header Row: 12-column grid */}
        <div className="portfolio-grid-container mb-12">
          <div className="grid grid-cols-12 gap-6 items-end">
            {/* Heading spanning 7 cols */}
            <div className="col-span-12 lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-accent">01 / SHORT FORM</span>
                <span className="h-px w-8 bg-accent/40" />
              </div>
              <h2 className="headline-display text-paper">
                Made for the <span className="italic font-light text-paper">scroll.</span>
              </h2>
            </div>

            {/* Right-aligned supporting line spanning 5 cols */}
            <div className="col-span-12 lg:col-span-5 lg:text-right space-y-4">
              <p className="max-w-md lg:ml-auto text-sm sm:text-base text-paper-dim leading-relaxed">
                Pacing, sound staging, and visual hooks engineered to hold retention past the critical 3-second dropoff.
              </p>
            </div>
          </div>

          {/* Category Tabs & Manual Scroll Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-10 border-t border-line mt-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`eyebrow px-3.5 py-1.5 rounded-full border text-xs transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "border-accent bg-accent/15 text-paper"
                      : "border-line bg-paper/[0.02] text-paper-dim hover:border-paper/40 hover:text-paper"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Rail Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollRail("left")}
                aria-label="Scroll left"
                className="flex h-9 w-9 items-center justify-center border border-line text-paper-dim transition-colors hover:border-accent hover:text-accent cursor-pointer"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollRail("right")}
                aria-label="Scroll right"
                className="flex h-9 w-9 items-center justify-center border border-line text-paper-dim transition-colors hover:border-accent hover:text-accent cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal-Scroll Rail: Vertical 9:16 Video Preview Tiles */}
        <div
          ref={railRef}
          className="flex gap-6 overflow-x-auto px-[clamp(1.5rem,5vw,6rem)] pb-8 pt-2 scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:thin] [scrollbar-color:rgba(237,234,227,0.2)_transparent]"
        >
          {filteredReels.map((reel) => (
            <ReelTile key={reel.id} item={reel} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
