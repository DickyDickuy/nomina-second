import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { StatementSection } from "@/components/StatementSection";
import { Footer } from "@/components/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nomina-creative.com";

export const metadata: Metadata = {
  title:
    "NOMINA Creative — Event Organizer Jakarta Terdekat | Sewa Sound System, Kursi & Alat Event",
  description:
    "Butuh EO Jakarta terdekat? NOMINA Creative di Kemang, Jakarta Selatan — jasa Event Organizer, sewa sound system, sewa kursi event, sewa LED screen, staging & Technical Custom Production untuk corporate event, brand activation, exhibition & roadshow sejak 2016.",
  keywords: [
    "event organizer Jakarta terdekat",
    "EO Jakarta terdekat",
    "sewa sound system Jakarta",
    "sewa kursi event Jakarta",
    "sewa LED screen Jakarta",
    "sewa staging Jakarta",
    "rental sound system Jakarta",
    "event organizer Jakarta Selatan",
    "jasa EO Jakarta",
    "vendor event Jakarta",
    "corporate event Jakarta",
    "brand activation Jakarta",
    "exhibition organizer Jakarta",
    "production house event Jakarta",
    "technical production Jakarta",
    "NOMINA Creative",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "NOMINA Creative",
    title:
      "NOMINA Creative — Event Organizer Jakarta Terdekat | Sewa Sound System, Kursi & Alat Event",
    description:
      "Butuh EO Jakarta terdekat? NOMINA Creative di Kemang, Jakarta Selatan — jasa Event Organizer, sewa sound system, sewa kursi event, sewa LED screen, staging & Technical Custom Production untuk corporate event, brand activation & exhibition sejak 2016.",
    images: [
      {
        url: `${SITE_URL}/images/nomina-logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "NOMINA Creative — Event Organizer Jakarta Terdekat, Sewa Sound System & Alat Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NOMINA Creative — Event Organizer Jakarta Terdekat | Sewa Sound System, Kursi & Alat Event",
    description:
      "Butuh EO Jakarta terdekat? NOMINA Creative di Kemang, Jakarta Selatan — jasa Event Organizer, sewa sound system, sewa kursi event, LED screen & Technical Custom Production.",
    images: [`${SITE_URL}/images/nomina-logo.jpeg`],
  },
};

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService", "EventVenue"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: "NOMINA Creative",
    alternateName: ["NOMINA", "Nomina Indonesia Creative", "EO Jakarta NOMINA", "Event Organizer Jakarta NOMINA"],
    url: SITE_URL,
    logo: `${SITE_URL}/images/nomina-logo.jpeg`,
    image: `${SITE_URL}/images/nomina-logo.jpeg`,
    description:
      "NOMINA Creative adalah jasa Event Organizer Jakarta terdekat (di Kemang, Jakarta Selatan) yang menyediakan layanan Event Organiser, Technical Custom Production, sewa sound system, sewa kursi event, sewa LED screen, Rental Equipment, Web Development, dan SaaS Management sejak 2016.",
    foundingDate: "2016",
    telephone: "+62-819-1212-1777",
    email: "hello@nomina-creative.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Kemang Utara X Jl. Melati No.2C, RT.2/RW.1, Duren Tiga, Kec. Pancoran",
      addressLocality: "Kota Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12760",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2562171,
      longitude: 106.8246734,
    },
    hasMap:
      "https://www.google.com/maps/dir/?api=1&destination=-6.2562171,106.8246734",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Jakarta Selatan" },
      { "@type": "City", name: "Jakarta" },
      { "@type": "AdministrativeArea", name: "Jabodetabek" },
      { "@type": "Country", name: "Indonesia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Event Organizer, Rental Equipment & Creative Production Jakarta",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Organiser Jakarta",
            description:
              "Jasa Event Organizer Jakarta terdekat (EO Jakarta) untuk corporate event, brand activation, exhibition, product launch, roadshow, hybrid event, dan live show di Jakarta dan seluruh Indonesia.",
            areaServed: "Jakarta, Indonesia",
            keywords: "event organizer Jakarta, EO Jakarta terdekat, jasa EO Jakarta, vendor event Jakarta",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Custom Production",
            description:
              "Produksi panggung kustom, booth pameran, instalasi kreatif, lighting, dan konstruksi teknis event di Jakarta. Spesialis technical production untuk skala kecil hingga mega-event.",
            areaServed: "Jakarta, Indonesia",
            keywords: "technical production Jakarta, production house event Jakarta, custom stage Jakarta",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rental Equipment Event Jakarta",
            description:
              "Sewa sound system Jakarta, sewa kursi event, sewa LED screen, sewa staging, sewa lighting rig, dan sewa alat multimedia profesional untuk event di Jakarta dan sekitarnya.",
            areaServed: "Jakarta, Indonesia",
            keywords: "sewa sound system Jakarta, sewa kursi event Jakarta, sewa LED screen Jakarta, rental sound system Jakarta, sewa alat event Jakarta",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Pembuatan website interaktif, microsite kampanye event, sistem registrasi, dan platform digital brand.",
            areaServed: "Indonesia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Management",
            description:
              "Pengelolaan solusi berbasis cloud dan produk SaaS untuk operasional event maupun transformasi digital perusahaan.",
            areaServed: "Indonesia",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+62-819-1212-1777",
      email: "hello@nomina-creative.com",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
      url: `${SITE_URL}/contact`,
    },
    sameAs: [
      "https://www.instagram.com/nominacreative/",
      "https://www.linkedin.com/company/nomina-indonesia/",
      "https://www.facebook.com/nominaindonesia?locale=id_ID",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Di mana lokasi event organizer Jakarta terdekat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NOMINA Creative berlokasi di Jl. Kemang Utara X Jl. Melati No.2C, Duren Tiga, Pancoran, Jakarta Selatan 12760. Kami melayani event di seluruh Jabodetabek dan Indonesia.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah NOMINA Creative menyediakan sewa sound system di Jakarta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, NOMINA Creative menyediakan layanan sewa sound system profesional di Jakarta, termasuk sewa sound system outdoor, indoor, sewa microphone, mixer, dan sistem audio lengkap untuk corporate event dan exhibition.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa sewa kursi event di Jakarta melalui NOMINA Creative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, NOMINA Creative menyediakan paket rental equipment lengkap termasuk sewa kursi event, meja, backdrop, staging, LED screen, dan perlengkapan event lainnya di Jakarta.",
        },
      },
      {
        "@type": "Question",
        name: "Layanan apa saja yang tersedia di NOMINA Creative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NOMINA Creative menyediakan: (1) Event Organiser — corporate event, brand activation, exhibition, product launch; (2) Technical Custom Production — staging, booth, instalasi kreatif; (3) Rental Equipment — sewa sound system, LED screen, kursi, lighting; (4) Web Development; (5) SaaS Management.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa biaya jasa event organizer di NOMINA Creative Jakarta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biaya jasa EO Jakarta di NOMINA Creative bervariasi tergantung skala dan kebutuhan event. Hubungi kami di +62 819-1212-1777 atau email hello@nomina-creative.com untuk konsultasi dan penawaran gratis.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <HeroSection />
      <Navbar />
      <main id="nomina-home">
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <StatementSection />
      </main>
      <Footer />
    </>
  );
}
// Updated brand colors to Scarlet Red #FF3800
