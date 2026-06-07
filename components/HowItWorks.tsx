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
    <section className="raycast-section raycast-section-alt">
      <div className="raycast-section-inner">
        <div className="raycast-section-title mx-auto max-w-[640px] text-center">
          <h2>Get started in 3 steps</h2>
          <p>The easiest way to improve your skiing with personalized AI coaching.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="raycast-card p-8 text-center">
              <div className="raycast-accent-text text-5xl font-semibold">{step.number}</div>
              <h3 className="mt-4 text-xl font-medium text-[#f4f4f6]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9c9c9d]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
