export default function ValuePropositions() {
  const primaryValues = [
    {
      title: "Accessibility",
      description: "Professional-grade instruction available anytime, anywhere",
      details: ["No need to book expensive lessons", "Practice on your own schedule"],
    },
    {
      title: "Objectivity",
      description: "Data-driven feedback eliminates subjective interpretation",
      details: ["Consistent analysis based on biomechanical data", "No instructor bias or variability"],
    },
    {
      title: "Real-Time",
      description: "Instant corrections during runs, not just post-session",
      details: ["Immediate feedback when it matters most", "Learn and adjust in the moment"],
    },
    {
      title: "Comfort",
      description: "Seamless integration into existing gear",
      details: ["No bulky equipment or external cameras", "Unobtrusive technology"],
    },
    {
      title: "Personalization",
      description: "AI adapts to individual skier's form and progress",
      details: ["Customized feedback and recommendations", "Tracks improvement over time"],
    },
  ];

  const secondaryBenefits = [
    "Cost-effective alternative to private lessons",
    "Privacy: practice without judgment",
    "Convenience: always available",
    "Progress tracking and analytics",
    "Educational: learn proper form through visualization",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
          Value Propositions
        </h2>
        <p className="text-center text-[#a1a1aa] mb-12 max-w-2xl mx-auto">
          Why Syntrak is the future of ski instruction
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {primaryValues.map((value, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {value.title}
              </h3>
              <p className="text-[#a1a1aa] mb-4">
                {value.description}
              </p>
              <ul className="space-y-1">
                {value.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="text-sm text-[#71717a]"
                  >
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Additional Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2 text-[#667eea] font-semibold">•</span>
                <span className="text-[#d1d1d6]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

