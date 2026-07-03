import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  label: string;
  href?: string;
  className?: string;
  variant?: "light" | "dark";
}

export function ArrowButton({
  label,
  href = "#",
  className,
  variant = "light",
}: ArrowButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "arrow-btn inline-flex items-center gap-4 group transition-opacity hover:opacity-80",
        className
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-none",
          variant === "light" ? "bg-nomina-red text-white" : "bg-nomina-red text-white"
        )}
      >
        <ArrowRightIcon className="w-5 h-5" />
      </span>
      <span
        className={cn(
          "text-sm font-bold uppercase tracking-wider",
          variant === "dark" ? "text-white" : "text-nomina-black"
        )}
      >
        {label}
      </span>
    </a>
  );
}
