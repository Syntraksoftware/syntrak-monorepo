export default function RaycastAI() {
  const features = [
    {
      title: "Hear it on every turn.",
      text: "Personalised coaching cues stream straight to your earbuds while you ski — fast enough to feel like a coach beside you.",
    },
    {
      title: "See what you can't feel.",
      text: "200+ embedded sensors capture your biomechanics in real time, turning invisible movement into actionable feedback.",
    },
    {
      title: "Improve after every run.",
      text: "Daily session summaries and 3D playback help you review form, track progress, and train smarter between runs.",
    },
  ];

  return (
    <section id="ai" className="border-t border-[#242728] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="raycast-section-title max-w-[640px]">
          <h2>Your skiing just got smarter.</h2>
          <p>AI coaching where it matters most — on the mountain, in real time.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d]">
          <div className="border-b border-[#242728] px-5 py-4">
            <div className="rounded-lg border border-[#242728] bg-[#07080a] px-4 py-3 text-sm text-[#9c9c9d]">
              Reviewing today&apos;s session…
            </div>
          </div>
          <div className="grid gap-px bg-[#242728] md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="bg-[#0d0d0d] p-6">
                <h3 className="text-base font-medium leading-snug text-[#f4f4f6]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9c9c9d]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
