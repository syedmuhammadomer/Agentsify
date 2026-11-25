import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="site-width contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading">Let&apos;s get you on shift.</h2>
          <p className="section-intro">Whether you&apos;re a business looking for staff or a worker ready to apply, we&apos;re here to help.</p>
        </div>
        <div className="contact-details">
          <a className="contact-email" href="mailto:hello@agentsifyuk.co.uk">
            <span><Mail aria-hidden="true" /> Email our team</span>
            <strong>hello@agentsifyuk.co.uk</strong>
            <ArrowUpRight aria-hidden="true" className="contact-arrow" />
          </a>
          <div className="contact-note"><Phone aria-hidden="true" /><p>Call us on <strong>+44 (0) 20 0000 0000</strong> — Mon–Fri, 7am–7pm.</p></div>
          <div className="contact-note"><Clock3 aria-hidden="true" /><p>Need urgent cover? Put <strong>URGENT COVER</strong> in your subject line.</p></div>
          <div className="contact-note"><MapPin aria-hidden="true" /><p>Supporting businesses and workers across the UK.</p></div>
        </div>
      </div>
    </section>
  );
}
