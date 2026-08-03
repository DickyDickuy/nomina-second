"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NominaLogo } from "@/components/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";
import StaggeredMenu from "./shared/StaggeredMenu/StaggeredMenu";

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
        // Transition when scrolled past the hero section (viewport height minus navbar height)
        setScrolled(window.scrollY >= window.innerHeight - 58);
      }

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage]);

  return (
    <>
      <nav
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
              "transition-opacity duration-300 shrink-0",
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>
              <NominaLogo className="text-nomina-red scale-[0.55] origin-left hover:opacity-80 transition-opacity" />
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0 flex-1 justify-center h-full">
            {NAV_LINKS.map((link) => {
              const isHashLink = link.href.startsWith('#');
              const targetHref = isHashLink && !isLandingPage ? `/${link.href}` : link.href;

              return (
                <a
                  key={link.label}
                  href={targetHref}
                  onClick={(e) => {
                    if (isHashLink && !isLandingPage) {
                      e.preventDefault();
                      window.location.href = targetHref;
                    } else if (!isHashLink) {
                      e.preventDefault();
                      window.location.href = targetHref;
                    }
                  }}
                  className="nav-bar-link h-full px-4 lg:px-6 flex items-center text-[11px] lg:text-[13px] font-bold uppercase tracking-wider text-nomina-black hover:bg-nomina-red hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop language switcher */}
          <div className="hidden md:block shrink-0">
            <LanguageSwitcher variant="light" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center h-full -mr-2">
            <StaggeredMenu
              isFixed={true}
              position="right"
              colors={["#ff3800", "#ff9100ff", "#ffffff"]}
              items={staggeredMenuItems}
              displaySocials={false}
              menuButtonColor="#111111"
              openMenuButtonColor="#ffffff"
              logoUrl="/assets/img/logo/logo-white.png"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
