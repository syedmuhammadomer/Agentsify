"use client";

import { ArrowUpRight, CheckCircle, Clock, Loader2, ShieldCheck, Users, Zap } from "lucide-react";
import { useState } from "react";

const STAFF_TYPES = [
  "Warehouse Operative",
  "Forklift / FLT Operator",
  "Reach Truck Operator",
  "HGV Driver (Class 1)",
  "LGV Driver (Class 2)",
  "Hospitality — Kitchen Staff",
  "Hospitality — Front of House",
  "Hospitality — Bar Staff",
  "General Labour",
  "Multi-Drop Driver",
  "Mixed / Multiple Roles",
];

const STAFF_COUNTS = [
  "1–2 workers",
  "3–5 workers",
  "6–10 workers",
  "11–20 workers",
  "21–50 workers",
  "50+ workers",
];

const FEATURES = [
  {
    icon: Zap,
    title: "Staff within 24 hours",
    desc: "We move fast. Tell us your requirement and we'll confirm placement within 24 hours, often same day.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance guaranteed",
    desc: "Every worker is right-to-work verified, ID checked and health & safety briefed before arrival.",
  },
  {
    icon: Users,
    title: "Any size, any sector",
    desc: "Whether you need one operative or a full crew of 50, we have the network to deliver at scale.",
  },
  {
    icon: Clock,
    title: "Flexible terms",
    desc: "Daily shifts, weekly contracts or long-term placements — structured entirely around your operation.",
  },
];

export function EmployersSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      fullName:    (form.elements.namedItem("empFullName")  as HTMLInputElement).value,
      companyName: (form.elements.namedItem("companyName")  as HTMLInputElement).value,
      email:       (form.elements.namedItem("empEmail")     as HTMLInputElement).value,
      phone:       (form.elements.namedItem("empPhone")     as HTMLInputElement).value,
      staffType:   (form.elements.namedItem("staffType")    as HTMLSelectElement).value,
      numStaff:    (form.elements.namedItem("numStaff")     as HTMLSelectElement).value,
      location:    (form.elements.namedItem("empLocation")  as HTMLInputElement).value,
      startDate:   (form.elements.namedItem("startDate")    as HTMLInputElement).value,
      message:     (form.elements.namedItem("empMessage")   as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/employer", {
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
    <section className="employers section-pad" id="employers">
      <div className="site-width employers-layout">

        {/* Left — info */}
        <div className="employers-info">
          <p className="eyebrow">For Employers</p>
          <h2 className="section-heading">Staff your site within 24 hours.</h2>
          <p className="section-intro">
            From a single shift to a full-scale operation — we supply compliant, capable
            workers across all major industries, UK-wide.
          </p>

          <div className="employers-features">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div className="employer-feat" key={title}>
                <div className="employer-feat-icon" aria-hidden="true">
                  <Icon />
                </div>
                <div className="employer-feat-info">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="employers-form-wrap">
          {status === "success" ? (
            <div className="form-success">
              <CheckCircle size={56} aria-hidden="true" />
              <h3>Request Received!</h3>
              <p>
                Thank you for your enquiry. Our team will review your requirements and
                be in touch within 2 hours to confirm staffing availability.
              </p>
            </div>
          ) : (
            <>
              <h3>Request Staff Now</h3>
              <form onSubmit={handleSubmit} noValidate>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="empFullName">Your Name <span>*</span></label>
                    <input id="empFullName" name="empFullName" className="form-input" type="text" placeholder="e.g. David Clarke" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name <span>*</span></label>
                    <input id="companyName" name="companyName" className="form-input" type="text" placeholder="e.g. Acme Logistics Ltd" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="empEmail">Email Address <span>*</span></label>
                    <input id="empEmail" name="empEmail" className="form-input" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="empPhone">Phone Number <span>*</span></label>
                    <input id="empPhone" name="empPhone" className="form-input" type="tel" placeholder="+44 7700 000000" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="staffType">Staff Required <span>*</span></label>
                    <select id="staffType" name="staffType" className="form-input form-select" required defaultValue="">
                      <option value="" disabled>Select staff type…</option>
                      {STAFF_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="numStaff">Number of Staff <span>*</span></label>
                    <select id="numStaff" name="numStaff" className="form-input form-select" required defaultValue="">
                      <option value="" disabled>Select quantity…</option>
                      {STAFF_COUNTS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="empLocation">Site Location <span>*</span></label>
                    <input id="empLocation" name="empLocation" className="form-input" type="text" placeholder="e.g. Luton, Bedfordshire" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="startDate">Required Start Date</label>
                    <input id="startDate" name="startDate" className="form-input" type="date" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="empMessage">Additional Requirements</label>
                  <textarea
                    id="empMessage" name="empMessage" className="form-input"
                    rows={3} placeholder="Shift patterns, qualifications needed, site-specific requirements…"
                    style={{ resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <p className="form-error">{errorMsg}</p>
                )}

                <button className="form-submit" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <><Loader2 size={18} className="spin" aria-hidden="true" /> Submitting…</>
                  ) : (
                    <>Submit Request <ArrowUpRight size={18} aria-hidden="true" /></>
                  )}
                </button>

                <p className="form-note">
                  We typically respond within 2 hours. For urgent requirements,
                  call us directly on <strong>+44 (0) 20 0000 0000</strong>.
                </p>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
