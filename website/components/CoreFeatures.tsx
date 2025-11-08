export default function CoreFeatures() {
  const features = [
    {
      title: "Real-Time Pose Comparison",
      description: "Instantly highlights deviation from optimal carve/turn geometry on 3D avatar",
      details: [
        "Visual feedback showing exact form issues",
        "Comparison against ideal skiing form",
      ],
    },
    {
      title: "Audio Coach",
      description: "Timed, 1-3 second audio commands delivered instantly to correct mistakes",
      details: [
        "Actionable, concise instructions",
        "Hands-free operation via headphones",
      ],
    },
    {
      title: "Balance Map",
      description: "Visual display showing weight distribution and pressure points",
      details: [
        "Inside/outside ski balance tracking",
        "Fore/aft pressure visualization",
        "Real-time balance monitoring",
      ],
    },
    {
      title: "Drill Library Integration",
      description: "Automatically suggests specific drills based on persistent flaws",
      details: [
        "Personalized training recommendations",
        "Progress tracking for drill completion",
      ],
    },
    {
      title: "Session Review & Analytics",
      description: "Comprehensive post-session analysis with detailed insights",
      details: [
        "Slow-motion playback of 3D avatar",
        "Prioritized list of personalized drills",
        "Historical progress tracking",
      ],
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
          Core Features
        </h2>
        <p className="text-center text-[#a1a1aa] mb-12 max-w-2xl mx-auto">
          Powerful features that deliver professional-grade ski instruction directly to you
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-[#a1a1aa] mb-4">
                {feature.description}
              </p>
              <ul className="space-y-1">
                {feature.details.map((detail, detailIndex) => (
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
      </div>
    </section>
  );
}

