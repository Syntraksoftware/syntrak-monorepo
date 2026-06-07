import Link from "next/link";
import { AppleIcon, RaycastLogoIcon } from "./icons";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "AI Coaching", href: "/ai" },
      { label: "Research", href: "/research" },
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
              <RaycastLogoIcon className="h-8 w-auto" />
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
