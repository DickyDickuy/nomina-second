import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { StatementSection } from "@/components/StatementSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "NOMINA Communication — Creative Communication Agency in Milan",
  description:
    "NOMINA is a full-service creative agency designing tailored communication ecosystems, experiential events, branding, digital platforms, and AI solutions.",
};

export default function Home() {
  return (
    <>
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
