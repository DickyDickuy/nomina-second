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
            ? "bg-pil-red text-pil-black border border-pil-red"
            : "bg-pil-red text-pil-black border border-pil-red"
        )}
      >
        EN
      </button>
      {/* ID — Inactive */}
      <button
        className={cn(
          "h-8 w-8 flex items-center justify-center text-xs font-bold uppercase rounded-sm transition-colors duration-200",
          variant === "light"
            ? "border border-pil-red text-pil-black hover:bg-pil-red hover:text-pil-black"
            : "border border-pil-red text-white hover:bg-pil-red hover:text-pil-black"
        )}
      >
        ID
      </button>
    </div>
  );
}
