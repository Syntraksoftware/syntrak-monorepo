"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AppleIcon } from "./icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Coaching", href: "/ai" },
  { label: "Research", href: "/research" },
  { label: "App", href: "/ios" },
  { label: "Enterprise", href: "/enterprise" },
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
          <Link href="/" className="raycast-navbar-logo" aria-label="Syntrak home">
            <Image
              src="/logos/white_logo.png"
              alt="Syntrak"
              width={132}
              height={32}
              className="raycast-navbar-logo-image"
              priority
            />
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
              Pre-order now
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
