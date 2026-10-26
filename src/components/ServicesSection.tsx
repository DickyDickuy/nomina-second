"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Event Organizer",
    subtitle: "Corporate Event, Brand Activation, Exhibition & Roadshow Jakarta",
    description:
      "Bringing events of all scales to life—from corporate conferences to creative brand activations—through meticulous management and flawless execution.",
    href: "#",
  },
  {
    title: "Technical Custom Production",
    subtitle: "Custom Stage, Booth Pameran & Instalasi Kreatif",
    description:
      "Providing bespoke production solutions for stages, creative installations, and specialized technical structures tailored to your unique event concepts.",
    href: "#",
  },
  {
    title: "Rental Equipment",
    subtitle: "Sewa Sound System, Kursi Event, LED Screen & Staging Jakarta",
    description:
      "Supplying high-quality technical equipment rentals for event and production needs, including professional sound systems, lighting, multimedia, and LED screens.",
    href: "#",
  },
  {
    title: "Web Development",
    subtitle: "Website, Microsite & Platform Digital Brand",
    description:
      "Building responsive, high-performance, and dynamic websites designed to strengthen your digital presence and optimize the overall user experience.",
    href: "#",
  },
  {
    title: "SaaS Management",
    subtitle: "Solusi Cloud & Digitalisasi Operasional Event",
    description:
      "Managing, integrating, and optimizing Software as a Service (SaaS) systems to streamline operational efficiency and scale your digital workflows.",
    href: "#",
  },
];

const EXPAND_TRANSITION = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
  mass: 0.9,
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hasActive = activeIndex !== null;

  return (
    <section
      id="services"
      className="bg-white"
      aria-label="Layanan NOMINA Creative — Event Organizer, Rental Equipment & Technical Production Jakarta"
    >
      {/* Section title */}
      <div className="text-center pt-16 pb-6 md:pt-24 md:pb-10">
        <h2
          className="font-heading font-normal text-nomina-black uppercase text-center leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 4.2vw, 3.5rem)" }}
        >
          Services
        </h2>
        <p className="sr-only">
          Layanan NOMINA Creative: Event Organizer Jakarta, Sewa Sound System, Sewa Kursi Event,
          Technical Custom Production, dan Rental Equipment untuk corporate event di Jakarta Selatan.
        </p>
      </div>

      {/* Interactive Expanding Service Rows */}
      <div
        className="w-full"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {SERVICES.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={service.title}
              layout
              transition={EXPAND_TRANSITION}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() =>
                setActiveIndex((prev) => (prev === index ? null : index))
              }
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              className={cn(
                "group relative w-full border-t border-nomina-black/15 last:border-b cursor-pointer overflow-hidden select-none outline-none transition-colors duration-300",
                isActive
                  ? "bg-nomina-orange text-nomina-white"
                  : "bg-white text-nomina-black hover:bg-nomina-orange hover:text-nomina-white"
              )}
            >
              <motion.div
                layout="position"
                transition={EXPAND_TRANSITION}
                className={cn(
                  "w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center transition-[padding] duration-300 ease-out",
                  isActive
                    ? "py-10 md:py-14"
                    : hasActive
                      ? "py-4 md:py-5"
                      : "py-6 md:py-8"
                )}
              >
                <motion.span
                  layout="position"
                  transition={EXPAND_TRANSITION}
                  className={cn(
                    "font-heading font-normal uppercase leading-[1.05] tracking-tight block text-center transition-[opacity,transform] duration-300",
                    isActive
                      ? "opacity-100 scale-[1.03]"
                      : hasActive
                        ? "opacity-45 scale-[0.96]"
                        : "opacity-100 scale-100"
                  )}
                  style={{ fontSize: "clamp(1.5rem, 4.2vw, 3.75rem)" }}
                >
                  {service.title}
                </motion.span>

                {/* Expanding Description Container */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? 16 : 0,
                  }}
                  transition={{
                    height: EXPAND_TRANSITION,
                    opacity: { duration: 0.25, delay: isActive ? 0.06 : 0 },
                    marginTop: EXPAND_TRANSITION,
                  }}
                  className="w-full overflow-hidden flex justify-center"
                >
                  <p
                    className={cn(
                      "font-body max-w-2xl text-center transition-colors duration-300",
                      isActive ? "text-nomina-white/95" : "text-nomina-gray"
                    )}
                    style={{
                      fontSize: "clamp(0.95rem, 1.35vw, 1.125rem)",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </p>
                </motion.div>

                {/* Hidden SEO-rich subtitle & description for crawlers */}
                <span className="sr-only">
                  {service.subtitle}. {service.description}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
