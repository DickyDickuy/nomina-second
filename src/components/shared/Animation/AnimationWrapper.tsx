"use client";

import { animationConfig } from "@/config/animationConfig";
import { charAnimation, fadeAnimation } from "@/hooks/useGsapAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import React from "react";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useGSAP(
    (_context, contextSafe) => {
      let timer: ReturnType<typeof setTimeout> | null = null;
      let cancelled = false;

      const runAnimations = contextSafe
        ? contextSafe(() => {
            if (cancelled) return;
            // Global animations (always run)
            fadeAnimation();
            charAnimation();

            // Page-specific animations
            if (pathname) {
              const pageAnimations = animationConfig[pathname];
              if (pageAnimations && Array.isArray(pageAnimations)) {
                pageAnimations.forEach((fn: () => void) => fn());
              }
            }

            ScrollTrigger.refresh();
          })
        : () => {
            if (cancelled) return;
            fadeAnimation();
            charAnimation();
            if (pathname) {
              const pageAnimations = animationConfig[pathname];
              if (pageAnimations && Array.isArray(pageAnimations)) {
                pageAnimations.forEach((fn: () => void) => fn());
              }
            }
            ScrollTrigger.refresh();
          };

      if (typeof document !== "undefined" && document.fonts) {
        document.fonts.ready.then(() => {
          if (!cancelled) {
            timer = setTimeout(runAnimations, 50);
          }
        });
      } else {
        timer = setTimeout(runAnimations, 100);
      }

      return () => {
        cancelled = true;
        if (timer) clearTimeout(timer);
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return <>{children}</>;
};

export default AnimationWrapper;
