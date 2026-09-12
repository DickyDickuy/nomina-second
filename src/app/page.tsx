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
  title: "NOMINA Creative — Creative Agency South Jakarta | Event Organizer & Branding",
  description:
    "NOMINA Creative is a full-service creative agency based in South Jakarta. We craft communication ecosystems through experiential events, branding, digital platforms, and creative productions.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NOMINA Creative",
    title: "NOMINA Creative — Creative Agency South Jakarta | Event Organizer & Branding",
    description:
      "NOMINA Creative is a full-service creative agency based in South Jakarta. We craft communication ecosystems through experiential events, branding, digital platforms, and creative productions.",
    images: [
      {
        url: `${SITE_URL}/images/nomina-logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "NOMINA Creative — Creative Agency South Jakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOMINA Creative — Creative Agency South Jakarta | Event Organizer & Branding",
    description:
      "NOMINA Creative is a full-service creative agency based in South Jakarta. We craft communication ecosystems through experiential events, branding, digital platforms, and creative productions.",
    images: [`${SITE_URL}/images/nomina-logo.jpeg`],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NOMINA Creative",
    alternateName: "NOMINA",
    url: SITE_URL,
    logo: `${SITE_URL}/images/nomina-logo.jpeg`,
    description:
      "NOMINA Creative is a full-service creative agency based in South Jakarta. Strategy, Branding, Content, Events, Digital, Tech — est. 2016.",
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      addressLocality: "South Jakarta",
      addressRegion: "Jakarta",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/contact`,
    },
    sameAs: [
      "https://www.instagram.com/nomina.creative/",
      "https://www.linkedin.com/company/nomina-indonesia/",
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
      <main>
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
