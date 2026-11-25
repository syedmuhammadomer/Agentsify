"use client";

import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroScene } from "@/components/three/HeroScene";

const ROLES = ["HGV Drivers", "Forklift Operators", "Warehouse Staff", "Hospitality Teams"];

function RoleTicker() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-role-ticker" aria-live="polite">
      <span className="hero-role-label">Now placing</span>
      <div className="hero-role-window">
        <div
          className="hero-role-track"
          style={{ transform: `translateY(-${idx * 1.6}em)` }}
        >
          {ROLES.map((r) => (
            <span key={r} className="hero-role-item">{r}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-scene" aria-hidden="true">
        <HeroScene />
      </div>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-content site-width">
        <p className="hero-kicker">
          <span aria-hidden="true" /> UK Staffing Agency &mdash; Trusted nationwide.
        </p>
        <h1 id="hero-title">
          Right people.
          <em>Right shift.</em>
        </h1>
        <p className="hero-copy">
          We supply vetted, compliance-checked workers for warehousing, forklift
          operations, hospitality and HGV driving &mdash; on demand, every day.
        </p>
        <RoleTicker />
        <div className="hero-cta-cards">
          <Link href="/apply" className="hero-cta-card">
            <div>
              <strong>I want to apply</strong>
              <span>Find your next shift</span>
            </div>
            <div className="cta-arrow" aria-hidden="true"><ArrowUpRight size={18} /></div>
          </Link>
          <a href="#contact" className="hero-cta-card">
            <div>
              <strong>I want to hire</strong>
              <span>Find your perfect worker</span>
            </div>
            <div className="cta-arrow" aria-hidden="true"><ArrowUpRight size={18} /></div>
          </a>
        </div>
        <div className="hero-assurance">
          <span><Check aria-hidden="true" /> Vetted &amp; Compliant</span>
          <span><Check aria-hidden="true" /> All Industries</span>
          <span><Check aria-hidden="true" /> UK-Wide</span>
          <span><Check aria-hidden="true" /> Urgent Cover</span>
        </div>
      </div>
      <div className="hero-coordinate" aria-hidden="true">51°30′N &nbsp; 00°07′W</div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to learn about Agentsify UK">
        <span>Scroll</span><ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
