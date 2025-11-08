export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 text-white leading-tight tracking-tight">
          Syntrak
        </h1>
        <p className="text-xl sm:text-2xl font-normal text-[#a1a1aa] mb-4 tracking-wide">
          Personalized Ski Coaching via Smart Thermals
        </p>
        <p className="text-lg text-[#d1d1d6] mb-8 max-w-2xl mx-auto leading-relaxed">
          Revolutionizing ski instruction through proprietary smart thermal base layers
          with real-time AI coaching and 3D visualization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#product"
            className="px-8 py-3 glass-card text-white rounded-lg font-medium hover:border-white/12 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-3 glass-card text-white rounded-lg font-medium hover:border-white/12 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

