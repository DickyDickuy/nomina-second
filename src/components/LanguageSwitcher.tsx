"use client";

import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "light" | "dark";
}

export function LanguageSwitcher({ className, variant = "light" }: LanguageSwitcherProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {/* EN — Active (highlighted) since landing is in English */}
      <button
        className={cn(
          "h-8 w-8 flex items-center justify-center text-xs font-bold uppercase rounded-sm transition-colors duration-200",
          variant === "light"
            ? "bg-nomina-red text-nomina-black border border-nomina-red"
            : "bg-nomina-red text-nomina-black border border-nomina-red"
        )}
      >
        EN
      </button>
      {/* ID — Inactive */}
      <button
        className={cn(
          "h-8 w-8 flex items-center justify-center text-xs font-bold uppercase rounded-sm transition-colors duration-200",
          variant === "light"
            ? "border border-nomina-red text-nomina-black hover:bg-nomina-red hover:text-nomina-black"
            : "border border-nomina-red text-white hover:bg-nomina-red hover:text-nomina-black"
        )}
      >
        ID
      </button>
    </div>
  );
}
