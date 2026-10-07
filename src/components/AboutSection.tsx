import { ArrowButton } from "@/components/ArrowButton";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 md:px-12 pt-20"
      aria-label="Tentang NOMINA Creative — Event Organizer Jakarta"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2
          className="font-heading font-bold text-nomina-black uppercase leading-[0.95] tracking-tight mb-6 md:mb-8"
          style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }}
        >
          NOMINA: More, than just
        </h2>

        <p
          className="leading-relaxed text-nomina-black max-w-xl mx-auto mb-8 text-center"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
          }}
        >
          Since 2016 we have worked alongside brands to build solid, recognisable communication projects that stand the test of time. Strategy, creativity, PR and digital are all part of a single approach, designed to create authentic connections between people and brands.
        </p>

        {/* Indonesian SEO keywords — invisible visually, indexed by Google */}
        <span className="sr-only">
          Sejak 2016, NOMINA Creative adalah event organizer Jakarta terpercaya
          di Kemang, Jakarta Selatan. Melayani corporate event, brand activation,
          exhibition, product launch, roadshow, sewa sound system, sewa kursi event,
          sewa LED screen, staging, dan lighting rig — rental equipment & technical
          custom production untuk event skala nasional.
        </span>

        <div className="flex justify-center mt-8">
          <ArrowButton label="Discover more" href="/about" />
        </div>
      </div>
    </section>
  );
}
