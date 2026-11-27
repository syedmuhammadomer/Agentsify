"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-nav">
      <div className="nav-inner site-width">
        <Link className="brand" href="/" aria-label="Agentsify UK home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>Agentsify<span className="brand-period"> UK</span></span>
        </Link>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          aria-label="Main navigation"
          className={menuOpen ? "nav-links is-open" : "nav-links"}
        >
          <Link href="/#about"    onClick={closeMenu}>About Us</Link>
          <Link href="/#services" onClick={closeMenu}>Our Services</Link>
          <Link href="/#sectors"  onClick={closeMenu}>Industries</Link>
          <Link href="/#employers" onClick={closeMenu}>Employers</Link>
          <Link href="/#contact"  onClick={closeMenu}>Contact</Link>
          <Link className="nav-apply" href="/apply" onClick={closeMenu}>
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
