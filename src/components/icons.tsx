import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

/** NOMINA wordmark logo — "nomina." with "20 YEARS OF PEOPLE." tagline */
export function NominaLogo({ className }: IconProps) {
  return (
    <div className={cn("flex flex-col items-start leading-none", className)}>
      <div className="relative">
        <span className="font-heading text-[2.8rem] leading-[0.85] tracking-tight text-nomina-red opacity-40 absolute -top-1 -left-1">
          20
        </span>
        <span className="font-heading text-[2.8rem] leading-[0.85] tracking-tight relative z-10">
          nomina.
        </span>
      </div>
      <span className="text-[0.5rem] font-bold uppercase tracking-[0.15em] mt-0.5">
        20 YEARS OF PEOPLE.
      </span>
    </div>
  );
}

/** NOMINA logo for dark backgrounds */
export function NominaLogoDark({ className }: IconProps) {
  return (
    <div className={cn("flex flex-col items-start leading-none text-white", className)}>
      <div className="relative">
        <span className="font-heading text-[2.8rem] leading-[0.85] tracking-tight text-nomina-red opacity-40 absolute -top-1 -left-1">
          20
        </span>
        <span className="font-heading text-[2.8rem] leading-[0.85] tracking-tight relative z-10">
          nomina.
        </span>
      </div>
      <span className="text-[0.5rem] font-bold uppercase tracking-[0.15em] mt-0.5">
        20 YEARS OF PEOPLE.
      </span>
    </div>
  );
}

/** Arrow right icon used in CTA buttons */
export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("arrow-icon", className)}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/** Weather/sun icon */
export function WeatherIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("", className)}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

/** Clock icon */
export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("", className)}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/** Instagram icon */
export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/** LinkedIn icon */
export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/** Facebook icon */
export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("", className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/** Hamburger menu icon (mobile) */
export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("", className)}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <rect x="3" y="4" width="7" height="7" rx="1" />
      <rect x="14" y="4" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
