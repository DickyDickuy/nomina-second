"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import styles from "./TeamSection.module.scss";
import TeamMobileCoverflow, { TeamMember } from "./TeamMobileCoverflow";

/* ─── Team Data ─── */
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Randy Yudesyaf",
    role: "Chief Executive Officer",
    image: "/assets/img/home-06/team/randy.png",
  },
  {
    id: 2,
    name: "Risa Fatima",
    role: "Chief Operating Officer",
    image: "/assets/img/home-06/team/risa.png",
  },
  {
    id: 3,
    name: "Hana Benedicta",
    role: "VP Operation",
    image: "/assets/img/home-06/team/hana.png",
  },
  {
    id: 4,
    name: "Agung Nugraha",
    role: "VP Project",
    image: "/assets/img/home-06/team/agung.png",
  },
  {
    id: 5,
    name: "Rizal Zulvianur",
    role: "Sr. Graphic Designer",
    image: "/assets/img/home-06/team/rizal.png",
  },
  {
    id: 6,
    name: "Bima Nazuardi",
    role: "Sr. Motion Designer",
    image: "/assets/img/home-06/team/bima.png",
  },
  {
    id: 7,
    name: "Riga Singawinata",
    role: "Jr. Production Manager",
    image: "/assets/img/home-06/team/riga.png",
  },
];

/* ─── Helpers ─── */
const padIndex = (n: number) => String(n).padStart(2, "0");

/**
 * Split team members into pairs (2 per row) for the desktop grid layout.
 * Each pair occupies one grid row with left + right cells.
 */
const pairedMembers = (() => {
  const pairs: [TeamMember, TeamMember | undefined][] = [];
  for (let i = 0; i < teamMembers.length; i += 2) {
    pairs.push([teamMembers[i], teamMembers[i + 1]]);
  }
  return pairs;
})();

