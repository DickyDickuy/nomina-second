"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

/**
 * 3-layer transition colors from the NOMINA Brand Palette (Slide 2):
 * 1. Black (#000000) — rises first from bottom
 * 2. Dark Gray (#333333) — rises second from bottom
 * 3. Nomina Orange (#fb5102) — rises third from bottom and covers the screen
 */
const TRANSITION_COLORS = ["#000000", "#333333", "#fb5102"] as const;
const STORAGE_KEY = "nomina_pt_reveal";

type TransitionTriggerFn = (targetHref: string) => void;
let globalTriggerTransition: TransitionTriggerFn | null = null;

/**
 * Programmatically trigger the 3-color bottom-to-top transition before navigating.
 */
export function navigateWithTransition(targetHref: string) {
  if (typeof window === "undefined") return;
  if (globalTriggerTransition) {
    globalTriggerTransition(targetHref);
  } else {
    window.location.href = targetHref;
  }
}

export function PageTransition() {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const busyRef = useRef(false);
  const activeTlRef = useRef<gsap.core.Timeline | null>(null);
  const lastPathnameRef = useRef(pathname);

  const getValidLayers = useCallback(() => {
    return layerRefs.current.filter((el): el is HTMLDivElement => el !== null);
  }, []);

  const resetToHidden = useCallback(() => {
    activeTlRef.current?.kill();
    activeTlRef.current = null;
    document.documentElement.removeAttribute("data-pt-covered");
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors in private mode
    }
    const wrapper = wrapperRef.current;
    const layers = getValidLayers();
    if (layers.length) {
      gsap.set(layers, { yPercent: 100, force3D: true });
    }
    if (wrapper) {
      gsap.set(wrapper, { autoAlpha: 0, pointerEvents: "none" });
    }
    busyRef.current = false;
  }, [getValidLayers]);

  /**
   * Play the reverse animation (top layer Orange #fb5102 -> Dark Gray #333333 -> Black #000000)
   * sliding back down from yPercent: 0 to yPercent: 100 to reveal the rendered page.
   */
  const playReveal = useCallback(() => {
    activeTlRef.current?.kill();

    const wrapper = wrapperRef.current;
    const layers = getValidLayers();
    if (!wrapper || layers.length === 0) return;

    // Remove pre-paint attribute first so CSS !important doesn't block GSAP
    document.documentElement.removeAttribute("data-pt-covered");
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }

    gsap.set(wrapper, { autoAlpha: 1, pointerEvents: "none" });
    gsap.set(layers, { yPercent: 0, force3D: true });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(wrapper, { autoAlpha: 0, pointerEvents: "none" });
        busyRef.current = false;
        activeTlRef.current = null;
      },
    });

    // Reverse order: top layer (Orange) drops down first, then middle, then bottom
    const reversedLayers = [...layers].reverse();
    reversedLayers.forEach((layer, idx) => {
      tl.to(
        layer,
        {
          yPercent: 100,
          duration: 0.72,
          ease: "power3.inOut",
          force3D: true,
        },
        idx * 0.18
      );
    });

    activeTlRef.current = tl;
  }, [getValidLayers]);

  /**
   * Play a full sweep (bottom to top, then top to bottom) for browser Back/Forward or soft popstate.
   */
  const playSweepTransition = useCallback(() => {
    activeTlRef.current?.kill();
    busyRef.current = true;

    const wrapper = wrapperRef.current;
    const layers = getValidLayers();
    if (!wrapper || layers.length === 0) {
      busyRef.current = false;
      return;
    }

    document.documentElement.removeAttribute("data-pt-covered");
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }

    gsap.set(wrapper, { autoAlpha: 1, pointerEvents: "all" });
    gsap.set(layers, { yPercent: 100, force3D: true });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(wrapper, { autoAlpha: 0, pointerEvents: "none" });
        busyRef.current = false;
        activeTlRef.current = null;
      },
    });

    // Sweep up from bottom to top (generous stagger so Black, Dark Gray, and Orange are distinct)
    layers.forEach((layer, idx) => {
      tl.to(
        layer,
        {
          yPercent: 0,
          duration: 0.68,
          ease: "power3.out",
          force3D: true,
        },
        idx * 0.16
      );
    });

    // Brief 0.1s hold so the full Nomina Orange color is seen and appreciated
    tl.to({}, { duration: 0.1 });

    // Reverse down to reveal (Orange drops first -> Dark Gray -> Black)
    const reversedLayers = [...layers].reverse();
    reversedLayers.forEach((layer, idx) => {
      tl.to(
        layer,
        {
          yPercent: 100,
          duration: 0.68,
          ease: "power3.inOut",
          force3D: true,
        },
        idx === 0 ? ">" : ">-0.52"
      );
    });

    activeTlRef.current = tl;
  }, [getValidLayers]);

  /**
   * Wait until the new page is painted and ready behind the orange overlay, then reveal.
   */
  const scheduleRevealAfterRender = useCallback(() => {
    let revealed = false;
    const runReveal = () => {
      if (revealed) return;
      revealed = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          playReveal();
        });
      });
    };

    // Safety fallback so slow external assets never trap the user on the orange overlay
    const safetyTimer = window.setTimeout(runReveal, 700);

    if (document.readyState === "complete") {
      window.clearTimeout(safetyTimer);
      runReveal();
    } else {
      const onLoad = () => {
        window.clearTimeout(safetyTimer);
        window.removeEventListener("load", onLoad);
        runReveal();
      };
      window.addEventListener("load", onLoad, { once: true });
    }
  }, [playReveal]);

  // Main setup on mount
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const layers = getValidLayers();
    if (!wrapper || layers.length === 0) return;

    // Check if we arrived on this page from a link navigation or back_forward reload
    let shouldReveal = document.documentElement.hasAttribute("data-pt-covered");
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        shouldReveal = true;
      }
      const nav = window.performance?.getEntriesByType?.("navigation")?.[0] as PerformanceNavigationTiming | undefined;
      if (nav && nav.type === "back_forward") {
        shouldReveal = true;
      }
    } catch {
      // Ignore storage errors
    }

    if (shouldReveal) {
      busyRef.current = true;
      gsap.set(wrapper, { autoAlpha: 1, pointerEvents: "all" });
      gsap.set(layers, { yPercent: 0, force3D: true });
      scheduleRevealAfterRender();
    } else {
      resetToHidden();
    }

    /**
     * Play the cover animation (bottom to top: Black -> Dark Gray -> Orange #fb5102),
     * then navigate to targetHref.
     */
    const triggerCoverAndNavigate: TransitionTriggerFn = (targetHref: string) => {
      if (busyRef.current) return;

      let resolvedUrl: URL;
      try {
        resolvedUrl = new URL(targetHref, window.location.origin);
      } catch {
        window.location.href = targetHref;
        return;
      }

      const isSamePage =
        resolvedUrl.pathname === window.location.pathname &&
        resolvedUrl.search === window.location.search;

      if (isSamePage) {
        if (resolvedUrl.hash) {
          const targetEl = document.querySelector(resolvedUrl.hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          } else {
            window.location.hash = resolvedUrl.hash;
          }
        }
        return;
      }

      busyRef.current = true;
      activeTlRef.current?.kill();

      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Ignore storage errors
      }

      gsap.set(wrapper, { autoAlpha: 1, pointerEvents: "all" });
      gsap.set(layers, { yPercent: 100, force3D: true });

      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.setAttribute("data-pt-covered", "true");
          window.location.href = resolvedUrl.pathname + resolvedUrl.search + resolvedUrl.hash;
        },
      });

      // Sweep up with generous 0.18s stagger so Black, Dark Gray, and Nomina Orange are each distinctly visible
      layers.forEach((layer, idx) => {
        tl.to(
          layer,
          {
            yPercent: 0,
            duration: 0.72,
            ease: "power3.out",
            force3D: true,
          },
          idx * 0.18
        );
      });

      // Hold for 0.08s so the full Nomina Orange layer is cleanly registered before navigating
      tl.to({}, { duration: 0.08 });

      activeTlRef.current = tl;
    };

    globalTriggerTransition = triggerCoverAndNavigate;

    // Intercept internal <a> clicks globally in capture phase
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target as Element | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.getAttribute("data-no-transition") === "true"
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(rawHref, window.location.origin);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      const isSamePage =
        url.pathname === window.location.pathname &&
        url.search === window.location.search;

      if (isSamePage) return;

      e.preventDefault();
      e.stopPropagation();
      triggerCoverAndNavigate(url.pathname + url.search + url.hash);
    };

    // Handle Browser Back / Forward button navigation (popstate)
    const handlePopState = () => {
      playSweepTransition();
    };

    // Handle iOS Safari / Android bfcache restore on swipe-back
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        playSweepTransition();
      }
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pageshow", handlePageShow);
      if (globalTriggerTransition === triggerCoverAndNavigate) {
        globalTriggerTransition = null;
      }
    };
  }, [getValidLayers, playSweepTransition, resetToHidden, scheduleRevealAfterRender]);

  // Handle route changes when navigating via Next.js router.push or history
  useEffect(() => {
    if (lastPathnameRef.current !== pathname) {
      const prev = lastPathnameRef.current;
      lastPathnameRef.current = pathname;

      if (prev && !busyRef.current) {
        // Soft route change not triggered by our link click handler (e.g. Next.js history pop)
        playSweepTransition();
      }
    }
  }, [pathname, playSweepTransition]);

  return (
    <div
      ref={wrapperRef}
      className="nomina-pt-wrapper"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100dvh",
        zIndex: 1000000,
        pointerEvents: "none",
        visibility: "hidden",
        overflow: "hidden",
      }}
    >
      {TRANSITION_COLORS.map((color, idx) => (
        <div
          key={color}
          ref={(el) => {
            layerRefs.current[idx] = el;
          }}
          className="nomina-pt-layer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: color,
            transform: "translate3d(0, 100%, 0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
      ))}
    </div>
  );
}
