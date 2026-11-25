import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Browse our services",
    description: "Find the role that matches your skills — warehouse, forklift, hospitality, or driving.",
  },
  {
    title: "Submit your application",
    description: "Fill in your details, sharecode or passport number, and what you&apos;re looking for.",
  },
  {
    title: "We verify & onboard",
    description: "Our team carries out right-to-work checks and compliance verification quickly.",
  },
  {
    title: "Start your shifts",
    description: "Get placed and start earning. We stay close to make sure everything runs smoothly.",
  },
];

export function ProcessSection() {
  return (
    <section className="process section-pad" id="process">
      <div className="site-width">
        <div className="process-heading">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="section-heading">From application to first shift.</h2>
          </div>
          <p className="section-intro">A fast, straightforward process designed to get you working as quickly as possible.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <div className="process-step-top"><span>0{index + 1}</span><ArrowRight aria-hidden="true" /></div>
              <h3>{step.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: step.description }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
