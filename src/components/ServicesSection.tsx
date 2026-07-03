const SERVICES = [
  {
    title: "STRATEGY . BRANDING",
    href: "#",
  },
  {
    title: "CONTENT . EVENTS",
    href: "#",
  },
  {
    title: "PR . DIGITAL PR",
    href: "#",
  },
  {
    title: "DIGITAL . TECH",
    href: "#",
  },
  {
    title: "AI . INTELLIGENT SYSTEMS",
    href: "#",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      {/* Section title */}
      <div className="text-center py-10 md:py-16">
        <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-nomina-black">
          Services
        </h2>
      </div>

      {/* Service rows */}
      <div className="w-full">
        {SERVICES.map((service) => (
          <a
            key={service.title}
            href={service.href}
            className="service-row block w-full border-t border-nomina-black/10 last:border-b cursor-pointer"
          >
            <div className="py-6 md:py-8 px-4 text-center">
              <span
                className="font-heading font-bold uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                {service.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
