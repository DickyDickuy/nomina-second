"use client";

import { NominaLogo } from "@/components/icons";
import { WeatherWidget } from "@/components/WeatherWidget";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function HeroSection() {
  return (
    <section className="relative h-[calc(100dvh-58px)] w-full overflow-hidden bg-nomina-red">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/special20-showreel-1080.mp4" type="video/mp4" />
      </video>

      {/* Red overlay with animated "20" text — visible when video is dark/between cuts */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <span
          className="font-heading text-white text-[35vw] md:text-[30vw] leading-none select-none opacity-90"
          style={{
            animation: "hero-blur-in 2s ease-out forwards",
            textShadow: "0 0 80px rgba(255,255,255,0.3)",
          }}
        >
          20
        </span>
      </div>

      {/* Top bar: Logo + Weather + Language */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between px-6 md:px-12 pt-6 md:pt-8">
        {/* NOMINA Logo */}
        <NominaLogo className="text-nomina-red" />

        {/* Right side: Weather + Language */}
        <div className="flex items-start gap-4 md:gap-6">
          <WeatherWidget />
          <LanguageSwitcher variant="light" />
        </div>
      </div>
    </section>
  );
}
