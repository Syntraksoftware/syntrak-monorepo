"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Product", href: "#product" },
    { label: "Technology", href: "#technology" },
    { label: "Features", href: "#features" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <Image
            src="/syntrak-logo.png"
            alt="Syntrak"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </a>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href} className="nav-item">
              <a href={item.href} className="nav-link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-contact-btn" onClick={closeMenu}>
          Contact
        </a>

        <button className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

