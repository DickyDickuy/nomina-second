"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import styles from "./Skiper30.module.css";
import CircularGallery, { CircularGalleryItem } from "./CircularGallery";

const NOMINA_PORTFOLIO: CircularGalleryItem[] = [
  {
    image: "/assets/img/portfolio/skiper/GRAND OPENING OCBC PREMIUM GUEST HOUSE TOMANG.webp",
    text: "OCBC Premium Guest House Tomang",
  },
  {
    image: "/assets/img/portfolio/skiper/HSBC ASEAN BUSINESS LUNCHEON.webp",
    text: "HSBC ASEAN Business Luncheon",
  },
  {
    image: "/assets/img/portfolio/skiper/ASTRA International HUT 65.webp",
    text: "ASTRA International HUT 65",
  },
  {
    image: "/assets/img/portfolio/skiper/HSBC SIGNING CEREMONY 2025.webp",
    text: "HSBC Signing Ceremony 2025",
  },
  {
    image: "/assets/img/portfolio/skiper/ESMOD Jakarta Creative Show.webp",
    text: "ESMOD Jakarta Creative Show",
  },
  {
    image: "/assets/img/portfolio/skiper/DANA CUP 2026.webp",
    text: "DANA Cup Championship",
  },
  {
    image: "/assets/img/portfolio/skiper/CommBank Smartwalth Hybrid Event.webp",
    text: "CommBank Smartwealth Hybrid Event",
  },
  {
    image: "/assets/img/portfolio/skiper/POKEMON PRESS CONFERENCE 2025.webp",
    text: "Pokémon Press Conference 2025",
  },
  {
    image: "/assets/img/portfolio/skiper/Manggungdi Edutown BSD.webp",
    text: "Manggung di Edutown BSD",
  },
  {
    image: "/assets/img/portfolio/skiper/IGDX 2024.webp",
    text: "IGDX 2024",
  },
  {
    image: "/assets/img/portfolio/skiper/Emerson MSOL at Nusa Dua Bali.webp",
    text: "Emerson MSOL at Nusa Dua Bali",
  },
  {
    image: "/assets/img/portfolio/skiper/ASTRA International Decoration 17 Agustus.webp",
    text: "ASTRA Decoration 17 Agustus",
  },
  {
    image: "/assets/img/portfolio/skiper/ECOSOLEX BRAND LAUNCH 2025.webp",
    text: "ECOSOLEX Brand Launch 2025",
  },
  {
    image: "/assets/img/portfolio/skiper/AutoKultur Indonesia 2022.webp",
    text: "AutoKultur Indonesia",
  },
  {
    image: "/assets/img/portfolio/skiper/Super Music - Break Out Day 2024.webp",
    text: "Super Music - Break Out Day",
  },
  {
    image: "/assets/img/portfolio/skiper/OCBC Grand Opening Premium Guest House Bekasi.webp",
    text: "OCBC Guest House Bekasi",
  },
  {
    image: "/assets/img/portfolio/skiper/HSBC SUMMIT 2025.webp",
    text: "HSBC Summit 2025",
  },
  {
    image: "/assets/img/portfolio/skiper/PSI Chinese New Year Celebration at SunCity.webp",
    text: "Chinese New Year Celebration SunCity",
  },
  {
    image: "/assets/img/portfolio/skiper/OCBC Intimate Dinner 2024.webp",
    text: "OCBC Intimate Dinner 2024",
  },
  {
    image: "/assets/img/portfolio/skiper/Flip Truk LebihDariItu.webp",
    text: "Flip Truk #LebihDariItu",
  },
  {
    image: "/assets/img/portfolio/skiper/Grand Indonesia Summerglow 2022.webp",
    text: "Grand Indonesia Summerglow",
  },
  {
    image: "/assets/img/portfolio/skiper/HSBC Diwali Festival of Lights.webp",
    text: "HSBC Diwali Festival of Lights",
  },
];

const Skiper30 = () => {
  const [selectedItem, setSelectedItem] = useState<CircularGalleryItem | null>(
    null
  );

  return (
    <div className={styles.main}>
      {/* Hero spacer with semantic H1 for SEO */}
      <div
        className={styles.spacer}
        style={{
          backgroundImage:
            "url('/assets/img/about-us/about-us-4/about-us-4-bg.png')",
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
          aria-label="Portfolio & Archive — NOMINA Event Organizer & Custom Production Projects Jakarta"
        >
          portOfolio
        </h1>
      </div>

      {/* Hardware-Accelerated WebGL Circular Gallery (60fps for all 22 cards) */}
      <div className="w-full bg-white py-10 md:py-16">
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            items={NOMINA_PORTFOLIO}
            bend={3}
            textColor="#111111"
            borderRadius={0.05}
            scrollEase={0.05}
            onItemClick={(item) => setSelectedItem(item)}
          />
        </div>
      </div>

      {/* Lightbox preview when a card is clicked */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/75 hover:bg-nomina-orange text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[75vh] bg-black flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedItem.image}
                  alt={selectedItem.text}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
              <div className="p-5 bg-white text-nomina-black">
                <h3 className="font-heading text-lg sm:text-xl uppercase">
                  {selectedItem.text}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skiper30;
