"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2000, suffix: "+", label: "Shifts Filled", desc: "Across all sectors" },
  { value: 4, suffix: "", label: "Specialist Sectors", desc: "Warehouse · Forklift · Hospitality · Driving" },
  { value: 24, suffix: "hr", label: "Turnaround", desc: "Urgent cover available" },
  { value: 100, suffix: "%", label: "Compliance Checked", desc: "Right-to-work verified" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  return (
    <span className="stat-number">
      {count.toLocaleString()}<sup>{suffix}</sup>
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="site-width">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <CountUp target={s.value} suffix={s.suffix} active={active} />
              <div className="stat-label">{s.label}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
