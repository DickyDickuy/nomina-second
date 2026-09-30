"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import styles from "./Skiper30.module.css";
import { Gallery, GalleryGrid, GalleryImage, useGallery } from "@/components/ui/shared-element-gallery";

const NOMINA_PORTFOLIO = [
  // Column 1 (5 items: Portrait -> Landscape -> Portrait -> Landscape -> Portrait)
  { id: "1", src: "/assets/img/portfolio/skiper/GRAND OPENING OCBC PREMIUM GUEST HOUSE TOMANG.webp", alt: "GRAND OPENING OCBC PREMIUM GUEST HOUSE TOMANG" },
  { id: "2", src: "/assets/img/portfolio/skiper/HSBC ASEAN BUSINESS LUNCHEON.webp", alt: "HSBC ASEAN Business Luncheon" },
  { id: "3", src: "/assets/img/portfolio/skiper/ASTRA International HUT 65.webp", alt: "ASTRA International HUT 65" },
  { id: "4", src: "/assets/img/portfolio/skiper/HSBC SIGNING CEREMONY 2025.webp", alt: "HSBC Signing Ceremony 2025" },
  { id: "5", src: "/assets/img/portfolio/skiper/ESMOD Jakarta Creative Show.webp", alt: "ESMOD Jakarta Creative Show" },

  // Column 2 (6 items: Landscape -> Portrait -> Landscape -> Portrait -> Landscape -> Portrait)
  { id: "6", src: "/assets/img/portfolio/skiper/DANA CUP 2026.webp", alt: "DANA Cup 2026" },
  { id: "7", src: "/assets/img/portfolio/skiper/CommBank Smartwalth Hybrid Event.webp", alt: "CommBank Smartwealth Hybrid Event" },
  { id: "8", src: "/assets/img/portfolio/skiper/POKEMON PRESS CONFERENCE 2025.webp", alt: "POKEMON PRESS CONFERENCE 2025" },
  { id: "9", src: "/assets/img/portfolio/skiper/Manggungdi Edutown BSD.webp", alt: "Manggungdi Edutown BSD" },
  { id: "10", src: "/assets/img/portfolio/skiper/IGDX 2024.webp", alt: "IGDX 2024" },
  { id: "11", src: "/assets/img/portfolio/skiper/Emerson MSOL at Nusa Dua Bali.webp", alt: "Emerson MSOL at Nusa Dua Bali" },

  // Column 3 (6 items: Portrait -> Landscape -> Portrait -> Landscape -> Portrait -> Landscape)
  { id: "12", src: "/assets/img/portfolio/skiper/ASTRA International Decoration 17 Agustus.webp", alt: "ASTRA International Decoration 17 Agustus" },
  { id: "13", src: "/assets/img/portfolio/skiper/ECOSOLEX BRAND LAUNCH 2025.webp", alt: "ECOSOLEX Brand Launch 2025" },
  { id: "14", src: "/assets/img/portfolio/skiper/AutoKultur Indonesia 2022.webp", alt: "AutoKultur Indonesia 2022" },
  { id: "15", src: "/assets/img/portfolio/skiper/Super Music - Break Out Day 2024.webp", alt: "Super Music - Break Out Day 2024" },
  { id: "16", src: "/assets/img/portfolio/skiper/OCBC Grand Opening Premium Guest House Bekasi.webp", alt: "OCBC Grand Opening Premium Guest House Bekasi" },
  { id: "17", src: "/assets/img/portfolio/skiper/HSBC SUMMIT 2025.webp", alt: "HSBC SUMMIT 2025" },

  // Column 4 (5 items: Portrait -> Landscape -> Portrait -> Square -> Portrait)
  { id: "18", src: "/assets/img/portfolio/skiper/PSI Chinese New Year Celebration at SunCity.webp", alt: "PSI Chinese New Year Celebration at SunCity" },
  { id: "19", src: "/assets/img/portfolio/skiper/OCBC Intimate Dinner 2024.webp", alt: "OCBC Intimate Dinner 2024" },
  { id: "20", src: "/assets/img/portfolio/skiper/Flip Truk LebihDariItu.webp", alt: "Flip Truk #LebihDariItu" },
  { id: "21", src: "/assets/img/portfolio/skiper/Grand Indonesia Summerglow 2022.webp", alt: "Grand Indonesia Summerglow 2022" },
  { id: "22", src: "/assets/img/portfolio/skiper/HSBC Diwali Festival of Lights.webp", alt: "HSBC Diwali Festival of Lights" },
];

function GalleryCursorCircle({ hoveredName }: { hoveredName: string | null }) {
  const gallery = useGallery();
  const isClient = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Raw mouse coordinates
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Smooth spring physics for organic cursor following
  const springConfig = { damping: 25, stiffness: 280, mass: 0.4 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // If modal zoom is open, hide circle completely for pure fullscreen focus
  const isModalOpen = Boolean(gallery?.selectedImage);
  const isVisible = isClient && !isModalOpen && Boolean(hoveredName);

  // Adaptive typography based on event title length to ensure no mid-word wrapping or text spilling
  const textLength = hoveredName ? hoveredName.length : 0;
  const fontSize = textLength > 34 ? "0.56rem" : textLength > 20 ? "0.64rem" : "0.74rem";
  const lineHeight = textLength > 34 ? "1.2" : "1.28";

  if (!isClient || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.cursorCircle}
          style={{ x: circleX, y: circleY }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 24, stiffness: 320 }}
        >
          <span
            className={styles.cursorCircleText}
            style={{ fontSize, lineHeight }}
          >
            {hoveredName}
          </span>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

const Skiper30 = () => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <div className={styles.main}>
      {/* Hero spacer with semantic H1 for SEO */}
      <div
        className={styles.spacer}
        style={{
          backgroundImage: "url('/assets/img/about-us/about-us-4/about-us-4-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.scrollTextContainer}>
          <span className={`${styles.scrollText} ${styles.scrollTextDown}`}>
            scroll down to see
          </span>
        </div>
        <h1
          className={`${styles.spacerTitle} tp_fade_anim`}
          data-on-scroll="0"
          aria-label="Portfolio — NOMINA Event Organizer & Custom Production Projects Jakarta"
        >
          portOfolio
        </h1>
      </div>

      {/* Masonry Gallery with shared-element transition & interactive cursor circle */}
      <div className="w-full bg-white px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-6 md:pt-10 pb-4 md:pb-6">
        <div className="w-full max-w-[2160px] mx-auto">
          <Gallery>
            <GalleryGrid className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 xl:gap-8">
              {NOMINA_PORTFOLIO.map((image) => (
                <GalleryImage
                  key={image.id}
                  id={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="mb-4 md:mb-6 xl:mb-8"
                  onMouseEnter={() => setHoveredName(image.alt)}
                  onMouseLeave={() => setHoveredName(null)}
                  onClick={() => setHoveredName(null)}
                />
              ))}
            </GalleryGrid>
            <GalleryCursorCircle hoveredName={hoveredName} />
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default Skiper30;
