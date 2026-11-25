import { Boxes, ChefHat, Forklift, ShieldCheck, Truck, Zap } from "lucide-react";

const items = [
  { label: "Warehouse Operations", Icon: Boxes },
  { label: "Forklift & FLT", Icon: Forklift },
  { label: "HGV & LGV Driving", Icon: Truck },
  { label: "Hospitality & Dining", Icon: ChefHat },
  { label: "Compliance Checked", Icon: ShieldCheck },
  { label: "Same-Day Cover", Icon: Zap },
  { label: "Warehouse Operations", Icon: Boxes },
  { label: "Forklift & FLT", Icon: Forklift },
  { label: "HGV & LGV Driving", Icon: Truck },
  { label: "Hospitality & Dining", Icon: ChefHat },
  { label: "Compliance Checked", Icon: ShieldCheck },
  { label: "Same-Day Cover", Icon: Zap },
];

export function MarqueeTicker() {
  return (
    <div className="marquee-track" aria-hidden="true">
      <div className="marquee-inner">
        <ul className="marquee-list" aria-hidden="true">
          {items.map(({ label, Icon }, i) => (
            <li key={i} style={{ display: "contents" }}>
              <span>
                <Icon aria-hidden="true" />
                {label}
              </span>
            </li>
          ))}
        </ul>
        {/* duplicate for seamless loop */}
        <ul className="marquee-list" aria-hidden="true">
          {items.map(({ label, Icon }, i) => (
            <li key={i} style={{ display: "contents" }}>
              <span>
                <Icon aria-hidden="true" />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
