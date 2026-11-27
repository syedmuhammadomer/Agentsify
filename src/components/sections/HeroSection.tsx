"use client";

import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroScene } from "@/components/three/HeroScene";

const SLIDES = [
  {
    kicker: "UK Staffing Agency — Trusted Nationwide",
    heading: ["Right People.", "Right Shift."],
    copy: "Vetted, compliance-checked workers for warehousing, forklift, hospitality and HGV — on demand, every day.",
    ctaPrimary: { label: "I want to hire", href: "#contact", sub: "Find your perfect team" },
    ctaSecondary: { label: "I want to apply", href: "/apply", sub: "Start your next shift" },
  },
  {
    kicker: "For Businesses — Staff in 24 Hours",
    heading: ["Build Your", "Workforce."],
    copy: "Tell us what you need and we'll have the right staff on-site within 24 hours. No agency hassle — just results.",
    ctaPrimary: { label: "Request Staff", href: "#employers", sub: "Get staffed fast" },
    ctaSecondary: { label: "Our Services", href: "#services", sub: "Browse what we supply" },
  },
  {
    kicker: "For Workers — Roles Available Now",
    heading: ["Start Your", "Next Shift."],
    copy: "Find flexible warehouse, driving, hospitality and forklift roles across the UK. Apply in just 2 minutes.",
    ctaPrimary: { label: "Apply Now", href: "/apply", sub: "Takes just 2 minutes" },
    ctaSecondary: { label: "Browse Roles", href: "#services", sub: "View open positions" },
  },
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[activeSlide]!;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-scene" aria-hidden="true">
        <HeroScene />
      </div>
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-content site-width">
        {/* key causes React to remount = CSS animation retriggers */}
        <div className="hero-slides" key={activeSlide}>
          <p className="hero-kicker">
            <span aria-hidden="true" /> {slide.kicker}
          </p>

          <h1 id="hero-title">
            {slide.heading[0]}
            <em>{slide.heading[1]}</em>
          </h1>

          <p className="hero-copy">{slide.copy}</p>

          <div className="hero-cta-cards">
            <Link href={slide.ctaPrimary.href} className="hero-cta-card hero-cta-primary">
              <div>
                <strong>{slide.ctaPrimary.label}</strong>
                <span>{slide.ctaPrimary.sub}</span>
              </div>
              <div className="cta-arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            </Link>

            <Link href={slide.ctaSecondary.href} className="hero-cta-card hero-cta-secondary">
              <div>
                <strong>{slide.ctaSecondary.label}</strong>
                <span>{slide.ctaSecondary.sub}</span>
              </div>
              <div className="cta-arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>

          <div className="hero-assurance" aria-label="Key assurances">
            <span><Check size={13} aria-hidden="true" /> Vetted &amp; Compliant</span>
            <span><Check size={13} aria-hidden="true" /> All Industries</span>
            <span><Check size={13} aria-hidden="true" /> UK-Wide</span>
            <span><Check size={13} aria-hidden="true" /> Urgent Cover</span>
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="hero-slide-nav" role="tablist" aria-label="Navigate hero slides">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === activeSlide ? " is-active" : ""}`}
              onClick={() => setActiveSlide(i)}
              role="tab"
              aria-selected={i === activeSlide}
              aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
              type="button"
            />
          ))}
        </div>
      </div>

      <div className="hero-coordinate" aria-hidden="true">51°30′N &nbsp; 00°07′W</div>
      <a className="hero-scroll" href="#about" aria-label="Scroll down to learn more">
        <span>Scroll</span>
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
