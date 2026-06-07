import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import Link from "next/link";

export default function Enterprise() {
  const features = [
    {
      title: "Coach Dashboard",
      description:
        "Monitor athlete progress, assign training plans, and review biomechanical data across your entire programme.",
    },
    {
      title: "SSO & Admin Controls",
      description:
        "Single Sign-On integration, centralised admin dashboard, and granular permission controls for your staff.",
    },
    {
      title: "Custom Integrations",
      description:
        "Connect Syntrak with your existing resort systems, booking platforms, and athlete management tools.",
    },
    {
      title: "Dedicated Support",
      description:
        "Priority support with a dedicated account manager and SLA guarantees for your organisation.",
    },
    {
      title: "Team Training Plans",
      description:
        "Share coaching programmes across coaches and athletes, with unlimited shared plans on Team Pro.",
    },
    {
      title: "Onboarding & Training",
      description:
        "Onboarding sessions for your coaching staff, custom training programmes, and best-practice workshops.",
    },
  ];

  const certifications = [
    "End-to-end encryption",
    "On-device processing",
    "GDPR compliant",
    "Data export controls",
    "2FA enforcement",
    "IP allow-list",
  ];

  return (
    <RaycastPageShell>
      <section className="pro-section-inner pb-20 pt-4 md:pb-24">
        <div className="pro-section-title pro-section-title-center">
          <h1 className="raycast-display">Syntrak for Enterprise</h1>
          <p>
            Built for ski resorts, academies, and training programmes. Enterprise-grade analytics,
            admin controls, and support for your organisation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] p-6"
            >
              <h2 className="text-lg font-medium text-[#f4f4f6]">{feature.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#9c9c9d]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] p-8">
          <h2 className="text-center text-2xl font-medium text-[#f4f4f6]">
            Security & Compliance
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#101111] px-4 py-2 text-sm text-[#9c9c9d]"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] p-8">
            <h2 className="text-2xl font-medium text-[#f4f4f6]">ROI Calculator</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#9c9c9d]">
              Calculate how Syntrak can improve coaching efficiency across your ski school or academy.
            </p>
            <Link href="#roi-calculator" className="raycast-btn-light mt-6 inline-flex">
              Calculate ROI
            </Link>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] p-8">
            <h2 className="text-2xl font-medium text-[#f4f4f6]">Book a Demo</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#9c9c9d]">
              See Syntrak in action with a personalised demo for your coaching team.
            </p>
            <Link href="#book-demo" className="raycast-btn-light mt-6 inline-flex">
              Schedule Demo
            </Link>
          </div>
        </div>

        <div className="pro-enterprise-cta mt-16 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] p-10 text-center">
          <h2 className="text-2xl font-medium text-[#f4f4f6]">Ready to get started?</h2>
          <p className="mt-3 text-[#9c9c9d]">Contact our enterprise team to discuss your needs.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="mailto:hello@syntrak.com" className="raycast-btn-light">
              Contact Sales
            </Link>
            <Link href="/pricing" className="raycast-btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </RaycastPageShell>
  );
}
