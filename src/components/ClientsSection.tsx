"use client";

import { ArrowButton } from "@/components/ArrowButton";
import { cn } from "@/lib/utils";

interface ClientLogo {
  name: string;
  src: string;
  /** Official client URL. Opens in a new tab when clicked. */
  href?: string;
}

const CLIENT_HREFS: Record<string, string> = {
  "/images/client-KTM.png": "https://www.ktm.com",
  "/images/client-astra.png": "https://www.astra.co.id",
  "/images/client-bank-bni.png": "https://www.bni.co.id",
  "/images/client-bank-bri.png": "https://bri.co.id",
  "/images/client-bank-bsi.png": "https://www.bankbsi.co.id",
  "/images/client-bank-hsbc.png": "https://www.hsbc.co.id",
  "/images/client-citilink.png": "https://www.citilink.co.id",
  "/images/client-dana.png": "https://www.dana.id",
  "/images/client-dbs.png": "https://www.dbs.id",
  "/images/client-djarum.png": "https://www.djarum.com",
  "/images/client-flip.png": "https://flip.id",
  "/images/client-garuda-airline.png": "https://www.garuda-indonesia.com",
  "/images/client-kominfo.png": "https://www.komdigi.go.id",
  "/images/client-motogp.png": "https://www.motogp.com",
  "/images/client-noice.png": "https://www.noice.id",
  "/images/client-ocbc.png": "https://www.ocbc.id",
  "/images/client-pokemon.png": "https://asia.pokemon-card.com/id/",
};

const CLIENT_SRCS = [
  "/images/client-KTM.png",
  "/images/client-astra.png",
  "/images/client-bank-bni.png",
  "/images/client-bank-bri.png",
  "/images/client-bank-bsi.png",
  "/images/client-bank-hsbc.png",
  "/images/client-citilink.png",
  "/images/client-dana.png",
  "/images/client-dbs.png",
  "/images/client-djarum.png",
  "/images/client-flip.png",
  "/images/client-garuda-airline.png",
  "/images/client-kominfo.png",
  "/images/client-motogp.png",
  "/images/client-noice.png",
  "/images/client-ocbc.png",
  "/images/client-pokemon.png",
];

function getClientName(src: string): string {
  const filename = src.split("/").pop() || "";
  const rawName = filename
    .replace(/^client-/, "")
    .replace(/\.[^.]+$/, "")
    .replace(/-/g, " ");
  return rawName
    .split(" ")
    .map((w) =>
      w.length <= 4
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}

const CLIENT_LOGOS: ClientLogo[] = CLIENT_SRCS.map((src) => ({
  name: getClientName(src) || "Client",
  src,
  href: CLIENT_HREFS[src],
}));

// Helper to create offset arrays so each row looks distinct
function getOffsetLogos(offset: number): ClientLogo[] {
  return [...CLIENT_LOGOS.slice(offset), ...CLIENT_LOGOS.slice(0, offset)];
}

const ROWS = [
  { id: 1, logos: getOffsetLogos(0), reverse: false },
  { id: 2, logos: getOffsetLogos(4), reverse: true },
  { id: 3, logos: getOffsetLogos(8), reverse: false },
  { id: 4, logos: getOffsetLogos(12), reverse: true },
  { id: 5, logos: getOffsetLogos(15), reverse: false },
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
                style={{ animationPlayState: "inherit" }}
              >
                {[...row.logos, ...row.logos].map((client, idx) => {
                  const img = (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={client.src}
                      alt={`${client.name} — Client of NOMINA Event Organizer Jakarta`}
                      className="h-10 md:h-12 lg:h-14 w-auto object-contain"
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
