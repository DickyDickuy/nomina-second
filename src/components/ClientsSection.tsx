import { ArrowButton } from "@/components/ArrowButton";
import { cn } from "@/lib/utils";

interface ClientLogo {
  name: string;
  src: string;
  /** Official client URL. Fill in to make the logo clickable (opens in a new tab). */
  href?: string;
}

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
  const rawName = filename.replace(/^client-/, "").replace(/\.[^.]+$/, "").replace(/-/g, " ");
  return rawName
    .split(" ")
    .map((w) => (w.length <= 4 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

// Map of logo src -> official URL. To be filled in from the client-provided list.
const CLIENT_HREFS: Record<string, string> = {};

const CLIENT_LOGOS: ClientLogo[] = CLIENT_SRCS.map((src) => ({
  name: getClientName(src) || "Client",
  src,
  href: CLIENT_HREFS[src],
}));

// Helper to create offset arrays so each row looks a bit different
function getOffsetLogos(offset: number) {
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

        {/* Marquee Rows */}
        <div className="flex flex-col gap-8 md:gap-12 py-8 overflow-hidden w-full">
          {ROWS.map((row) => (
            <div key={row.id} className="flex w-full overflow-hidden whitespace-nowrap group hover:[&>div]:[animation-play-state:paused]">
              <div
                className={cn(
                  "flex w-max items-center gap-16 md:gap-24 px-8 md:px-12",
                  row.reverse ? "animate-marquee-reverse" : "animate-marquee"
                )}
                style={{ animationPlayState: "inherit" }}
              >
                {/* Render duplicated list for seamless looping */}
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
                      aria-label={`Visit ${client.name} website`}
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
