import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import Link from "next/link";

export default function Enterprise() {
  const features = [
    {
      title: "Advanced Security",
      description:
        "SOC 2 Type 2, ISO 27001, GDPR, HIPAA compliant. Enterprise-grade security for your sensitive data.",
    },
    {
      title: "SSO & Admin Controls",
      description:
        "Single Sign-On (SSO) integration, centralized admin dashboard, and granular permission controls.",
    },
    {
      title: "Custom Integrations",
      description:
        "Integrate with your existing tools like Slack, Salesforce, Microsoft Teams, and more.",
    },
    {
      title: "Dedicated Support",
      description:
        "24/7 priority support with dedicated account manager and SLA guarantees.",
    },
    {
      title: "Team Collaboration",
      description:
        "Share notes across teams, collaborate in real-time, and manage team access.",
    },
    {
      title: "Custom Training",
      description:
        "Onboarding sessions, custom training programs, and best practices workshops.",
    },
  ];

  const certifications = [
    "SOC 2 Type 1",
    "SOC 2 Type 2",
    "ISO 27001",
    "GDPR",
    "CCPA",
    "HIPAA",
  ];

  return (
    <RaycastPageShell>
      <section className="pro-section-inner pb-20 pt-4 md:pb-24">
        <div className="pro-section-title pro-section-title-center">
          <h1 className="raycast-display">Raycast for Enterprise</h1>
          <p>
            Trusted by leading companies worldwide. Enterprise-grade security, compliance, and
            support for your organization.
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
              Calculate how much time and money Raycast can save your team.
            </p>
            <Link href="#roi-calculator" className="raycast-btn-light mt-6 inline-flex">
              Calculate ROI
            </Link>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] p-8">
            <h2 className="text-2xl font-medium text-[#f4f4f6]">Book a Demo</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#9c9c9d]">
              See Raycast in action with a personalized demo for your team.
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
