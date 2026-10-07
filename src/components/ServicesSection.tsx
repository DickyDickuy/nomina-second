const SERVICES = [
  {
    title: "Event Organizer",
    subtitle: "Corporate Event, Brand Activation, Exhibition & Roadshow Jakarta",
    description:
      "Jasa event organizer Jakarta terdekat untuk corporate event, brand activation, exhibition, product launch, roadshow, dan hybrid event di Jakarta Selatan & seluruh Indonesia.",
    href: "#",
  },
  {
    title: "Technical Custom Production",
    subtitle: "Custom Stage, Booth Pameran & Instalasi Kreatif",
    description:
      "Produksi panggung kustom, booth pameran, backdrop, instalasi kreatif, lighting system, dan konstruksi teknis event profesional di Jakarta.",
    href: "#",
  },
  {
    title: "Rental Equipment",
    subtitle: "Sewa Sound System, Kursi Event, LED Screen & Staging Jakarta",
    description:
      "Sewa sound system Jakarta, sewa kursi event, sewa LED screen, sewa staging, sewa lighting rig — rental alat event profesional lengkap di Jakarta Selatan.",
    href: "#",
  },
  {
    title: "Web Development",
    subtitle: "Website, Microsite & Platform Digital Brand",
    description:
      "Pembuatan website interaktif, microsite kampanye event, sistem registrasi online, dan platform digital brand untuk perusahaan Indonesia.",
    href: "#",
  },
  {
    title: "SaaS Management",
    subtitle: "Solusi Cloud & Digitalisasi Operasional Event",
    description:
      "Pengelolaan solusi berbasis cloud dan produk SaaS untuk operasional event maupun transformasi digital perusahaan.",
    href: "#",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white"
      aria-label="Layanan NOMINA Creative — Event Organizer, Rental Equipment & Technical Production Jakarta"
    >
      {/* Section title */}
      <div className="text-center pt-16 pb-6 md:pt-24 md:pb-8">
        <h2
          className="font-heading font-bold text-nomina-black uppercase text-center leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Services
        </h2>
        <p className="sr-only">
          Layanan NOMINA Creative: Event Organizer Jakarta, Sewa Sound System, Sewa Kursi Event,
          Technical Custom Production, dan Rental Equipment untuk corporate event di Jakarta Selatan.
        </p>
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
                className="font-heading font-bold uppercase leading-[0.85] tracking-tight block"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                {service.title}
              </span>
              {/* Hidden SEO-rich description for crawlers — invisible to users */}
              <span className="sr-only">{service.subtitle}. {service.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
