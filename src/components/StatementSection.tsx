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
        <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-nomina-black mb-4">
          10 Tahun Membangun Event & Brand di Jakarta
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-nomina-black/80 max-w-2xl mb-8">
          Selama 10 tahun, NOMINA Creative telah menjadi <strong>event organizer Jakarta</strong> pilihan
          ratusan brand ternama — dari <strong>corporate event</strong>, <strong>brand activation</strong>,
          hingga <strong>exhibition</strong> dan product launch skala nasional.
          Dari sewa sound system, sewa kursi event, hingga technical custom production,
          kami menghubungkan ide, konten, manusia, dan teknologi menjadi komunikasi yang berkesan dan berdampak.
        </p>

        {/* CTA */}
        <div>
          <ArrowButton label="Get in touch with NOMINA" href="/contact" />
        </div>
      </div>
    </section>
  );
}
