"use client";

import {
  ArrowUpRight,
  CheckCircle,
  Clock3,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

const SUBJECTS = [
  "General Enquiry",
  "I want to hire staff",
  "I want to apply for work",
  "Urgent cover request",
  "Partnership enquiry",
  "Other",
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("ctaFullName") as HTMLInputElement).value,
      email:    (form.elements.namedItem("ctaEmail")    as HTMLInputElement).value,
      phone:    (form.elements.namedItem("ctaPhone")    as HTMLInputElement).value,
      subject:  (form.elements.namedItem("ctaSubject")  as HTMLSelectElement).value,
      message:  (form.elements.namedItem("ctaMessage")  as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="site-width contact-layout">

        {/* Left — contact info */}
        <div className="contact-info">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading">Let&apos;s get you on shift.</h2>
          <p className="section-intro">
            Whether you&apos;re a business looking for staff or a worker ready to apply,
            we&apos;re here to help — fast.
          </p>

          <div className="contact-details">
            <a className="contact-email" href="mailto:hello@agentsifyuk.co.uk">
              <span><Mail aria-hidden="true" /> Email our team</span>
              <strong>hello@agentsifyuk.co.uk</strong>
              <ArrowUpRight aria-hidden="true" className="contact-arrow" />
            </a>

            <div className="contact-note">
              <Phone aria-hidden="true" />
              <p>
                Call us on <strong>+44 (0) 20 0000 0000</strong><br />
                Mon–Fri, 7am–7pm. Sat 8am–2pm.
              </p>
            </div>

            <div className="contact-note">
              <Clock3 aria-hidden="true" />
              <p>
                Need urgent cover? Put <strong>URGENT COVER</strong> in your
                subject line and we&apos;ll prioritise your request immediately.
              </p>
            </div>

            <div className="contact-note">
              <MapPin aria-hidden="true" />
              <p>Supporting businesses and workers across the UK.</p>
            </div>
          </div>
        </div>

        {/* Right — contact form */}
        <div className="contact-form-wrap">
          {status === "success" ? (
            <div className="form-success">
              <CheckCircle size={56} aria-hidden="true" />
              <h3>Message Sent!</h3>
              <p>
                Thanks for getting in touch. Our team will respond within 2 hours
                on working days, or first thing the next business morning.
              </p>
            </div>
          ) : (
            <>
              <h3>Send us a message</h3>
              <form onSubmit={handleSubmit} noValidate>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ctaFullName">Full Name <span>*</span></label>
                    <input id="ctaFullName" name="ctaFullName" className="form-input" type="text" placeholder="e.g. John Smith" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ctaEmail">Email Address <span>*</span></label>
                    <input id="ctaEmail" name="ctaEmail" className="form-input" type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="ctaPhone">Phone Number</label>
                    <input id="ctaPhone" name="ctaPhone" className="form-input" type="tel" placeholder="+44 7700 000000" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ctaSubject">Subject <span>*</span></label>
                    <select id="ctaSubject" name="ctaSubject" className="form-input form-select" required defaultValue="">
                      <option value="" disabled>Select subject…</option>
                      {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="ctaMessage">Message <span>*</span></label>
                  <textarea
                    id="ctaMessage" name="ctaMessage" className="form-input"
                    rows={5} placeholder="Tell us how we can help…"
                    required style={{ resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <p className="form-error">{errorMsg}</p>
                )}

                <button className="form-submit" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <><Loader2 size={18} className="spin" aria-hidden="true" /> Sending…</>
                  ) : (
                    <>Send Message <ArrowUpRight size={18} aria-hidden="true" /></>
                  )}
                </button>

                <p className="form-note">
                  We typically respond within 2 hours on working days.
                  Your data is kept secure and never shared without consent.
                </p>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
