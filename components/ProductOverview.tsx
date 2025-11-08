export default function ProductOverview() {
  const metrics = [
    "Knee angulation",
    "Hip flexion/extension",
    "Torso rotation",
    "Fore/aft pressure distribution",
    "Lateral balance shift",
  ];

  const appComponents = [
    {
      name: "Data Ingestion",
      description: "Receives raw telemetry from SlopeCore via BLE",
      tech: "Custom Data Protocol, Bluetooth Stack",
    },
    {
      name: "3D Visualization",
      description: "Renders customizable avatar mirroring skier's body pose in real-time",
      tech: "React App (simulated graphic representation)",
    },
    {
      name: "AI Coaching Engine",
      description: "Proprietary ML model comparing skier's pose to optimal dynamic form",
      tech: "Pre-defined logical rules (MVP) to generate feedback",
    },
    {
      name: "Feedback Loop",
      description: "Delivers actionable, concise instructions to headphones in real-time",
      tech: "Text-to-Speech (TTS) or pre-recorded audio snippets",
    },
    {
      name: "Session Review",
      description: "Post-session analysis with metrics graphs, slow-motion playback, personalized drills",
      tech: "Local/Cloud storage of session data",
    },
  ];

  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
          Product Overview
        </h2>

        {/* Smart Clothing */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Smart Clothing (Slope Thermals)
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Sensing Technology
              </h4>
              <ul className="space-y-2 text-[#a1a1aa]">
                <li>• Integrated, multi-point, textile-based sensors</li>
                <li>• Woven into garment seam lines and key flex zones</li>
                <li>• Captures changes in angle, pressure distribution, and strain</li>
                <li>• Flexible, conformable sensing technology</li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Key Metrics Captured
              </h4>
              <ul className="space-y-2 text-[#a1a1aa]">
                {metrics.map((metric, index) => (
                  <li key={index}>• {metric}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 glass-card p-6 rounded-xl border-2 border-[#667eea]/30">
            <h4 className="text-xl font-semibold mb-3 text-white">
              Data Hub (SlopeCore)
            </h4>
            <p className="text-[#a1a1aa]">
              Small, washable, detachable unit at the waist that collects sensor data,
              processes it locally, and transmits via low-energy Bluetooth (BLE).
            </p>
          </div>
        </div>

        {/* Mobile Application */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Mobile Application (The Syntrak Coach)
          </h3>
          <p className="text-lg text-[#a1a1aa] mb-8">
            A comprehensive mobile application that receives sensor data, visualizes the
            skier's form in 3D, analyzes performance using AI, and delivers real-time
            coaching feedback.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appComponents.map((component, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {component.name}
                </h4>
                <p className="text-sm text-[#a1a1aa] mb-3">
                  {component.description}
                </p>
                <p className="text-xs text-[#667eea] font-semibold">
                  {component.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

