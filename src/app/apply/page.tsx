import { Metadata } from "next";
import { Suspense } from "react";
import { ApplyForm } from "./ApplyForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Apply Now | Agentsify UK",
  description: "Apply to work with Agentsify UK. We place warehouse operatives, forklift operators, hospitality staff and HGV drivers across the UK.",
};

export default function ApplyPage() {
  return (
    <div className="apply-page">
      <Navbar />
      <section className="apply-hero">
        <div className="site-width">
          <p className="eyebrow">Join our workforce</p>
          <h1>
            Start your<br />
            <span>next shift.</span>
          </h1>
          <p>Fill in the form below and our team will be in touch to get you placed and earning as soon as possible.</p>
        </div>
      </section>
      <div className="apply-form-wrap">
        <div className="site-width">
          <Suspense fallback={<div style={{ color: "var(--muted)" }}>Loading form...</div>}>
            <ApplyForm />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}
