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
    <section className="raycast-section raycast-section-alt">
      <div className="raycast-section-inner">
        <div className="raycast-section-title mx-auto max-w-[640px] text-center">
          <h2>Advanced tracking technology</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="raycast-card p-8 text-center">
              <div className="raycast-accent-text text-4xl font-semibold">{stat.number}</div>
              <h3 className="mt-3 text-lg font-medium text-[#f4f4f6]">{stat.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9c9c9d]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
