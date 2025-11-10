import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Syntrak",
      hardwarePrice: "$250 + shipping",
      features: [
        "Basic features",
        "Basic avatar",
        "Hardware purchase required ($250 + shipping)",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$15",
      period: "per month",
      yearlyPrice: "$165/year",
      description: "For serious skiers who want more",
      hardwarePrice: "$250 + shipping",
      features: [
        "Advanced features",
        "5-10 free avatars",
        "Hardware purchase required ($250 + shipping)",
        "Priority support",
        "Advanced analytics",
        "3D visualization",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Premium",
      price: "$30",
      period: "per month",
      yearlyPrice: "$330/year",
      description: "Everything included, no extra costs",
      hardwarePrice: "Included",
      features: [
        "Advanced+ features",
        "Unlimited avatars",
        "Hardware and shipping included",
        "24/7 priority support",
        "Advanced analytics",
        "3D visualization",
        "Personalized training plans",
        "Dedicated account manager",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white relative">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto">
              Choose the plan that works best for you. All plans include our core
              features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card p-8 rounded-xl relative ${
                  plan.popular
                    ? "border-2 border-[#667eea] scale-105"
                    : "border border-white/8"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#667eea] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-[#a1a1aa] ml-2">{plan.period}</span>
                  )}
                  {plan.yearlyPrice && (
                    <div className="text-sm text-[#667eea] mt-1">
                      {plan.yearlyPrice}
                    </div>
                  )}
                </div>
                <p className="text-[#a1a1aa] mb-2">{plan.description}</p>
                {plan.hardwarePrice && (
                  <p className="text-sm text-[#71717a] mb-6">
                    Hardware: {plan.hardwarePrice}
                  </p>
                )}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#667eea] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#a1a1aa]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#get-started"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-100"
                      : "glass-card hover:border-white/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#a1a1aa] mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className="text-sm text-[#71717a]">
              Questions? <a href="/enterprise" className="text-[#667eea] hover:underline">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

