export default function Undetectable() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white mb-4">
          Seamless integration. No distractions.
        </h2>
        <p className="text-center text-[#a1a1aa] mb-12 text-lg">
          How does Syntrak stay unobtrusive?
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Traditional Coaching
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-[#a1a1aa]">Requires instructor presence</span>
              </div>
              <div className="text-sm text-[#71717a] italic">
                Limited availability and high cost
              </div>
            </div>
          </div>
          <div className="glass-card p-8 rounded-xl border-2 border-[#667eea]">
            <h3 className="text-xl font-semibold mb-4 text-white">Syntrak</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-[#a1a1aa]">
                  Integrated into your base layer, invisible to others
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-[#a1a1aa]">Available anytime, anywhere</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-[#a1a1aa]">Personalized coaching 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

