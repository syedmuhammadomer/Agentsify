import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-main">
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>Agentsify<span className="brand-period"> UK</span></span>
        </Link>

        <p>Right people. Right shift. Every time.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <a className="footer-contact" href="mailto:hello@agentsifyuk.co.uk">
            <Mail aria-hidden="true" /> hello@agentsifyuk.co.uk <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="footer-contact" href="tel:+442000000000">
            <Phone aria-hidden="true" /> +44 (0) 20 0000 0000
          </a>
        </div>
      </div>

      <div className="site-width footer-bottom">
        <span>© {new Date().getFullYear()} Agentsify UK Ltd. All rights reserved.</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/#employers">Hire Staff</Link>
          <Link href="/apply">Apply Now</Link>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
