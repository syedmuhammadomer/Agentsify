import { ArrowUpRight, Boxes, Building2, ChefHat, Forklift, Package, Truck } from "lucide-react";

const sectors = [
  {
    name: "Warehousing",
    detail: "Pickers, packers & general operatives.",
    icon: Boxes,
    tone: "sector-black",
  },
  {
    name: "Forklift & FLT",
    detail: "Certified operators for all site types.",
    icon: Forklift,
    tone: "sector-yellow",
  },
  {
    name: "Hospitality",
    detail: "Front-of-house, kitchen & bar teams.",
    icon: ChefHat,
    tone: "sector-dark",
  },
  {
    name: "HGV & Driving",
    detail: "LGV, HGV and multi-drop drivers.",
    icon: Truck,
    tone: "sector-gray",
  },
  {
    name: "Logistics",
    detail: "Distribution, fulfilment & cold-chain.",
    icon: Package,
    tone: "sector-dark",
  },
  {
    name: "Manufacturing",
    detail: "Production lines & assembly workers.",
    icon: Building2,
    tone: "sector-black",
  },
];

export function PortfolioSection() {
  return (
    <section className="sectors section-pad" id="sectors">
      <div className="site-width">
        <div className="section-topline">
          <div>
            <p className="eyebrow">Industries we serve</p>
            <h2 className="section-heading">Built for the jobs that keep Britain moving.</h2>
          </div>
          <p className="section-intro">
            Specialist staffing solutions across six key sectors — daily shifts,
            urgent cover and long-term placements.
          </p>
        </div>

        <div
          className="sector-grid"
          style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          {sectors.map(({ name, detail, icon: Icon, tone }) => (
            <a className={`sector-tile ${tone}`} href="#employers" key={name}>
              <span className="sector-art"><Icon aria-hidden="true" /></span>
              <span className="sector-copy">
                <span>{detail}</span>
                <strong>{name}</strong>
              </span>
              <span className="sector-link" aria-hidden="true"><ArrowUpRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
