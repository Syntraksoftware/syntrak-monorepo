import Link from "next/link";
import { AppleIcon, RaycastLogoIcon, WindowsIcon } from "./icons";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "AI Coaching", href: "/ai" },
      { label: "Syntrak Pro", href: "/pro" },
      { label: "Mobile App", href: "/ios" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Smart Thermals", href: "/ai" },
      { label: "Biomechanics", href: "/ai" },
      { label: "Privacy & Security", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Founders Edition", href: "/pricing" },
      { label: "FAQ", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];

export default function RaycastFooter() {
  return (
    <footer className="border-t border-[#242728] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/">
              <RaycastLogoIcon className="h-10 w-10" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#9c9c9d]">
              See Every Movement. Master Every Run.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-[#f4f4f6]">{col.title}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9c9c9d] transition-colors hover:text-[#f4f4f6]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[#242728] pt-10">
          <h3 className="raycast-display-lg text-center">Master every run.</h3>
          <p className="mt-3 text-center text-[#cdcdcd]">
            Pre-order the Founders Edition smart thermal — ships Q4 2026.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#download" className="raycast-btn">
              <AppleIcon />
              Download for iOS
            </Link>
            <Link href="/#download" className="raycast-btn">
              <WindowsIcon />
              Download for Android
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-[#9c9c9d]">
            <span>iOS 16+</span>
            <span>Android 12+</span>
            <span>Ships to 42 countries</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#242728] pt-8 text-xs text-[#6a6b6c] md:flex-row">
          <p>© {new Date().getFullYear()} Syntrak. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#9c9c9d]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#9c9c9d]">
              Terms
            </a>
            <a href="#" className="hover:text-[#9c9c9d]">
              Manage Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
