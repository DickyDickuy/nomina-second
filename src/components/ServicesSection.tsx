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
    title: "Technical & Custom Production",
    href: "#",
  },
  {
    title: "DIGITAL . TECH",
    href: "#",
  },
  {
    title: "SaaS Management",
    href: "#",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      {/* Section title */}
      <div className="text-center pt-16 pb-6 md:pt-24 md:pb-8">
        <h2
          className="font-heading font-bold text-nomina-black uppercase text-center leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Services
        </h2>
      </div>

      {/* Service rows */}
      <div className="w-full">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="service-row block w-full border-t border-nomina-black/10 last:border-b"
          >
            <div className="py-6 md:py-8 px-4 text-center">
              <span
                className="font-heading font-bold uppercase leading-[0.85] tracking-tight"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                {service.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
