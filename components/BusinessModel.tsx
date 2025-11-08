export default function BusinessModel() {
  const basicFeatures = [
    "Basic logging functionality",
    "Distance tracking",
    "Simple post-session reports",
    "Limited data retention",
  ];

  const proFeatures = [
    "Real-Time Audio Coaching (core feature)",
    "Unlimited session analysis and 3D playback",
    "Advanced metrics: Edge Angle Consistency, Center of Mass Tracking",
    "Personalized drill recommendations",
    "Progress tracking",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
          Business Model & Monetization
        </h2>
        <p className="text-center text-[#a1a1aa] mb-12 max-w-2xl mx-auto">
          Flexible pricing options to suit every skier's needs
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-white text-center">
            Hardware Sales
          </h3>
          <div className="max-w-2xl mx-auto glass-card p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-4 text-white">
              Slope Thermals
            </h4>
            <p className="text-[#a1a1aa]">
              One-time purchase of smart thermal base layers and SlopeCore unit.
              Primary revenue stream for initial customer acquisition.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-[#22c55e]/20 text-[#22c55e] text-sm font-semibold rounded-full border border-[#22c55e]/30">
                FREE
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Syntrak Basic
            </h3>
            <p className="text-[#a1a1aa] mb-6">
              Perfect for getting started with Syntrak
            </p>
            <ul className="space-y-3 mb-6">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-[#a1a1aa]">
                  <span className="mr-2 text-[#22c55e] font-semibold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#71717a] italic">
              Purpose: User acquisition and engagement
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl border-2 border-[#667eea]/50 hover:scale-105 transition-all duration-300">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-sm font-semibold rounded-full">
                PRO
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Syntrak Pro
            </h3>
            <p className="text-[#a1a1aa] mb-6">
              Full-featured subscription for serious skiers
            </p>
            <ul className="space-y-3 mb-6">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-[#a1a1aa]">
                  <span className="mr-2 text-[#667eea] font-semibold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#71717a] italic">
              Purpose: Premium experience and monetization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

