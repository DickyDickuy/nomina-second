"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowButton } from "@/components/ArrowButton";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.35, once: false });

  // Reference video (Slide 6): Text lines reveal sequentially, and the highlight phrase
  // pulses/transitions cleanly between brand orange (#fb5102) and black (#000000).
  const [highlightOrange, setHighlightOrange] = useState(true);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setHighlightOrange((prev) => !prev);
    }, 2800);
    return () => clearInterval(interval);
  }, [isInView]);

  const titleLines = [
    "NOMINA — More Than",
    "Just a Creative Agency",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-white px-6 md:px-12 pt-20 pb-12"
      aria-label="About NOMINA Creative: Event Organizer Jakarta"
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Sequential Line Reveal + Color Transition on White Background */}
        <h2
          className="font-heading font-normal text-nomina-black uppercase leading-[1.05] tracking-tight mb-4 md:mb-6"
          style={{ fontSize: "clamp(1.75rem, 4.6vw, 4.25rem)" }}
        >
          {titleLines.map((line, idx) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  isInView
                    ? { y: "0%", opacity: 1 }
                    : { y: "100%", opacity: 0 }
                }
                transition={{
                  duration: 0.65,
                  delay: idx * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* Animated Sub-title with color transition from video reference */}
        <div className="overflow-hidden mb-6 md:mb-8">
          <motion.h3
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView
                ? {
                    y: "0%",
                    opacity: 1,
                    color: highlightOrange ? "#fb5102" : "#000000",
                  }
                : { y: "100%", opacity: 0 }
            }
            transition={{
              y: { duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.5, delay: 0.28 },
              color: { duration: 0.8, ease: "easeInOut" },
            }}
            className="font-body"
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            We Design Communication Ecosystems
          </motion.h3>
        </div>

        {/* Body Copy Paragraphs */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-8">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="leading-relaxed text-nomina-black"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
            }}
          >
            Since 2016, NOMINA Creative has been the trusted partner for leading brands across Indonesia—delivering everything from high-impact brand activations and corporate conferences to custom technical productions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="leading-relaxed text-nomina-black"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
            }}
          >
            By seamlessly integrating{" "}
            <motion.strong
              animate={{
                color: highlightOrange ? "#fb5102" : "#000000",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ fontWeight: 700 }}
            >
              Strategy, Content, Live Events, and Technology
            </motion.strong>
            , we bring ideas to life and create authentic, memorable connections between people and brands that stand the test of time.
          </motion.p>
        </div>

        {/* Indonesian SEO keywords - invisible visually, indexed by Google */}
        <span className="sr-only">
          Sejak 2016, NOMINA Creative adalah event organizer Jakarta terpercaya
          di Kemang, Jakarta Selatan. Melayani corporate event, brand activation,
          exhibition, product launch, roadshow, sewa sound system, sewa kursi event,
          sewa LED screen, staging, dan lighting rig, rental equipment &amp; technical
          custom production untuk event skala nasional.
        </span>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.55, delay: 0.62 }}
          className="flex justify-center mt-4"
        >
          <ArrowButton label="Discover more" href="/about" />
        </motion.div>
      </div>
    </section>
  );
}
