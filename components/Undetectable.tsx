export default function Undetectable() {
  return (
    <section className="raycast-section">
      <div className="raycast-section-inner">
        <div className="raycast-section-title mx-auto max-w-[640px] text-center">
          <h2>Seamless integration. No distractions.</h2>
          <p>How does Syntrak stay unobtrusive?</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="raycast-card p-8">
            <h3 className="text-lg font-medium text-[#f4f4f6]">Traditional Coaching</h3>
            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff6161]" />
                <span className="text-sm text-[#9c9c9d]">Requires instructor presence</span>
              </div>
              <p className="text-sm italic text-[#6a6b6c]">Limited availability and high cost</p>
            </div>
          </div>
          <div className="raycast-card raycast-card-accent p-8">
            <h3 className="text-lg font-medium text-[#f4f4f6]">Syntrak</h3>
            <div className="mt-5 space-y-4">
              {[
                "Integrated into your base layer, invisible to others",
                "Available anytime, anywhere",
                "Personalized coaching 24/7",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#59d499]" />
                  <span className="text-sm text-[#9c9c9d]">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
