import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Enterprise() {
  const features = [
    {
      title: "Advanced Security",
      description:
        "SOC 2 Type 2, ISO 27001, GDPR, HIPAA compliant. Enterprise-grade security for your sensitive data.",
      icon: "🔒",
    },
    {
      title: "SSO & Admin Controls",
      description:
        "Single Sign-On (SSO) integration, centralized admin dashboard, and granular permission controls.",
      icon: "⚙️",
    },
    {
      title: "Custom Integrations",
      description:
        "Integrate with your existing tools like Slack, Salesforce, Microsoft Teams, and more.",
      icon: "🔌",
    },
    {
      title: "Dedicated Support",
      description:
        "24/7 priority support with dedicated account manager and SLA guarantees.",
      icon: "💬",
    },
    {
      title: "Team Collaboration",
      description:
        "Share notes across teams, collaborate in real-time, and manage team access.",
      icon: "👥",
    },
    {
      title: "Custom Training",
      description:
        "Onboarding sessions, custom training programs, and best practices workshops.",
      icon: "🎓",
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
    <main className="min-h-screen bg-[#0d0d0d] text-white relative">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Syntrak for Enterprise
            </h1>
            <p className="text-xl text-[#a1a1aa] max-w-3xl mx-auto">
              Trusted by leading companies worldwide. Enterprise-grade security,
              compliance, and support for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-[#a1a1aa] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 rounded-xl mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Security & Compliance
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 rounded-lg text-[#a1a1aa] border border-white/8"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">ROI Calculator</h3>
              <p className="text-[#a1a1aa] mb-6">
                Calculate how much time and money Syntrak can save your team.
              </p>
              <a
                href="#roi-calculator"
                className="inline-block px-6 py-3 bg-[#667eea] text-white rounded-lg font-semibold hover:bg-[#5568d3] transition-all"
              >
                Calculate ROI
              </a>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Book a Demo</h3>
              <p className="text-[#a1a1aa] mb-6">
                See Syntrak in action with a personalized demo for your team.
              </p>
              <a
                href="#book-demo"
                className="inline-block px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </div>

          <div className="text-center glass-card p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-[#a1a1aa] mb-8">
              Contact our enterprise team to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:enterprise@syntrak.com"
                className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Contact Sales
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 glass-card hover:border-white/20 rounded-lg font-semibold transition-all"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

