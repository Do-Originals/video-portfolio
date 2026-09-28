"use client";

import React, { useRef, useState, useEffect } from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import Hls from "hls.js";

interface LongFormProject {
  id: string;
  category: "Podcast" | "Commercial";
  categoryLabel: string;
  tag: string;
  title: string;
  description: string;
  deliverables: string;
  duration: string;
  videoSrc: string;
  fallbackSrc: string;
  poster: string;
}

const PROJECTS: LongFormProject[] = [
  {
    id: "podcast-1",
    category: "Podcast",
    categoryLabel: "Podcast",
    tag: "EPISODIC & MULTI-CAM",
    title: "The Vanguard Chronicles",
    description:
      "Full-season post-production for an episodic boardroom podcast, transforming unscripted multi-cam dialogues into tightly paced narrative arcs.",
    deliverables: "4-Cam 4K Switching • Dynamic Punch-ins • Dialogue Mastering",
    duration: "48:20 Episode",
    videoSrc: "/videos/longform/podcast-1.mp4",
    fallbackSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-recording-a-podcast-with-microphones-42686-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "commercial-1",
    category: "Commercial",
    categoryLabel: "Commercial & Brand Film",
    tag: "COMMERCIAL & BRAND FILM",
    title: "Cinematic Brand Commercial",
    description:
      "A high-impact commercial engineered to elevate local business credibility, showcase premium products, and convert interest into paying clients.",
    deliverables: "Commercial Master • Social Cutdowns • Audio Mastering",
    duration: "01:45 Master",
    videoSrc:
      "https://res.cloudinary.com/akjttfwt/video/upload/AQMjMClgiGnboMqYtzD5Mg5Y7YTEibymko8uC8Fna0KH1zssJw1bi5UjK8wIP5hqVFCvTQzNRWD7y_rC2061iBd6fl-t-1eIqIILFSM_rxnjpg.mp4",
    fallbackSrc:
      "https://res.cloudinary.com/akjttfwt/video/upload/AQMjMClgiGnboMqYtzD5Mg5Y7YTEibymko8uC8Fna0KH1zssJw1bi5UjK8wIP5hqVFCvTQzNRWD7y_rC2061iBd6fl-t-1eIqIILFSM_rxnjpg.mp4",
    poster:
      "https://res.cloudinary.com/akjttfwt/video/upload/so_1,w_1200,q_auto,f_auto/AQMjMClgiGnboMqYtzD5Mg5Y7YTEibymko8uC8Fna0KH1zssJw1bi5UjK8wIP5hqVFCvTQzNRWD7y_rC2061iBd6fl-t-1eIqIILFSM_rxnjpg.jpg",
  },
  {
    id: "commercial-2",
    category: "Commercial",
    categoryLabel: "Commercial & Brand Film",
    tag: "COMMERCIAL & BRAND FILM",
    title: "High-Impact Commercial Campaign",
    description:
      "Dynamic commercial storytelling capturing brand identity, emotional engagement, and customer action with television-grade cinematography.",
    deliverables: "Full 4K Master • Color Grade • Sound Mix",
    duration: "01:30 Master",
    videoSrc:
      "https://stream.mux.com/X2dlDyQJQBzQketuqa1uokTU1tFN8B8W005b01kTNgjdk.m3u8",
    fallbackSrc:
      "https://stream.mux.com/X2dlDyQJQBzQketuqa1uokTU1tFN8B8W005b01kTNgjdk.m3u8",
    poster:
      "https://image.mux.com/X2dlDyQJQBzQketuqa1uokTU1tFN8B8W005b01kTNgjdk/thumbnail.jpg?time=2",
  },
  {
    id: "commercial-3",
    category: "Commercial",
    categoryLabel: "Commercial & Brand Film",
    tag: "PRODUCT SHOWCASE & COMMERCIAL",
    title: "Precision Product Commercial",
    description:
      "Macro product cinematography combined with rhythmic sound design and razor-sharp post-production engineered for maximum customer retention.",
    deliverables: "Commercial Master • Social Cutdowns • Audio Mastering",
    duration: "01:15 Master",
    videoSrc:
      "https://stream.mux.com/MdBUnGJ02WGa7CVatC6RDqc6CY7vvBzPaEmQfsmgjEHo.m3u8",
    fallbackSrc:
      "https://stream.mux.com/MdBUnGJ02WGa7CVatC6RDqc6CY7vvBzPaEmQfsmgjEHo.m3u8",
    poster:
      "https://image.mux.com/MdBUnGJ02WGa7CVatC6RDqc6CY7vvBzPaEmQfsmgjEHo/thumbnail.jpg?time=2",
  },
  {
    id: "podcast-2",
    category: "Podcast",
    categoryLabel: "Podcast",
    tag: "STUDIO BROADCAST",
    title: "Founders Uncut: Round Table",
    description:
      "Deep-dive interviews cut with television-grade multicam transitions, visual chapter markers, and real-time lower-third citations.",
    deliverables: "Multicam Cut • Chapter Markers • Social Teaser Cutdowns",
    duration: "1:02:15 Cut",
    videoSrc: "/videos/longform/podcast-2.mp4",
    fallbackSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-young-man-talking-at-a-videoconference-42525-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=80",
  },
];

