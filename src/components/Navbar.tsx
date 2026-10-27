"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NominaLogo } from "@/components/icons";
import { cn } from "@/lib/utils";
import StaggeredMenu from "./shared/StaggeredMenu/StaggeredMenu";
import { navigateWithTransition } from "./shared/PageTransition/PageTransition";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "ARCHIVE", href: "#special-20" },
  { label: "SERVICES", href: "#services" },
  { label: "CLIENTS", href: "#clients" },
  { label: "CAREERS", href: "/career" },
  { label: "CONTACT", href: "/contact" },
  { label: "PORTOFOLIO", href: "/portfolio" },
];

export function Navbar() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const [scrolled, setScrolled] = useState(!isLandingPage);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement | null>(null);

  const staggeredMenuItems = NAV_LINKS.map(link => {
    const isHashLink = link.href.startsWith('#');
    const targetHref = isHashLink && !isLandingPage ? `/${link.href}` : link.href;
    return {
      label: link.label,
      ariaLabel: link.label,
      link: targetHref
    };
  });

  useEffect(() => {
    function handleScroll() {
      if (isLandingPage) {
        // Hero sits right above the navbar and its height adapts to the video on mobile,
        // so switch once the hero has (almost) scrolled out of view.
        const hero = navRef.current?.previousElementSibling as HTMLElement | null;
        if (hero) {
          setScrolled(hero.getBoundingClientRect().bottom <= 29);
        } else {
          setScrolled(window.scrollY >= window.innerHeight - 58);
        }
      }

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isLandingPage]);

  return (
    <>
      <nav
        ref={navRef}
        style={{ zIndex: 999999 }}
        className={cn(
          "nav-bar w-full h-[58px] flex items-center bg-white",
          isLandingPage ? "sticky top-0" : "fixed top-0 left-0",
          scrolled ? "shadow-md" : ""
        )}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-nomina-red transition-all duration-150 ease-out z-10"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="w-full h-full flex items-center justify-between px-4 md:px-8 relative z-20">
          {/* Logo — visible when scrolled */}
          <div
            className={cn(
              "transition-opacity duration-300 shrink-0 z-20",
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <Link
              href="/"
              onClick={(e) => {
                if (isLandingPage) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  e.preventDefault();
                  navigateWithTransition('/');
                }
              }}
              className="h-9 flex items-center"
            >
              <NominaLogo className="h-full w-auto hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          {/* Desktop links — centered perfectly in navbar */}
          <div className="hidden md:flex items-center gap-0 absolute left-1/2 -translate-x-1/2 h-full z-10">
            {NAV_LINKS.map((link) => {
              const isHashLink = link.href.startsWith('#');
              const targetHref = isHashLink && !isLandingPage ? `/${link.href}` : link.href;

              return (
                <a
                  key={link.label}
                  href={targetHref}
                  onClick={(e) => {
                    if (isLandingPage && isHashLink) {
                      // Anchor navigation on the landing page: smooth-scroll only, NO transition!
                      e.preventDefault();
                      const targetEl = document.querySelector(link.href);
                      if (targetEl) {
                        targetEl.scrollIntoView({ behavior: "smooth" });
                      }
                    } else if (isHashLink && !isLandingPage) {
                      // Navigating from subpage to landing section: different page, run transition
                      e.preventDefault();
                      navigateWithTransition(targetHref);
                    } else if (!isHashLink) {
                      // Navigating to subpage (/career, /contact, etc.)
                      if (pathname === targetHref) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        e.preventDefault();
                        navigateWithTransition(targetHref);
                      }
                    }
                  }}
                  className="nav-bar-link h-full px-4 lg:px-6 flex items-center text-[11px] lg:text-[13px] font-bold uppercase tracking-wider text-nomina-black hover:bg-nomina-red hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center h-full -mr-2 z-20">
            <StaggeredMenu
              isFixed={true}
              position="right"
              colors={["#000000", "#333333", "#fb5102"]}
              items={staggeredMenuItems}
              displaySocials={false}
              menuButtonColor="#111111"
              openMenuButtonColor="#111111"
              logoUrl="/assets/img/logo/logo-white.png"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
