export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          AI coaching that helps you improve, session by session.
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-8">
          Try Syntrak on your next ski session today.
        </p>
        <a
          href="#get-started"
          className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

