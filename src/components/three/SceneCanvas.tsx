"use client";

import { CheckCircle2 } from "lucide-react";

const PLACEMENTS = [
  { initials: "JT", name: "James T.",   role: "HGV Driver",      cls: "hv-pc-tl", delay: "0s"    },
  { initials: "SM", name: "Sarah M.",   role: "Forklift Op.",    cls: "hv-pc-tr", delay: "0.25s" },
  { initials: "LB", name: "Lisa B.",    role: "Chef de Partie",  cls: "hv-pc-bl", delay: "0.5s"  },
  { initials: "MK", name: "Marcus K.",  role: "Warehouse Op.",   cls: "hv-pc-br", delay: "0.75s" },
] as const;

export default function SceneCanvas() {
  return (
    <div className="hv-wrap" aria-hidden="true">

      {/* Decorative rotating rings */}
      <div className="hv-ring hv-ring-1" />
      <div className="hv-ring hv-ring-2" />
      <div className="hv-ring hv-ring-3" />

      {/* Animated placement cards */}
      {PLACEMENTS.map((p) => (
        <div
          key={p.initials}
          className={`hv-pcard ${p.cls}`}
          style={{ animationDelay: p.delay }}
        >
          <div className="hv-pcard-av">{p.initials}</div>
          <div className="hv-pcard-info">
            <strong>{p.name}</strong>
            <span>{p.role}</span>
          </div>
          <div className="hv-pcard-status">
            <CheckCircle2 size={10} />
            <span>Placed</span>
          </div>
        </div>
      ))}

      {/* Central metric card */}
      <div className="hv-card">
        <div className="hv-card-header">
          <span className="hv-live-dot" />
          <span>Live Network</span>
        </div>
        <div className="hv-card-stat">
          2,000<span className="hv-card-plus">+</span>
        </div>
        <div className="hv-card-label">Workers Placed</div>
        <ul className="hv-card-checks">
          <li><CheckCircle2 size={11} /><span>Right-to-work verified</span></li>
          <li><CheckCircle2 size={11} /><span>All UK regions covered</span></li>
          <li><CheckCircle2 size={11} /><span>24 hr turnaround</span></li>
        </ul>
      </div>

      <div className="hv-grid-accent" />
    </div>
  );
}
