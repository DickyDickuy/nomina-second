"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BenefitStrip {
  id: string;
  shortLabel: string;
  headline: string;
  highlightWord: string;
  description: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  svgPath: string;
}

const NOMINA_TENETS: BenefitStrip[] = [
  {
    id: "overview",
    shortLabel: "CULTURE",
    headline: "THE 6 PILLARS OF LIFE AT NOMINA — CREATIVE TENETS",
    highlightWord: "[Culture]",
    description:
      "At NOMINA Creative, we build high-impact brand activations and live event ecosystems through a culture of ownership, technical mastery, and fearless experimentation.",
    bgColor: "#f9f9f9",
    textColor: "#000000",
    accentColor: "#e85002",
    svgPath:
      "M 60 220 C 140 120, 240 320, 340 190 C 440 60, 520 280, 640 160",
  },
  {
    id: "create",
    shortLabel: "CREATE",
    headline:
      "When you [Create] alongside top creative directors and technical engineers, bold concepts turn into unforgettable national-scale stages.",
    highlightWord: "[Create]",
    description:
      "Direct exposure to Indonesia's leading corporate, banking, automotive, and entertainment brands—from concept ideation to live show execution.",
    bgColor: "#e85002",
    textColor: "#f9f9f9",
    accentColor: "#000000",
    svgPath:
      "M 80 260 C 180 140, 260 340, 380 210 C 480 90, 560 290, 660 180",
  },
  {
    id: "elevate",
    shortLabel: "ELEVATE",
    headline:
      "We must [Elevate] how events are engineered, how spaces feel, and how technology connects audiences in real time.",
    highlightWord: "[Elevate]",
    description:
      "Ongoing professional growth, mentorship, and hands-on access to cutting-edge 3D visualization, audio-visual rigs, and custom fabrication tools.",
    bgColor: "#1c1e2a",
    textColor: "#f9f9f9",
    accentColor: "#fb5102",
    svgPath:
      "M 200 80 L 520 340 M 490 90 C 330 90, 200 200, 200 320 C 350 320, 500 240, 490 90 Z",
  },
  {
    id: "thrive",
    shortLabel: "THRIVE",
    headline:
      "Protect your energy and [Thrive] with comprehensive health coverage, wellness support, and a balanced 10 AM to 7 PM rhythm.",
    highlightWord: "[Thrive]",
    description:
      "Full health insurance, outpatient benefits, daily meals, coffee & snacks, sports & relax zones, and dedicated prayer spaces at our Kemang HQ.",
    bgColor: "#d9c3ab",
    textColor: "#000000",
    accentColor: "#c10801",
    svgPath:
      "M 110 210 C 190 90, 280 330, 360 170 C 430 40, 510 310, 610 150",
  },
  {
    id: "reward",
    shortLabel: "REWARD",
    headline:
      "Exceptional execution deserves [Reward]—from competitive compensation and performance bonuses to annual pleasure tours.",
    highlightWord: "[Reward]",
    description:
      "We celebrate wins together with dual festival bonuses, leave encashment options, project incentives, and annual team retreats.",
    bgColor: "#c10801",
    textColor: "#f9f9f9",
    accentColor: "#d9c3ab",
    svgPath:
      "M 140 280 C 220 110, 340 110, 420 280 C 500 110, 580 110, 640 280",
  },
  {
    id: "belong",
    shortLabel: "BELONG",
    headline:
      "You don’t just fill a role—you [Belong] to a fast-paced, collaborative family of strategists, builders, and visionaries.",
    highlightWord: "[Belong]",
    description:
      "Zero bureaucracy, open-door leadership, and a tight-knit team that backs each other from pitch deck to load-out.",
    bgColor: "#333333",
    textColor: "#f9f9f9",
    accentColor: "#fb5102",
    svgPath:
      "M 180 190 C 180 110, 340 110, 340 190 C 340 270, 500 270, 500 190 C 500 110, 340 110, 340 190",
  },
];

const AUTO_CYCLE_MS = 4800;

const CareerBenefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextPanel = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % NOMINA_TENETS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextPanel, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [isPaused, nextPanel]);

  return (
    <section
      className="w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-white"
      aria-label="Life at NOMINA & Perks — Horizontal Expanding Accordion"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Section Eyebrow & Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-nomina-orange mb-2">
              • WHY JOIN NOMINA CREATIVE
            </span>
            <h2
              className="font-heading font-normal text-nomina-black uppercase leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
            >
              Our Culture &amp; Benefits
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-nomina-gray">
            Hover or tap any strip to explore ({activeIndex + 1}/{NOMINA_TENETS.length})
          </p>
        </div>

        {/* Desktop & Tablet Horizontal Expanding Accordion Strips (Matches Left Video of Slide 13 1:1) */}
        <div className="hidden md:flex w-full h-[520px] lg:h-[560px] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] border border-nomina-black/10">
          {NOMINA_TENETS.map((strip, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={strip.id}
                layout
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 30,
                  mass: 0.9,
                }}
                style={{
                  backgroundColor: strip.bgColor,
                  color: strip.textColor,
                  flex: isActive ? 6.5 : 0.75,
                }}
                className="relative h-full overflow-hidden cursor-pointer select-none flex flex-col justify-between p-6 lg:p-10 border-r last:border-r-0 border-black/10"
              >
                {/* Decorative Background Continuous Line Art (Matches Reference Video) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.svg
                      key={`svg-${strip.id}`}
                      viewBox="0 0 720 420"
                      fill="none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.22 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="pointer-events-none absolute inset-0 w-full h-full object-cover"
                    >
                      <motion.path
                        d={strip.svgPath}
                        stroke={strip.textColor}
                        strokeWidth="28"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.1, ease: "easeInOut" }}
                      />
                      <motion.path
                        d={strip.svgPath}
                        stroke={strip.accentColor}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(0, 34)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1.25,
                          delay: 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>

                {/* Top Left Emblem Badge (Matches circle-triangle badge in top-left of reference video) */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300"
                    style={{
                      borderColor: strip.textColor,
                      transform: isActive ? "scale(1)" : "scale(0.85)",
                    }}
                  >
                    <span
                      className="text-[10px] font-mono font-bold"
                      style={{ color: strip.textColor }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 0.75, x: 0 }}
                      className="font-mono text-xs uppercase tracking-[0.2em]"
                    >
                      NOMINA TENET // 0{idx + 1}
                    </motion.span>
                  )}
                </div>

                {/* Expanded Main Content */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={`content-${strip.id}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.32, delay: 0.08 }}
                      className="relative z-10 max-w-2xl my-auto pr-4"
                    >
                      {idx === 0 ? (
                        <h3
                          className="font-heading uppercase tracking-tight mb-5"
                          style={{
                            fontSize: "clamp(1.85rem, 3.4vw, 3.1rem)",
                            lineHeight: 1.06,
                          }}
                        >
                          THE 6 PILLARS OF
                          <br />
                          LIFE AT NOMINA
                          <br />
                          <span style={{ color: strip.accentColor }}>
                            — CREATIVE TENETS
                          </span>
                        </h3>
                      ) : (
                        <h3
                          className="font-body font-medium tracking-tight mb-5"
                          style={{
                            fontSize: "clamp(1.35rem, 2.3vw, 2.1rem)",
                            lineHeight: 1.28,
                          }}
                        >
                          {strip.headline}
                        </h3>
                      )}

                      <p
                        className="font-body opacity-85 max-w-xl leading-relaxed"
                        style={{
                          fontSize: "clamp(0.95rem, 1.25vw, 1.08rem)",
                          fontWeight: 500,
                        }}
                      >
                        {strip.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Vertical Rotated Strip Label (Matches REDUCE / RETHINK / REPAIR in reference video) */}
                <div className="relative z-10 flex items-end justify-between mt-auto pt-4">
                  <span
                    className="font-mono text-xs font-bold uppercase tracking-[0.22em] whitespace-nowrap"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {strip.shortLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Interactive Vertical Expanding Stack */}
        <div className="flex md:hidden flex-col rounded-2xl overflow-hidden border border-nomina-black/10 shadow-lg">
          {NOMINA_TENETS.map((strip, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={strip.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  backgroundColor: strip.bgColor,
                  color: strip.textColor,
                }}
                className={cn(
                  "transition-all duration-300 px-5 py-4 border-b last:border-b-0 border-black/10 cursor-pointer",
                  isActive ? "py-7" : "py-4"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                    0{idx + 1} — {strip.shortLabel}
                  </span>
                  <span className="font-mono text-xs opacity-70">
                    {isActive ? "ACTIVE" : "+"}
                  </span>
                </div>

                {isActive && (
                  <div className="mt-4">
                    <h3 className="font-body font-bold text-lg leading-snug mb-2">
                      {strip.headline}
                    </h3>
                    <p className="font-body text-sm opacity-85 leading-relaxed">
                      {strip.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerBenefits;
