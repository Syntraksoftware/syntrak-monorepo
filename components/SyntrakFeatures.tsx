export default function SyntrakFeatures() {
  const features = [
    {
      title: "Real-time AI Coaching",
      description:
        "Syntrak uses advanced sensors and AI to provide real-time coaching feedback as you ski.",
    },
    {
      title: "3D Visualization",
      description:
        "See your form and technique visualized in 3D with instant feedback on your performance.",
    },
    {
      title: "Smart Thermal Technology",
      description:
        "Proprietary smart thermal base layers that track your movements and provide personalized insights.",
    },
    {
      title: "Personalized Training",
      description:
        "Get customized training recommendations based on your skiing style and skill level.",
    },
  ];

  return (
    <section className="raycast-section">
      <div className="raycast-section-inner">
        <div className="raycast-section-title mx-auto max-w-[640px] text-center">
          <h2>Four ways we revolutionize your skiing</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="raycast-card p-6">
              <h3 className="text-lg font-medium text-[#f4f4f6]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9c9c9d]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
