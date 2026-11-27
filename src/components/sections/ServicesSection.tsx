import { ArrowUpRight, Boxes, ChefHat, Forklift, HardHat, Package, Truck } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Warehouse Operations",
    description: "Pickers, packers, loaders, sorters and general warehouse operatives — ready for any shift pattern.",
    icon: Boxes,
    color: "yellow-ic",
    slug: "warehouse",
  },
  {
    number: "02",
    title: "Picking & Packing",
    description: "Experienced pick-and-pack staff for distribution centres, e-commerce fulfilment and cold-chain operations.",
    icon: Package,
    color: "amber",
    slug: "warehouse",
  },
  {
    number: "03",
    title: "Forklift Operators",
    description: "Certified FLT, reach truck and counterbalance operators for warehouses, distribution and logistics sites.",
    icon: Forklift,
    color: "white-ic",
    slug: "forklift",
  },
  {
    number: "04",
    title: "General Labour",
    description: "Reliable general operatives for production lines, events, cleaning and site-based labouring roles.",
    icon: HardHat,
    color: "gray",
    slug: "warehouse",
  },
  {
    number: "05",
    title: "Hospitality & Dining",
    description: "Kitchen staff, servers, bar teams and front-of-house professionals for restaurants, hotels and events.",
    icon: ChefHat,
    color: "yellow-ic",
    slug: "hospitality",
  },
  {
    number: "06",
    title: "Truck & HGV Driving",
    description: "Qualified LGV and HGV drivers, same-day cover and long-term contracts. All licence categories covered.",
    icon: Truck,
    color: "amber",
    slug: "driving",
  },
];

export function ServicesSection() {
  return (
    <section className="services section-pad" id="services">
      <div className="site-width">
        <div className="section-topline">
          <div>
            <p className="eyebrow">What we supply</p>
            <h2 className="section-heading">The right staff for every job.</h2>
          </div>
          <p className="section-intro">
            From a single shift to a full crew — capable, vetted people ready to get to work, across six specialist areas.
          </p>
        </div>

        <div
          className="service-grid"
          style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          {services.map(({ number, title, description, icon: Icon, color, slug }) => (
            <a className="service-item" href={`/services/${slug}`} key={title}>
              <div className={`service-icon ${color}`}><Icon aria-hidden="true" /></div>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
