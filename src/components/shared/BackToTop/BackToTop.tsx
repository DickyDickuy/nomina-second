'use client';
import { BacktoTopArrow } from "@/svg/ArrowIcons";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`back-to-top-wrapper ${isVisible ? 'back-to-top-btn-show' : ''}`}
      onClick={scrollToTop}
    >
      <button id="back_to_top" type="button" className="back-to-top-btn">
        <BacktoTopArrow />
      </button>
    </div>
  );
}