/* ═══════════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════════ */
const TeamSection = () => {
  /* ─── Refs ─── */
  const sectionRef = useRef<HTMLElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const floatingImgRef = useRef<HTMLImageElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const quickToX = useRef<gsap.QuickToFunc | null>(null);
  const quickToY = useRef<gsap.QuickToFunc | null>(null);
  const isHoveringRef = useRef(false);
  const isVisibleRef = useRef(false); // tracks if image is scaled up
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ─── State ─── */
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [portalReady, setPortalReady] = useState(false);

  /* ─── Detect reduced motion + breakpoint + portal mount ─── */
  useEffect(() => {
    // Enable portal rendering (client only)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalReady(true);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    const breakpointQuery = window.matchMedia("(min-width: 769px)");
    setIsDesktop(breakpointQuery.matches);

    const handleBreakpoint = (e: MediaQueryListEvent) =>
      setIsDesktop(e.matches);
    breakpointQuery.addEventListener("change", handleBreakpoint);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      breakpointQuery.removeEventListener("change", handleBreakpoint);
    };
  }, []);

  /* ─── Set up gsap.quickTo for smooth cursor-following (Desktop only) ─── */
  useEffect(() => {
    const floatingEl = floatingRef.current;
    if (!floatingEl) return;

    // quickTo creates a reusable tween that smoothly interpolates to new values
    quickToX.current = gsap.quickTo(floatingEl, "x", {
      duration: 0.35,
      ease: "power2.out",
    });
    quickToY.current = gsap.quickTo(floatingEl, "y", {
      duration: 0.35,
      ease: "power2.out",
    });

    // Offset the image so it doesn't sit right under the cursor
    const IMG_H = 250;
    const OFFSET_X = 20; // pixels to the right of cursor
    const OFFSET_Y = -IMG_H / 2; // vertically centered on cursor

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoveringRef.current) return;
      quickToX.current?.(e.clientX + OFFSET_X);
      quickToY.current?.(e.clientY + OFFSET_Y);
    };

    // Set initial state: hidden via scale 0
    gsap.set(floatingEl, { scale: 0, opacity: 1 });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [portalReady]);

  /* ─────────────────────────────────────────────
     Desktop: Floating Image Hover
     ───────────────────────────────────────────── */
  const showFloatingImage = useCallback(
    (member: TeamMember, e?: React.MouseEvent) => {
      if (!isDesktop) return;

      // Cancel any pending hide — user moved to another cell
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
        leaveTimerRef.current = null;
      }

      const floatingEl = floatingRef.current;
      const imgEl = floatingImgRef.current;
      if (!floatingEl || !imgEl) return;

      // Swap image source (always, even if already visible)
      imgEl.src = member.image;
      imgEl.alt = member.name;

      isHoveringRef.current = true;

      // If already visible, just swap image — no scale animation
      if (isVisibleRef.current) return;

      // ── First entry: scale up from 0 ──
      isVisibleRef.current = true;

      // Kill only the scale tween (NOT quickTo internals)
      tweenRef.current?.kill();
      tweenRef.current = null;

      // Place at cursor position, scaled to 0
      const startX = e ? e.clientX + 20 : 0;
      const startY = e ? e.clientY - 200 : 0;
      gsap.set(floatingEl, { x: startX, y: startY, scale: 0 });

      // Re-create quickTo so they have fresh internal state
      quickToX.current = gsap.quickTo(floatingEl, "x", {
        duration: 0.35,
        ease: "power2.out",
      });
      quickToY.current = gsap.quickTo(floatingEl, "y", {
        duration: 0.35,
        ease: "power2.out",
      });

      // Animate scale only
      if (prefersReducedMotion) {
        gsap.set(floatingEl, { scale: 1 });
      } else {
        tweenRef.current = gsap.to(floatingEl, {
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)",
        });
      }
    },
    [isDesktop, prefersReducedMotion],
  );

  const hideFloatingImage = useCallback(() => {
    // Debounce: wait a tick to see if cursor enters another cell
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);

    leaveTimerRef.current = setTimeout(() => {
      const floatingEl = floatingRef.current;
      if (!floatingEl) return;

      isHoveringRef.current = false;
      isVisibleRef.current = false;

      // Kill only the scale tween
      tweenRef.current?.kill();

      if (prefersReducedMotion) {
        gsap.set(floatingEl, { scale: 0 });
      } else {
        tweenRef.current = gsap.to(floatingEl, {
          scale: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }, 50); // 50ms debounce to bridge cell gaps
  }, [prefersReducedMotion]);

  /* ─── Cleanup GSAP on unmount ─── */
  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  /* ─────────────────────────────────────────────
     Render helpers (Desktop)
     ───────────────────────────────────────────── */
  const renderCell = (
    member: TeamMember,
    globalIdx: number,
    isRight?: boolean,
  ) => (
    <div
      className={`${styles.cell} ${isRight ? styles.cellRight : ""}`}
      onMouseEnter={(e) => showFloatingImage(member, e)}
      onMouseLeave={hideFloatingImage}
      tabIndex={0}
    >
      <span className={styles.index}>{padIndex(globalIdx)}</span>
      <div className={styles.info}>
        <h3 className={styles.name}>{member.name}</h3>
        <span className={styles.role}>{member.role}</span>
      </div>
    </div>
  );

  /* ─── Floating image overlay (Desktop only) ─── */
  const floatingOverlay =
    portalReady && isDesktop
      ? createPortal(
          <div className={styles.floatingImage} ref={floatingRef}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={floatingImgRef}
              className={styles.floatingImg}
              src={teamMembers[0].image}
              alt=""
              aria-hidden="true"
            />
          </div>,
          document.body,
        )
      : null;

  /* ─────────────────────────────────────────────
     Render
     ───────────────────────────────────────────── */
  return (
    <>
      <section
        ref={sectionRef}
        className={`${styles.section} team-section-area`}
        aria-label="Our Team"
      >
        {/* Section Header */}
        <div className={styles.header}>
          <span className={`${styles.eyebrow} tp_reveal_anim`}>The Team</span>
          <h2
            className={`${styles.heading} tp_reveal_anim`}
            data-delay=".3"
          >
            People behind
            <br />
            every project
          </h2>
        </div>

        {/* Desktop View: Interactive Grid with Floating Hover Preview */}
        <div className={styles.desktopOnly}>
          <div className={styles.grid}>
            {pairedMembers.map(([left, right], rowIdx) => (
              <div className={styles.item} key={`row-${rowIdx}`}>
                {renderCell(left, rowIdx * 2 + 1)}
                {right && renderCell(right, rowIdx * 2 + 2, true)}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Smooth 3D Coverflow Slideshow with Name & Role */}
        <div className={styles.mobileOnly}>
          <TeamMobileCoverflow members={teamMembers} />
        </div>
      </section>

      {/* Floating Image Overlay — portaled outside #smooth-content */}
      {floatingOverlay}
    </>
  );
};

export default TeamSection;

