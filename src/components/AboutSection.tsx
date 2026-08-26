import { ArrowButton } from "@/components/ArrowButton";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 md:px-12 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-heading font-bold text-nomina-black uppercase leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          NOMINA: More, than just
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-nomina-black/80 max-w-2xl mx-auto">
          Since 2016 we have been working alongside brands to build solid,
          recognisable communication projects that stand the test of time.
          Strategy, creativity, PR and digital are all part of a single approach,
          designed to create authentic connections between people and brands.
        </p>

        <div className="flex justify-center">
          <ArrowButton label="Discover more" href="/about" />
        </div>
      </div>
    </section>
  );
}
