"use client";

import { ArrowButton } from "@/components/ArrowButton";
import { cn } from "@/lib/utils";

export interface ClientLogo {
  name: string;
  src: string;
  /** Official client URL. Opens in a new tab when clicked. */
  href?: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "AXA Indonesia",
    src: "/images/clients/axa.png",
    href: "https://www.axa.co.id",
  },
  {
    name: "Bank Indonesia",
    src: "/images/clients/bank-indonesia.png",
    href: "https://www.bi.go.id",
  },
  {
    name: "Bank Mandiri",
    src: "/images/clients/bank-mandiri.png",
    href: "https://www.bankmandiri.co.id",
  },
  {
    name: "Bluebird Group",
    src: "/images/clients/bluebird.png",
    href: "https://www.bluebirdgroup.com",
  },
  {
    name: "Chemours",
    src: "/images/clients/chemours.png",
    href: "https://www.chemours.com",
  },
  {
    name: "DKNY",
    src: "/images/clients/dkny.png",
    href: "https://www.dkny.com",
  },
  {
    name: "Djarum Super",
    src: "/images/clients/djarum-super.png",
    href: "https://www.djarumsuper.com",
  },
  {
    name: "ESMOD Jakarta",
    src: "/images/clients/esmod-jakarta.png",
    href: "https://www.esmodjakarta.com",
  },
  {
    name: "Erigo",
    src: "/images/clients/erigo.png",
    href: "https://erigostore.co.id",
  },
  {
    name: "Flip",
    src: "/images/clients/flip.png",
    href: "https://flip.id",
  },
  {
    name: "GAIKINDO",
    src: "/images/clients/gaikindo.png",
    href: "https://www.gaikindo.or.id",
  },
  {
    name: "Godrej Indonesia",
    src: "/images/clients/godrej.png",
    href: "https://www.godrejindonesia.com",
  },
  {
    name: "Grab",
    src: "/images/clients/grab.png",
    href: "https://www.grab.com/id/",
  },
  {
    name: "Grand Indonesia",
    src: "/images/clients/grand-indonesia.png",
    href: "https://www.grand-indonesia.com",
  },
  {
    name: "HSBC Indonesia",
    src: "/images/clients/hsbc.png",
    href: "https://www.hsbc.co.id",
  },
  {
    name: "Hitachi",
    src: "/images/clients/hitachi.png",
    href: "https://www.hitachi.com",
  },
  {
    name: "JD.ID",
    src: "/images/clients/jdid.png",
    href: "https://www.instagram.com/jdid/",
  },
  {
    name: "Kinder Joy",
    src: "/images/clients/kinder-joy.png",
    href: "https://www.kinder.com/id/id/",
  },
  {
    name: "LUX",
    src: "/images/clients/lux.png",
    href: "https://www.lux.com",
  },
  {
    name: "MotoGP",
    src: "/images/clients/motogp.png",
    href: "https://www.motogp.com",
  },
  {
    name: "Nanovest",
    src: "/images/clients/nanovest.png",
    href: "https://www.nanovest.io",
  },
  {
    name: "NOICE",
    src: "/images/clients/noice.png",
    href: "https://www.noice.id",
  },
  {
    name: "OCBC Indonesia",
    src: "/images/clients/ocbc.png",
    href: "https://www.ocbc.id",
  },
  {
    name: "Opteon",
    src: "/images/clients/opteon.png",
    href: "https://www.opteon.com",
  },
  {
    name: "Pegadaian",
    src: "/images/clients/pegadaian.png",
    href: "https://www.pegadaian.co.id",
  },
  {
    name: "PNM",
    src: "/images/clients/pnm.png",
    href: "https://www.pnm.co.id",
  },
  {
    name: "Soyjoy Indonesia",
    src: "/images/clients/soyjoy.png",
    href: "https://www.soyjoy.id",
  },
  {
    name: "Traveloka",
    src: "/images/clients/traveloka.png",
    href: "https://www.traveloka.com",
  },
  {
    name: "Yoshimoto",
    src: "/images/clients/yoshimoto.png",
    href: "https://yoshimoto-international.com/",
  },
];

// Helper to create offset arrays so each row looks distinct
function getOffsetLogos(offset: number): ClientLogo[] {
  return [...CLIENT_LOGOS.slice(offset), ...CLIENT_LOGOS.slice(0, offset)];
}

const ROWS = [
  { id: 1, logos: getOffsetLogos(0), reverse: false },
  { id: 2, logos: getOffsetLogos(6), reverse: true },
  { id: 3, logos: getOffsetLogos(12), reverse: false },
  { id: 4, logos: getOffsetLogos(18), reverse: true },
  { id: 5, logos: getOffsetLogos(24), reverse: false },
];

export function ClientsSection() {
  return (
    <section id="clients" className="bg-white pt-20 overflow-hidden">
      <div className="w-full">
        {/* Heading */}
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2
            className="font-heading font-normal text-nomina-black uppercase text-center leading-[1.05] tracking-tight pb-10"
            style={{ fontSize: "clamp(1.75rem, 4.2vw, 3.5rem)" }}
          >
            Brands We’ve Grown With
          </h2>
        </div>

        {/* Dynamic Marquee Rows */}
        <div className="flex flex-col gap-8 md:gap-12 py-8 overflow-hidden w-full">
          {ROWS.map((row) => (
            <div
              key={row.id}
              className="flex w-full overflow-hidden whitespace-nowrap group hover:[&>div]:[animation-play-state:paused]"
            >
              <div
                className={cn(
                  "flex w-max items-center gap-16 md:gap-24 px-8 md:px-12",
                  row.reverse ? "animate-marquee-reverse" : "animate-marquee"
                )}
                style={{ animationDuration: "90s", animationPlayState: "inherit" }}
              >
                {[...row.logos, ...row.logos].map((client, idx) => {
                  const img = (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={client.src}
                      alt={`${client.name} — Client of NOMINA Event Organizer Jakarta`}
                      className="h-9 md:h-11 lg:h-12 w-auto object-contain max-w-[140px] md:max-w-[170px]"
                    />
                  );
                  const wrapperClass =
                    "shrink-0 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300";

                  return client.href ? (
                    <a
                      key={`${row.id}-${idx}`}
                      href={client.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${client.name} official website`}
                      className={wrapperClass}
                    >
                      {img}
                    </a>
                  ) : (
                    <div key={`${row.id}-${idx}`} className={wrapperClass}>
                      {img}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 pb-16">
          <ArrowButton label="Discover all clients" href="/portfolio" />
        </div>
      </div>
    </section>
  );
}
