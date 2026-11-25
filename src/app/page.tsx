import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApplyBanner } from "@/components/sections/ApplyBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div id="top" />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <MarqueeTicker />
        <StatsSection />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProcessSection />
        </ScrollReveal>
        <ScrollReveal>
          <PortfolioSection />
        </ScrollReveal>
        <ApplyBanner />
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}
