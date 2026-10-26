import { ArrowButton } from "@/components/ArrowButton";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 md:px-12 pt-20"
      aria-label="About NOMINA Creative: Event Organizer Jakarta"
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <h2
          className="font-heading font-normal text-nomina-black uppercase leading-[1.05] tracking-tight mb-4 md:mb-6"
          style={{ fontSize: "clamp(1.75rem, 4.6vw, 4.25rem)" }}
        >
          NOMINA — More Than Just a Creative Agency
        </h2>

        <h3
          className="font-body text-nomina-orange mb-6 md:mb-8"
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          We Design Communication Ecosystems
        </h3>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-8">
          <p
            className="leading-relaxed text-nomina-black"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
            }}
          >
            Since 2016, NOMINA Creative has been the trusted partner for leading brands across Indonesia—delivering everything from high-impact brand activations and corporate conferences to custom technical productions.
          </p>
          <p
            className="leading-relaxed text-nomina-black"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
            }}
          >
            By seamlessly integrating <strong style={{ fontWeight: 700 }}>Strategy, Content, Live Events, and Technology</strong>, we bring ideas to life and create authentic, memorable connections between people and brands that stand the test of time.
          </p>
        </div>

        {/* Indonesian SEO keywords - invisible visually, indexed by Google */}
        <span className="sr-only">
          Sejak 2016, NOMINA Creative adalah event organizer Jakarta terpercaya
          di Kemang, Jakarta Selatan. Melayani corporate event, brand activation,
          exhibition, product launch, roadshow, sewa sound system, sewa kursi event,
          sewa LED screen, staging, dan lighting rig, rental equipment & technical
          custom production untuk event skala nasional.
        </span>

        <div className="flex justify-center mt-8">
          <ArrowButton label="Discover more" href="/about" />
        </div>
      </div>
    </section>
  );
}
