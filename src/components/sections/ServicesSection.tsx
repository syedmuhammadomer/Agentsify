import { ArrowUpRight, Boxes, ChefHat, Forklift, Truck } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Warehouse Operations",
    description: "Pickers, packers, loaders and general warehouse operatives — ready for any shift.",
    icon: Boxes,
    color: "yellow-ic",
    slug: "warehouse",
  },
  {
    number: "02",
    title: "Forklift Operators",
    description: "Certified FLT and reach truck operators for warehouses, distribution and logistics sites.",
    icon: Forklift,
    color: "amber",
    slug: "forklift",
  },
  {
    number: "03",
    title: "Hospitality & Dining",
    description: "Kitchen staff, servers, bar staff and front-of-house teams for restaurants and events.",
    icon: ChefHat,
    color: "white-ic",
    slug: "hospitality",
  },
  {
    number: "04",
    title: "Truck & HGV Driving",
    description: "Qualified LGV and HGV drivers, same-day cover and long-term contracts available.",
    icon: Truck,
    color: "gray",
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
          <p className="section-intro">From a single shift to a full crew — capable, vetted people ready to get to work.</p>
        </div>
        <div className="service-grid">
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
