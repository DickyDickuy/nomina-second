"use client";

import { motion, MotionValue, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Lenis from "lenis";
import Image from "next/image";
import styles from "./Skiper30.module.css";

const portfolio = [
  { src: "/assets/img/portfolio/skiper/Flip Truk LebihDariItu.png", name: "Flip Truk #LebihDariItu" },
  { src: "/assets/img/portfolio/skiper/ASTRA International HUT 65.png", name: "ASTRA International HUT 65" },
  { src: "/assets/img/portfolio/skiper/CommBank Smartwalth Hybrid Event.png", name: "CommBank Smartwalth Hybrid Event" },
  { src: "/assets/img/portfolio/skiper/Emerson MSOL at Nusa Dua Bali.png", name: "Emerson MSOL at Nusa Dua Bali" },
  { src: "/assets/img/portfolio/skiper/Grand Indonesia Summerglow 2022.png", name: "Grand Indonesia Summerglow 2022" },
  { src: "/assets/img/portfolio/skiper/ASTRA International Decoration 17 Agustus.png", name: "ASTRA International Decoration 17 Agustus" },
  { src: "/assets/img/portfolio/skiper/ESMOD Jakarta Creative Show.png", name: "ESMOD Jakarta Creative Show" },
  { src: "/assets/img/portfolio/skiper/PSI Chinese New Year Celebration at SunCity.png", name: "PSI Chinese New Year Celebration at SunCity" },
  { src: "/assets/img/portfolio/skiper/AutoKultur Indonesia 2022.png", name: "AutoKultur Indonesia 2022" },
  { src: "/assets/img/portfolio/skiper/Manggungdi Edutown BSD.png", name: "Manggungdi Edutown BSD" },
  { src: "/assets/img/portfolio/skiper/OCBC Grand Opening Premium Guest House Bekasi.png", name: "OCBC Grand Opening Premium Guest House Bekasi" },
  { src: "/assets/img/portfolio/skiper/HSBC Diwali Festival of Lights.png", name: "HSBC Diwali Festival of Lights" },
];

const Skiper30 = () => {
  const spacerRef = useRef<HTMLDivElement>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [portalReady, setPortalReady] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-smoothed position for the circle
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  const checkHover = useCallback((x: number, y: number) => {
    if (typeof document === "undefined") return;

    // Get the SINGLE topmost element under the cursor (respecting z-index and overlays like menus)
    const topElement = document.elementFromPoint(x, y);

    if (!topElement) {
      setHoveredName(null);
      return;
    }

    // Check if the topmost element or any of its parents is a portfolio item
    const portfolioEl = topElement.closest('[data-portfolio-name]') as HTMLElement | null;

    if (portfolioEl && portfolioEl.dataset.portfolioName) {
      setHoveredName(portfolioEl.dataset.portfolioName);
    } else {
      setHoveredName(null);
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    checkHover(e.clientX, e.clientY);
  }, [mouseX, mouseY, checkHover]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalReady(true);
    window.addEventListener("mousemove", handleMouseMove);

    const handleScroll = () => {
      checkHover(mouseX.get(), mouseY.get());
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseMove, checkHover, mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={styles.main}>
      <div
        ref={spacerRef}
        className={styles.spacer}
        style={{
          backgroundImage: "url('/assets/img/about-us/about-us-4/about-us-4-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className={styles.scrollTextContainer}>
          <span className={`${styles.scrollText} ${styles.scrollTextDown}`}>
            scroll down to see
          </span>
        </div>
        <h1 className={styles.spacerTitle}>portOfolio</h1>
      </div>

      <div ref={gallery} className={styles.gallery}>
        <Column items={[portfolio[0], portfolio[1], portfolio[2]]} y={y} />
        <Column items={[portfolio[3], portfolio[4], portfolio[5]]} y={y2} />
        <Column items={[portfolio[6], portfolio[7], portfolio[8]]} y={y3} />
        <Column items={[portfolio[9], portfolio[10], portfolio[11]]} y={y4} />
      </div>

      {/* Cursor-following tooltip circle — portaled to body to escape transform contexts */}
      {portalReady && createPortal(
        <AnimatePresence>
          {hoveredName && (
            <motion.div
              className={styles.cursorCircle}
              style={{ x: circleX, y: circleY }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <span className={styles.cursorCircleText}>{hoveredName}</span>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

type PortfolioItem = { src: string; name: string };

type ColumnProps = {
  items: PortfolioItem[];
  y: MotionValue<number>;
};

const Column = ({ items, y }: ColumnProps) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {items.map((item, i) => (
        <div
          key={i}
          className={styles.imageContainer}
          data-portfolio-name={item.name}
        >
          <Image
            src={item.src}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 250px, (max-width: 1366px) 305px, (max-width: 1440px) 324px, 432px"
            className={styles.image}
          />
          <div className={styles.mobileLabel}>
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skiper30;
