import { ArrowUpRight } from "lucide-react";

export function ApplyBanner() {
  return (
    <section className="apply-banner" id="apply">
      <div className="site-width apply-banner-inner">
        <div>
          <h2>Ready to start your next shift?</h2>
          <p>Apply today — it takes just 2 minutes to submit your details and join our workforce.</p>
        </div>
        <a className="apply-banner-cta" href="/apply">
          Apply Now <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
