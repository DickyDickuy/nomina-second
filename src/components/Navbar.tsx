"use client";

import { useEffect, useState } from "react";
import { NominaLogo } from "@/components/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MenuIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SPECIAL 20", href: "#special-20" },
  { label: "SERVICES", href: "#services" },
  { label: "CLIENTS", href: "#clients" },
  { label: "CAREERS", href: "#" },
  { label: "CONTACT", href: "#" },
  { label: "NOMINA STARTER", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      // Transition when scrolled past the hero section (viewport height minus navbar height)
      setScrolled(window.scrollY >= window.innerHeight - 58);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "nav-bar sticky top-0 z-50 w-full h-[58px] flex items-center bg-white",
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
            <NominaLogo className="text-nomina-red scale-[0.55] origin-left" />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0 flex-1 justify-center h-full">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="h-full px-4 lg:px-6 flex items-center text-[11px] lg:text-[13px] font-bold uppercase tracking-wider text-nomina-black hover:bg-nomina-red transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop language switcher */}
          <div className="hidden md:block shrink-0">
            <LanguageSwitcher variant="light" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-nomina-red"
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <NominaLogo className="text-nomina-red scale-[0.6] origin-left" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-nomina-black"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col flex-1 py-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 text-lg font-bold uppercase tracking-wider text-nomina-black hover:bg-nomina-red hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="px-8 pb-8">
            <LanguageSwitcher variant="light" />
          </div>
        </div>
      )}
    </>
  );
}
