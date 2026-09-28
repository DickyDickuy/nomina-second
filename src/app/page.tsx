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
    "NOMINA Creative — Event Organizer Jakarta (EO Jakarta) | Technical Custom Production & Rental Equipment",
  description:
    "Cari EO terdekat atau jasa event organizer Jakarta? NOMINA Creative di Jakarta Selatan melayani Event Organiser, Technical Custom Production, Rental Equipment, Web Development, dan SaaS Management sejak 2016.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NOMINA Creative",
    title:
      "NOMINA Creative — Event Organizer Jakarta (EO Jakarta) | Technical Custom Production & Rental Equipment",
    description:
      "Cari EO terdekat atau jasa event organizer Jakarta? NOMINA Creative di Jakarta Selatan melayani Event Organiser, Technical Custom Production, Rental Equipment, Web Development, dan SaaS Management sejak 2016.",
    images: [
      {
        url: `${SITE_URL}/images/nomina-logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "NOMINA Creative — Event Organizer Jakarta Selatan & Technical Custom Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NOMINA Creative — Event Organizer Jakarta (EO Jakarta) | Technical Custom Production & Rental Equipment",
    description:
      "Cari EO terdekat atau jasa event organizer Jakarta? NOMINA Creative di Jakarta Selatan melayani Event Organiser, Technical Custom Production, Rental Equipment, Web Development, dan SaaS Management sejak 2016.",
    images: [`${SITE_URL}/images/nomina-logo.jpeg`],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService", "EventVenue"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: "NOMINA Creative",
    alternateName: ["NOMINA", "Nomina Indonesia Creative", "EO Jakarta NOMINA"],
    url: SITE_URL,
    logo: `${SITE_URL}/images/nomina-logo.jpeg`,
    image: `${SITE_URL}/images/nomina-logo.jpeg`,
    description:
      "NOMINA Creative adalah jasa Event Organizer Jakarta (EO terdekat di Jakarta Selatan) yang menyediakan layanan Event Organiser, Technical Custom Production, Rental Equipment, Web Development, dan SaaS Management sejak 2016.",
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
      name: "Layanan Event Organizer & Creative Production Jakarta",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Organiser",
            description:
              "Jasa Event Organizer (EO Jakarta) untuk corporate event, brand activation, exhibition, dan live show di Jakarta dan seluruh Indonesia.",
            areaServed: "Jakarta, Indonesia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Custom Production",
            description:
              "Produksi panggung kustom, booth pameran, instalasi kreatif, lighting, dan konstruksi teknis event di Jakarta.",
            areaServed: "Jakarta, Indonesia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rental Equipment",
            description:
              "Penyewaan peralatan event profesional: sound system, LED screen, lighting rig, staging, dan multimedia di Jakarta.",
            areaServed: "Jakarta, Indonesia",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
