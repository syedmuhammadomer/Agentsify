import {
  Award,
  Clock,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24-Hour Placement",
    description:
      "Get the right staff on-site within 24 hours. We work around the clock to fill your vacancies fast — including same-day emergency cover.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Compliant",
    description:
      "Every worker is right-to-work verified and compliance checked before they set foot on your site. Zero risk to your business.",
  },
  {
    icon: MapPin,
    title: "UK-Wide Coverage",
    description:
      "We support businesses and workers across all UK regions — from London to Manchester, Birmingham to Leeds and beyond.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Your own account manager on hand to handle everything from first contact to on-site cover. One call, fully sorted.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Workforce",
    description:
      "Single shifts, short-term contracts or long-term placements — we scale up or down to meet your exact requirements at any time.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Pre-vetted, experienced workers who show up on time and get the job done to your standards. No surprises, no let-downs.",
  },
];

export function WhyUsSection() {
  return (
    <section className="why-us section-pad" id="why-us">
      <div className="site-width">
        <div className="why-us-heading-row">
          <div>
            <p className="eyebrow">Why Agentsify UK</p>
            <h2 className="section-heading">The staffing agency businesses trust.</h2>
          </div>
          <p className="section-intro" style={{ marginTop: 0 }}>
            We built Agentsify UK because businesses needed a faster, more reliable way
            to get the right staff — without the headaches.
          </p>
        </div>

        <div className="why-grid">
          {features.map(({ icon: Icon, title, description }) => (
            <div className="why-card" key={title}>
              <div className="why-icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
