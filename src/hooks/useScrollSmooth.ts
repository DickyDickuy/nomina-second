"use client";

import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function useScrollSmooth() {
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      gsap.config({ nullTargetWarn: false });

      // Kill any stale smoother instance before creating a new one
      ScrollSmoother.get()?.kill();
      window.scrollTo(0, 0);

      const smoothWrapper = document.getElementById("smooth-wrapper");
      const smoothContent = document.getElementById("smooth-content");

      if (!smoothWrapper || !smoothContent) return;

      const isDesktop = window.innerWidth >= 768;
      let smoother: ScrollSmoother | null = null;

      if (isDesktop) {
        smoother = ScrollSmoother.create({
          wrapper: smoothWrapper,
          content: smoothContent,
          smooth: 1.2,
          effects: true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      }

      const shapeElement = document.querySelector(".shape");
      let shapeTrigger: ScrollTrigger | null = null;
      if (shapeElement) {
        shapeTrigger = ScrollTrigger.create({
          trigger: shapeElement,
          pin: true,
          start: "center center",
          end: "+=300",
          markers: false,
        });
      }

      let resizeRafId: number | null = null;
      const handleResize = () => {
        if (resizeRafId) return;
        resizeRafId = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          resizeRafId = null;
        });
      };

      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(smoothContent);

      window.addEventListener("resize", handleResize);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", handleResize);
        if (resizeRafId) cancelAnimationFrame(resizeRafId);
        shapeTrigger?.kill();
        smoother?.kill();
        document.body.style.removeProperty("height");
        document.body.style.removeProperty("overflow");
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );
}