const CATEGORIES = ["Podcast", "Commercial"] as const;

function LongFormCard({ project }: { project: LongFormProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (project.videoSrc.includes(".m3u8")) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = project.videoSrc;
      } else if (Hls.isSupported()) {
        hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
        });
        hls.loadSource(project.videoSrc);
        hls.attachMedia(video);
      }
    } else {
      video.src = project.videoSrc;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [project.videoSrc]);

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

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTogglePlay}
      className="group relative w-[320px] sm:w-[460px] md:w-[560px] lg:w-[620px] shrink-0 snap-start border border-line bg-ink transition-all duration-500 hover:border-paper/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer flex flex-col justify-between"
    >
      {/* 16:9 Video Box */}
      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster={project.poster}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        >
          <source src={project.videoSrc} type="video/mp4" />
          <source src={project.fallbackSrc} type="video/mp4" />
        </video>

        {/* Ambient Dark Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent transition-opacity duration-300 group-hover:opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <span className="eyebrow bg-ink/80 backdrop-blur-md px-2.5 py-1 text-[11px] text-paper-dim border border-line/70">
            {project.categoryLabel.toUpperCase()}
          </span>
          <span className="eyebrow bg-ink/80 backdrop-blur-md px-2.5 py-1 text-[11px] text-paper-dim border border-line/70 font-mono">
            {project.duration}
          </span>
        </div>

        {/* Minimal Centered Play Button (Fades out when playing) */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${
            isPlaying ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/40 bg-ink/75 backdrop-blur-md text-paper transition-transform duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
            <svg
              className="h-5 w-5 translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Bottom Playback Cue */}
        <div className="absolute bottom-3 left-4 pointer-events-none z-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-paper-dim/80">
            {isPlaying ? "PLAYING REEL" : "HOVER / TAP TO PREVIEW"}
          </span>
        </div>
      </div>

      {/* Card Content & Spec Details */}
      <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between border-t border-line/60">
        <div className="space-y-2.5">
          <span className="eyebrow text-accent font-mono text-[11px]">
            {project.tag}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-light text-paper tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-paper-dim leading-relaxed font-light line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="pt-3 border-t border-line/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs text-paper-dim font-mono">
            {project.deliverables}
          </span>

          <a
            href="#contact"
            onClick={(e) => e.stopPropagation()}
            className="group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-paper transition-colors duration-200 hover:text-accent shrink-0"
          >
            <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-paper/40 after:transition-all after:duration-300 group-hover/link:after:bg-accent">
              View Project Spec
            </span>
            <span className="text-accent transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LongForm() {
  const [activeCategory, setActiveCategory] = useState<string>("Podcast");
  const railRef = useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory);

  const scrollRail = (direction: "left" | "right") => {
    if (railRef.current) {
      const scrollAmount = 600;
      railRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="work"
      className="relative w-full border-b border-line py-28 md:py-36 bg-ink overflow-hidden"
    >
      <RevealWrapper>
        {/* Header Row: 12-Column Grid */}
        <div className="portfolio-grid-container mb-12">
          <div className="grid grid-cols-12 gap-6 items-end">
            {/* Left-Aligned Headline */}
            <div className="col-span-12 lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-accent font-mono">LONG FORM & COMMERCIALS</span>
                <span className="h-px w-8 bg-accent/40" />
              </div>
              <h2 className="headline-display text-paper">
                Videos that tell your{" "}
                <span className="italic font-light text-paper">business story.</span>
              </h2>
            </div>

            {/* Right-Aligned Supporting Copy */}
            <div className="col-span-12 lg:col-span-5 lg:text-right space-y-4">
              <p className="max-w-md lg:ml-auto text-sm sm:text-base text-paper-dim leading-relaxed">
                Podcasts, commercials, and customer showcases that clearly explain what you do, answer buyer questions, and build lasting trust.
              </p>
            </div>
          </div>

          {/* Category Tabs & Navigation Bar */}
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

            {/* Navigation Arrows */}
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

        {/* Horizontal-Scroll Slider Rail: 16:9 Landscape Video Preview Tiles */}
        <div
          ref={railRef}
          className="flex gap-8 overflow-x-auto px-[clamp(1.5rem,5vw,6rem)] pb-8 pt-2 scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:thin] [scrollbar-color:rgba(237,234,227,0.2)_transparent]"
        >
          {filteredProjects.map((project) => (
            <LongFormCard key={project.id} project={project} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
