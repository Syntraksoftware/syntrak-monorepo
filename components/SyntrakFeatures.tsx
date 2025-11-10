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
    <section className="pt-60 pb-20 px-4 sm:px-6 lg:px-8 relative z-10" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white mb-16">
          Four ways we revolutionize your skiing
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

