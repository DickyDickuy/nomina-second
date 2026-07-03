import { ArrowButton } from "@/components/ArrowButton";

export function StatementSection() {
  return (
    <section id="special-20" className="bg-white px-6 md:px-12 pt-20 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Large statement heading */}
        <h2
          className="font-heading font-bold text-nomina-black uppercase leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          We Design
          <br />
          Communication
          <br />
          Ecosystems.
        </h2>

        {/* Subtitle */}
        <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-nomina-black">
          We Have Been Doing It For 20 Years
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-nomina-black/80 max-w-2xl">
          For 20 years we have been connecting ideas, content, people and
          channels to create communication ecosystems. Strategy, creativity, PR
          and digital are all part of a single approach, designed to create
          authentic connections between people and brands.
        </p>

        {/* CTA */}
        <div>
          <ArrowButton label="Special 20 Project Archive" href="#" />
        </div>
      </div>
    </section>
  );
}
