"use client";
import { animationConfig } from "@/config/animationConfig";
import { charAnimation, fadeAnimation } from "@/hooks/useGsapAnimation";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import React from "react";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useGSAP(() => {
    let timer: NodeJS.Timeout;

    const runAnimations = () => {
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
    };

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        timer = setTimeout(runAnimations, 50);
      });
    } else {
      timer = setTimeout(runAnimations, 100);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [pathname]);

  return <>{children}</>;
};

export default AnimationWrapper;


