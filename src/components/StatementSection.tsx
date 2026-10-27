"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowButton } from "@/components/ArrowButton";

export function StatementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });

  const headingWords = ["We Design", "Communication", "Ecosystems."];

  return (
    <section
      ref={sectionRef}
      id="special-20"
      className="relative bg-white px-6 md:px-12 pt-20 pb-24 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Large statement heading with staggered scroll reveal */}
        <h2
          className="font-heading font-normal text-nomina-black uppercase leading-[0.95] tracking-tight mb-8 md:mb-10"
          style={{ fontSize: "clamp(1.875rem, 7.2vw, 8.5rem)", lineHeight: 1 }}
        >
          {headingWords.map((line, idx) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "85%", opacity: 0 }}
                animate={
                  isInView
                    ? { y: "0%", opacity: 1 }
                    : { y: "35%", opacity: 0.2 }
                }
                transition={{
                  duration: 0.65,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  idx === 2 ? "block text-nomina-orange" : "block text-nomina-black"
                }
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 12 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="font-body text-nomina-black max-w-2xl mb-3"
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          10 Years of Building Events and Brands in Jakarta
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 12 }}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="font-body leading-relaxed text-nomina-black max-w-2xl mb-8"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
          }}
        >
          For 10 years, NOMINA Creative has been the event organizer of choice in Jakarta for hundreds of leading brands, from corporate events and brand activations to exhibitions and national-scale product launches. From sound system and event furniture rentals to technical custom production, we connect ideas, content, people, and technology to create memorable and impactful communication.
        </motion.p>

        {/* Indonesian SEO keywords - invisible visually, indexed by search engines */}
        <span className="sr-only">
          Selama 10 tahun, NOMINA Creative telah menjadi event organizer Jakarta pilihan
          ratusan brand ternama untuk corporate event, brand activation,
          hingga exhibition dan product launch skala nasional.
          Dari sewa sound system, sewa kursi event, hingga technical custom production,
          kami menghubungkan ide, konten, manusia, dan teknologi menjadi komunikasi yang berkesan dan berdampak.
        </span>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
          transition={{ duration: 0.5, delay: 0.44 }}
        >
          <ArrowButton label="Get in touch with NOMINA" href="/contact" />
        </motion.div>
      </div>
    </section>
  );
}
