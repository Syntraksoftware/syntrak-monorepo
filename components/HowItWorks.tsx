export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Start Syntrak",
      description: "Simply put on your Syntrak smart thermal base layer before hitting the slopes.",
    },
    {
      number: "2",
      title: "Ski & Learn",
      description: "Ski naturally while Syntrak tracks your movements and provides real-time coaching.",
    },
    {
      number: "3",
      title: "Review & Improve",
      description:
        "Syntrak uses what it tracked to generate detailed insights and personalized training recommendations.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white mb-4">
          Get started in 3 steps
        </h2>
        <p className="text-center text-[#a1a1aa] mb-16 max-w-2xl mx-auto text-lg">
          The easiest way to improve your skiing with personalized AI coaching.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl font-bold text-[#667eea] mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

