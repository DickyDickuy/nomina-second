"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type CSSProperties,
  type TouchEvent,
} from "react";
import Image from "next/image";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface TeamMobileCoverflowProps {
  members: TeamMember[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tilt?: number;
  sideTilt?: number;
  gap?: number;
  opacity?: number;
  autoplay?: boolean;
}

// 3D Perspective Internals
const PERSPECTIVE = 1000;
const SCALE_STEP = 0.12;
const MAX_VISIBLE = 2;
const DEPTH = 140;

export default function TeamMobileCoverflow({
  members,
  cardWidth = 280,
  cardHeight = 175,
  radius = 10,
  tilt = 9,
  sideTilt = 4,
  gap = 6.5,
  opacity = 55,
  autoplay = false,
}: TeamMobileCoverflowProps) {
  const n = members.length;
  const [active, setActive] = useState(0);
  const lockRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Keep active index in range if members list changes
  useEffect(() => {
    setActive((a) => Math.max(0, Math.min(n - 1, a)));
  }, [n]);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, 550);
  }, []);

  const step = useCallback(
    (dir: number) => {
      if (lockRef.current || n <= 1) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock],
  );

  const handleCardClick = useCallback(
    (i: number) => {
      if (autoplay || lockRef.current) return;
      lock();
      setActive((a) => (i === a ? (a + 1) % n : i));
    },
    [autoplay, n, lock],
  );

  // Touch Swipe Handlers
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // minimum swipe distance in px

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left -> next
        step(1);
      } else {
        // Swiped right -> prev
        step(-1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [step],
  );

  // Autoplay
  useEffect(() => {
    if (!autoplay || n < 2) return;
    const id = window.setInterval(() => step(1), 3500);
    return () => window.clearInterval(id);
  }, [autoplay, n, step]);

  const transitionCss =
    "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1)";
  const dim = 1 - Math.max(0, Math.min(100, opacity)) / 100;

  return (
    <div
      className="team-mobile-coverflow-root"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Team Members 3D Gallery"
      onKeyDown={onKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "relative",
        width: "100%",
        height: cardHeight + 120,
        paddingTop: "28px",
        paddingBottom: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        perspective: `${PERSPECTIVE}px`,
        overflow: "hidden",
        outline: "none",
        userSelect: "none",
      }}
    >
      {/* 3D Carousel Stage */}
      <div
        style={{
          position: "relative",
          width: cardWidth,
          height: cardHeight,
          transformStyle: "preserve-3d",
        }}
      >
        {members.map((member, i) => {
          let rel = i - active;
          if (rel > n / 2) rel -= n;
          if (rel < -n / 2) rel += n;

          const ax = Math.abs(rel);
          const visible = ax <= MAX_VISIBLE;
          const isActive = rel === 0;
          const sc = Math.max(0.65, 1 - ax * SCALE_STEP);
          const tx = rel * (gap * 24);
          const tz = -ax * DEPTH;
          const ry = -rel * tilt;
          const rz = rel * sideTilt;

          const cardStyle: CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: cardWidth,
            height: cardHeight,
            borderRadius: radius,
            overflow: "hidden",
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
            transition: transitionCss,
            opacity: visible ? 1 : 0,
            cursor: isActive ? "default" : "pointer",
            pointerEvents: visible ? "auto" : "none",
            backgroundColor: "#161616",
            boxShadow: isActive
              ? "0 20px 40px rgba(0,0,0,0.35), 0 8px 16px rgba(0,0,0,0.2)"
              : "0 10px 25px rgba(0,0,0,0.2)",
            border: isActive
              ? "1px solid rgba(255, 50, 3, 0.4)"
              : "1px solid rgba(255, 255, 255, 0.1)",
          };

          return (
            <div
              key={member.id}
              style={cardStyle}
              onClick={() => handleCardClick(i)}
              aria-label={`${member.name} - ${member.role}`}
              aria-hidden={!visible}
            >
              {/* Member Photo */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 280px, 320px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                priority={i === 0 || i === 1}
                draggable={false}
              />

              {/* Gradient Scrim Overlay for maximum text legibility */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Index Badge (Top Right) */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 12,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "8px",
                  padding: "3px 8px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    fontFamily: "var(--tp-ff-body, sans-serif)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Card Bottom Info: Name & Role */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "10px 14px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  pointerEvents: "none",
                }}
              >
                {/* Role / Jabatan */}
                <span
                  style={{
                    color: "var(--tp-common-red-3, #ff3203)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  {member.role}
                </span>

                {/* Name */}
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.15",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    margin: 0,
                    fontFamily:
                      "var(--tp-ff-clash-semibold, 'Clash Display', sans-serif)",
                    textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                  }}
                >
                  {member.name}
                </h3>
              </div>

              {/* Dimming overlay on non-active cards */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "#000000",
                  opacity: isActive ? 0 : dim,
                  transition:
                    "opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                  pointerEvents: "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Interactive Pagination / Indicator Dots & Arrows */}
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 10,
        }}
      >
        {/* Prev button */}
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous member"
          style={{
            background: "none",
            border: "1px solid rgba(17, 17, 17, 0.2)",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--tp-common-black, #111111)",
            transition: "all 0.2s ease",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Indicators */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {members.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                lock();
                setActive(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: active === i ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                backgroundColor:
                  active === i
                    ? "var(--tp-common-red-3, #ff3203)"
                    : "rgba(17, 17, 17, 0.2)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next member"
          style={{
            background: "none",
            border: "1px solid rgba(17, 17, 17, 0.2)",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--tp-common-black, #111111)",
            transition: "all 0.2s ease",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Swipe Hint */}
      <span
        style={{
          marginTop: "8px",
          fontSize: "11px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "rgba(17, 17, 17, 0.45)",
          fontFamily: "var(--tp-ff-body, sans-serif)",
        }}
      >
        Swipe or tap to explore
      </span>
    </div>
  );
}
