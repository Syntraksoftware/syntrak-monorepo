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
          top: '100px', 
          left: 0, 
          right: 0, 
          height: 'calc(100vh + 200px)', 
          width: '100vw',
          margin: 0,
          padding: 0
        }}
      >
        <Image
          src="/final_mountain2.png"
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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white leading-relaxed tracking-wide drop-shadow-2xl" style={{ fontFamily: 'var(--font-eb-garamond), serif' }}>
          Syntrak Intelligent Tracking
        </h1>
        <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-5xl mx-auto drop-shadow-lg">
         1) Motion Capture, AI Coaching, Real-Time Results: All in Your Thermals
        </p>
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-5xl mx-auto drop-shadow-md">
        2) The world's first smart performance thermals with real time 3D motion capture analytics and personalized coaching
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

