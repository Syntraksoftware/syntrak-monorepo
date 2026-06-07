"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RaycastLogoFull, RaycastLogoIcon, AppleIcon } from "./icons";

const navLinks = [
  { label: "AI", href: "/ai" },
  { label: "Pro", href: "/pro" },
  { label: "iOS", href: "/ios" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

function NavToggle({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`raycast-nav-toggle ${open ? "raycast-nav-toggle-open" : ""}`}
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <span className="raycast-nav-toggle-line" />
      <span className="raycast-nav-toggle-line" />
      <span className="raycast-nav-toggle-line" />
    </button>
  );
}

export default function RaycastNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navbar = (
    <div
      id="navbar"
      className={`raycast-navbar-container ${menuOpen ? "raycast-navbar-container-open" : ""}`}
    >
      <div className={`raycast-navbar ${menuOpen ? "raycast-navbar-expanded" : ""}`}>
        <div className="raycast-navbar-top">
          <Link href="/" className="raycast-navbar-logo" aria-label="Raycast home">
            <RaycastLogoIcon className="raycast-logo-icon" />
            <RaycastLogoFull className="raycast-logo-full" />
          </Link>
          <NavToggle open={menuOpen} onClick={() => setMenuOpen((open) => !open)} />
        </div>

        <nav className="raycast-navbar-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`raycast-nav-link ${pathname === link.href ? "raycast-nav-link-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="raycast-navbar-actions">
          <div className="raycast-navbar-actions-wide">
            <Link href="/users/sign_in" className="raycast-nav-link">
              Log in
            </Link>
            <Link href="/#download" className="raycast-btn-light">
              <AppleIcon />
              Download
            </Link>
          </div>
          <div className="raycast-navbar-actions-medium">
            <Link href="/users/sign_in" className="raycast-btn-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(navbar, document.body);
}
