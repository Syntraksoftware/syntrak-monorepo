export default function Transcription() {
  const stats = [
    {
      number: "100+",
      label: "Ski Resorts",
      description:
        "We support tracking and coaching at over 100 different ski resorts worldwide, including major destinations.",
    },
    {
      number: "Real-time",
      label: "Feedback",
      description:
        "Get instant coaching feedback as you ski. Our system processes data in real-time for immediate insights.",
    },
    {
      number: "95%",
      label: "Accuracy",
      description:
        "Trusted by professional skiers for reliable movement tracking. All processed with industry-leading accuracy.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white mb-16">
          Advanced tracking technology
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-[#667eea] mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {stat.label}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

