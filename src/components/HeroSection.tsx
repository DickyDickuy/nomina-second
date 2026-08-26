"use client";

import { useEffect, useRef } from "react";
import { NominaLogo } from "@/components/icons";
import { WeatherWidget } from "@/components/WeatherWidget";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Mobile Battery & Performance Optimization:
  // Auto-pause video playback when user scrolls out of viewport, resume when visible.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-[calc(100svh-58px)] min-h-[500px] w-full overflow-hidden bg-nomina-black">
      <h1 className="sr-only">Nomina Creative Asia</h1>
      {/* Background Video with Mobile Performance & Fallback Optimizations */}
      {/* ponytail: Direct Cloudinary CDN stream for fast global delivery without Next.js server overhead */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 transition-opacity duration-700"
      >
        <source
          src="https://res.cloudinary.com/v764bbhk/video/upload/v1787297781/special20-showreel-1080.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Scrim Gradient Overlays for Visual Balance & Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />

      {/* Top Header Bar: Logo + Weather (Aligned vertically with StaggeredMenu at h-[58px]) */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[58px] flex items-center justify-between px-6 md:px-12">
        {/* NOMINA Logo */}
        <NominaLogo className="text-nomina-red" />

        {/* Right side: Weather */}
        <div className="flex items-center gap-4 md:gap-6">
          <WeatherWidget />
        </div>
      </div>

      {/* Bottom Hero Overlay Tagline */}
      <div className="absolute bottom-6 right-6 z-20 flex items-end justify-end pointer-events-none">
        {/* Hero Tagline */}
        <div className="text-right text-white">
          <p className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-white/70">
            Special Edition
          </p>
          <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white">
            10 Years of People
          </p>
        </div>
      </div>
    </section>
  );
}

