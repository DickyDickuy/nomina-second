import { ArrowButton } from "@/components/ArrowButton";

export function StatementSection() {
  return (
    <section id="special-20" className="bg-white px-6 md:px-12 pt-20 pb-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Large statement heading */}
        <h2
          className="font-heading font-bold text-nomina-black uppercase leading-[0.88] tracking-tight mb-8 md:mb-10"
          style={{ fontSize: "clamp(4rem, 13vw, 15rem)", lineHeight: 0.88 }}
        >
          We Design
          <br />
          Communication
          <br />
          Ecosystems.
        </h2>

        {/* Subtitle */}
        <h3
          className="font-body text-nomina-black max-w-2xl mb-3"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          10 Years of Building Events and Brands in Jakarta
        </h3>

        {/* Description */}
        <p
          className="font-body leading-relaxed text-nomina-black max-w-2xl mb-8"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
          }}
        >
          For 10 years, NOMINA Creative has been the event organizer of choice in Jakarta for hundreds of leading brands, from corporate events and brand activations to exhibitions and national-scale product launches. From sound system and event furniture rentals to technical custom production, we connect ideas, content, people, and technology to create memorable and impactful communication.
        </p>

        {/* Indonesian SEO keywords - invisible visually, indexed by search engines */}
        <span className="sr-only">
          Selama 10 tahun, NOMINA Creative telah menjadi event organizer Jakarta pilihan
          ratusan brand ternama untuk corporate event, brand activation,
          hingga exhibition dan product launch skala nasional.
          Dari sewa sound system, sewa kursi event, hingga technical custom production,
          kami menghubungkan ide, konten, manusia, dan teknologi menjadi komunikasi yang berkesan dan berdampak.
        </span>

        {/* CTA */}
        <div>
          <ArrowButton label="Get in touch with NOMINA" href="/contact" />
        </div>
      </div>
    </section>
  );
}
