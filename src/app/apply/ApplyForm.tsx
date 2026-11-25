"use client";

import { ArrowUpRight, CheckCircle, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const positions = [
  "Warehouse Operative",
  "Forklift / FLT Operator",
  "Reach Truck Operator",
  "Hospitality - Kitchen Staff",
  "Hospitality - Front of House",
  "Hospitality - Bar Staff",
  "HGV / Truck Driver (Class 1)",
  "LGV Driver (Class 2)",
  "Multi-Drop Driver",
  "General Labour",
  "Other",
];

export function ApplyForm() {
  const searchParams = useSearchParams();
  const preselectedPosition = searchParams.get("position") ?? "";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      shareCode: (form.elements.namedItem("shareCode") as HTMLInputElement).value,
      position: (form.elements.namedItem("position") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/apply", {
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

  if (status === "success") {
    return (
      <div className="apply-form apply-success">
        <CheckCircle size={56} aria-hidden="true" />
        <h3>Application Received!</h3>
        <p>
          Thank you for applying. Our team will review your details and be in touch shortly
          to discuss available shifts.
        </p>
      </div>
    );
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name <span>*</span></label>
          <input
            className="form-input"
            id="fullName"
            name="fullName"
            placeholder="e.g. John Smith"
            required
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address <span>*</span></label>
          <input
            className="form-input"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number <span>*</span></label>
          <input
            className="form-input"
            id="phone"
            name="phone"
            placeholder="+44 7700 000000"
            required
            type="tel"
          />
        </div>
        <div className="form-group">
          <label htmlFor="shareCode">
            Share Code / Passport No. <span>*</span>
          </label>
          <input
            className="form-input"
            id="shareCode"
            name="shareCode"
            placeholder="e.g. ABC 123 456 or passport number"
            required
            type="text"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Home Address <span>*</span></label>
        <input
          className="form-input"
          id="address"
          name="address"
          placeholder="e.g. 12 High Street, London, E1 2AB"
          required
          type="text"
        />
      </div>

      <div className="form-group">
        <label htmlFor="position">Position Applying For <span>*</span></label>
        <select
          className="form-input form-select"
          id="position"
          name="position"
          required
          defaultValue={preselectedPosition || ""}
        >
          <option value="" disabled>Select a position...</option>
          {positions.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p style={{ color: "#ff6b6b", fontSize: "0.9rem", margin: "0 0 1rem" }}>
          {errorMsg}
        </p>
      )}

      <button className="form-submit" disabled={status === "loading"} type="submit">
        {status === "loading" ? (
          <><Loader2 size={18} className="spin" aria-hidden="true" /> Submitting...</>
        ) : (
          <>Submit Application <ArrowUpRight size={18} aria-hidden="true" /></>
        )}
      </button>
      <p className="form-note">
        By submitting, you agree to Agentsify UK processing your details for employment purposes.
        Your data is kept secure and will never be shared without your consent.
      </p>
    </form>
  );
}
