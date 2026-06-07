export default function RaycastAI() {
  const features = [
    {
      title: "Ask Anything, Anytime, Anywhere.",
      text: "Quick AI combines the power of AI with the web to answer any question.",
    },
    {
      title: "Always On ChatGPT.",
      text: "Stuck while coding? Need help writing an email? Meet your new virtual assistant.",
    },
    {
      title: "Your Automation Assistant.",
      text: "Create your own AI Commands to automate repetitive tasks and eliminate chores.",
    },
  ];

  return (
    <section id="ai" className="border-t border-[#242728] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="raycast-section-title max-w-[640px]">
          <h2>Your Mac just got smarter.</h2>
          <p>AI where it&apos;s most useful - on your OS.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d]">
          <div className="border-b border-[#242728] px-5 py-4">
            <div className="rounded-lg border border-[#242728] bg-[#07080a] px-4 py-3 text-sm text-[#9c9c9d]">
              Search for apps and commands...
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
