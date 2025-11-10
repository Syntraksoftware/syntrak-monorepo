"use client";

import Image from "next/image";

export default function SyntrakHero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-0 relative"
      style={{ marginTop: 0, overflow: 'visible', paddingLeft: 0, paddingRight: 0 }}
    >
      {/* Mountain Background Image - positioned behind header, fully displayed filling entire width with no gaps */}
      <div 
        className="absolute z-0" 
        style={{ 
          top: '-80px', 
          left: 0, 
          right: 0, 
          height: 'calc(80px + 100vh + 200px)', 
          width: '100vw',
          margin: 0,
          padding: 0
        }}
      >
        <Image
          src="/mountain2.png"
          alt="Snow-covered mountain"
          fill
          className="object-cover"
          priority
          quality={90}
          style={{ objectPosition: 'center top' }}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Gradient fade overlay - smooth transition from mountain to black */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(13, 13, 13, 0.3) 60%, rgba(13, 13, 13, 0.7) 75%, rgba(13, 13, 13, 0.95) 85%, rgb(13, 13, 13) 100%)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm text-white mb-6 backdrop-blur-md">
            Personalized Ski Coaching
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight drop-shadow-2xl">
          Syntrak
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-lg">
          Personalized Ski Coaching via Smart Thermals
        </p>
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
          Revolutionizing ski instruction through proprietary smart thermal base layers
          with real-time AI coaching and 3D visualization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="#get-started"
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
          <a
            href="#demo"
            className="px-8 py-4 glass-card text-white rounded-lg font-semibold hover:border-white/20 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-md"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

