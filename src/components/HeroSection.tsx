"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
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
    <section className="relative w-full h-[calc(100svh-58px)] min-h-[420px] md:min-h-[500px] overflow-hidden bg-white md:bg-nomina-black">
      <h1 className="sr-only">
        NOMINA Creative — Event Organizer Jakarta Terdekat | Sewa Sound System, Sewa Kursi Event, LED Screen &amp; Technical Custom Production di Jakarta Selatan
      </h1>
      {/* Background Video with Mobile Performance & Fallback Optimizations */}
      {/* ponytail: Direct Cloudinary CDN stream for fast global delivery without Next.js server overhead */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute z-0 w-full left-0 top-1/2 -translate-y-1/2 aspect-video object-cover md:inset-0 md:top-0 md:translate-y-0 md:aspect-auto md:h-full transition-opacity duration-700"
      >
        <source
          src="https://res.cloudinary.com/v764bbhk/video/upload/v1787297781/special20-showreel-1080.mp4"
          type="video/mp4"
        />
      </video>

      {/* Top Header Bar: Logo + Weather (Aligned vertically with StaggeredMenu at h-[58px]) */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[58px] flex items-center justify-between px-6 md:px-12">
        {/* NOMINA Logo */}
        <Link href="/" className="h-10 md:h-11 flex items-center hover:opacity-80 transition-opacity">
          <NominaLogo className="h-full w-auto" />
        </Link>

        {/* Right side: Weather */}
        <div className="flex items-center gap-4 md:gap-6">
          <WeatherWidget />
        </div>
      </div>
    </section>
  );
}

