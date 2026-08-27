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
  title: "NOMINA Communication — Creative Communication Agency in Milan",
  description:
    "NOMINA is a full-service creative agency designing tailored communication ecosystems, experiential events, branding, digital platforms, and AI solutions.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NOMINA Communication",
    title: "NOMINA Communication — Creative Communication Agency in Milan",
    description:
      "NOMINA is a full-service creative agency designing tailored communication ecosystems, experiential events, branding, digital platforms, and AI solutions.",
    images: [
      {
        url: `${SITE_URL}/images/nomina-logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "NOMINA Communication — Creative Agency Milan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOMINA Communication — Creative Communication Agency in Milan",
    description:
      "NOMINA is a full-service creative agency designing tailored communication ecosystems, experiential events, branding, digital platforms, and AI solutions.",
    images: [`${SITE_URL}/images/nomina-logo.jpeg`],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NOMINA Communication",
    alternateName: "NOMINA",
    url: SITE_URL,
    logo: `${SITE_URL}/images/nomina-logo.jpeg`,
    description:
      "NOMINA is a full-service creative agency based in Milan. Strategy, Branding, Content, Events, PR, Digital, Tech, AI.",
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milan",
      addressCountry: "IT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/contact`,
    },
    sameAs: [],
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
