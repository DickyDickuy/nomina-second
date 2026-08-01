import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { StatementSection } from "@/components/StatementSection";
import { Footer } from "@/components/Footer";

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
