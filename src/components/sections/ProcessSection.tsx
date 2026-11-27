import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Browse our services",
    description:
      "Find the staffing solution that fits — whether you need warehouse operatives, forklift drivers, hospitality teams or HGV drivers.",
  },
  {
    title: "Submit your request",
    description:
      "Employers submit a staffing request; job seekers fill in a quick application. Both take under 2 minutes.",
  },
  {
    title: "We verify & match",
    description:
      "Our team carries out right-to-work checks, compliance verification and matches candidates to your exact requirements.",
  },
  {
    title: "Start on shift",
    description:
      "Staff are placed and on-site — often within 24 hours. We stay close throughout to make sure everything runs smoothly.",
  },
];

export function ProcessSection() {
  return (
    <section className="process section-pad" id="process">
      <div className="site-width">
        <div className="process-heading">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="section-heading">From request to first shift.</h2>
          </div>
          <p className="section-intro">
            A fast, straightforward process designed to get the right people working
            as quickly as possible — for businesses and candidates alike.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <div className="process-step-top">
                <span>0{index + 1}</span>
                <ArrowRight aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
