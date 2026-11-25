import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getService, services } from "./serviceData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} ${service.titleHighlight} | Agentsify UK`,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <div className="service-page">
      <Navbar />

      {/* Hero */}
      <section className="service-hero">
        <div className="site-width">
          <div className="service-hero-badge">{service.badge}</div>
          <h1>
            {service.title}
            <span>{service.titleHighlight}</span>
          </h1>
          <p>{service.intro}</p>
          <div className="service-hero-actions">
            <Link className="button button-yellow" href="/apply">
              Apply Now <ArrowUpRight aria-hidden="true" />
            </Link>
            <a className="button button-outline" href="/#contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="service-body">
        <div className="site-width">
          <div className="service-detail-grid">
            {/* What we provide */}
            <div className="service-detail-col">
              <h2>What we provide</h2>
              <ul className="service-detail-list">
                {service.whatWeProvide.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="service-info-box" style={{ marginTop: "2.5rem" }}>
                <h3>{service.infoBox.heading}</h3>
                <p>{service.infoBox.body}</p>
              </div>
            </div>

            {/* Requirements + CTA */}
            <div className="service-detail-col">
              <h2>What you&apos;ll need</h2>
              <ul className="service-detail-list">
                {service.requirements.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="service-info-box" style={{ marginTop: "2.5rem", borderColor: "var(--yellow-border)", background: "var(--yellow-muted)" }}>
                <h3 style={{ color: "var(--yellow)" }}>Ready to apply?</h3>
                <p style={{ marginBottom: "1.25rem" }}>
                  It only takes a few minutes. Fill in your details and our team will be in
                  touch within one working day.
                </p>
                <Link
                  className="button button-yellow"
                  href={`/apply?position=${encodeURIComponent(service.position)}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Apply for this role <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
