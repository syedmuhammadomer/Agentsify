import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { AboutSection } from "@/components/sections/AboutSection";
import { ApplyBanner } from "@/components/sections/ApplyBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { EmployersSection } from "@/components/sections/EmployersSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div id="top" />
      <Navbar />

      <main id="main-content">
        {/* 1 — Animated 3-slide carousel hero */}
        <HeroSection />

        {/* 2 — Brand ticker strip */}
        <MarqueeTicker />

        {/* 3 — Animated stats counters */}
        <StatsSection />

        {/* 4 — About Agentsify UK */}
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        {/* 5 — Why Choose Us (feature cards) */}
        <ScrollReveal>
          <WhyUsSection />
        </ScrollReveal>

        {/* 6 — Our Services */}
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>

        {/* 7 — How it works (process steps) */}
        <ScrollReveal>
          <ProcessSection />
        </ScrollReveal>

        {/* 8 — Industries we serve */}
        <ScrollReveal>
          <PortfolioSection />
        </ScrollReveal>

        {/* 9 — For Employers (staffing request form) */}
        <ScrollReveal>
          <EmployersSection />
        </ScrollReveal>

        {/* 10 — For Job Seekers (apply banner CTA) */}
        <ApplyBanner />

        {/* 11 — Contact (contact form + info) */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />
      <CookieNotice />
    </>
  );
}
