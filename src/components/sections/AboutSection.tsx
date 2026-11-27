import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="about section-pad" id="about">
      <div className="site-width about-grid">
        <div className="about-lead">
          <p className="eyebrow">About Agentsify UK</p>
          <h2 className="section-heading">When work can&apos;t wait, we deliver.</h2>
        </div>
        <div className="about-copy">
          <p className="section-intro">
            Agentsify UK is a specialist staffing agency supplying trusted workers to businesses
            across the UK. We place warehouse operatives, forklift drivers, hospitality staff,
            HGV drivers and more — on daily shifts, short-term contracts or long-term placements.
            Every worker is vetted, compliance-checked and ready to deliver from day one.
          </p>
          <a className="text-link" href="#process">
            How we work <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="site-width promise-strip">
        <div className="promise-item">
          <span className="promise-index">01</span>
          <p>Compliance &amp; right-to-work checked</p>
        </div>
        <div className="promise-item">
          <span className="promise-index">02</span>
          <p>Daily shifts &amp; urgent cover</p>
        </div>
        <div className="promise-item">
          <span className="promise-index">03</span>
          <p>Dedicated account management</p>
        </div>
      </div>
    </section>
  );
}
