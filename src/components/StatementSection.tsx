import { ArrowButton } from "@/components/ArrowButton";

export function StatementSection() {
  return (
    <section id="special-20" className="bg-white px-6 md:px-12 pt-20 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Large statement heading */}
        <h2
          className="font-heading font-bold text-nomina-black uppercase leading-[0.88] tracking-tight mb-8 md:mb-10"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 0.88 }}
        >
          We Design
          <br />
          Communication
          <br />
          Ecosystems.
        </h2>

        {/* Subtitle */}
        <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-nomina-black mb-4">
          We Have Been Doing It For 10 Years
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-nomina-black/80 max-w-2xl mb-8">
          For 10 years we have been connecting ideas, content, people and
          channels to create communication ecosystems. Strategy, creativity, PR
          and digital are all part of a single approach, designed to create
          authentic connections between people and brands.
        </p>

        {/* CTA */}
        <div>
          <ArrowButton label="Get in touch with NOMINA" href="/contact" />
        </div>
      </div>
    </section>
  );
}
