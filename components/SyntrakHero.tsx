"use client";

import Image from "next/image";

export default function SyntrakHero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/final_mountain2.png"
          alt="Snow-covered mountain"
          fill
          className="object-cover object-top"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#07080a]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080a]/30 via-transparent to-[#07080a]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(87,193,255,0.15),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <h1 className="raycast-display mx-auto max-w-[900px] text-balance">
          Syntrak Intelligent Tracking
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-lg leading-relaxed text-[#cdcdcd]">
          Motion Capture, AI Coaching, Real-Time Results: All in Your Thermals
        </p>
        <p className="mx-auto mt-3 max-w-[640px] text-base leading-relaxed text-[#9c9c9d]">
          The world&apos;s first smart performance thermals with real time 3D motion capture
          analytics and personalized coaching
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#get-started" className="raycast-btn">
            Get Started
          </a>
          <a href="#demo" className="raycast-btn raycast-btn-secondary">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-[980px] px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d]/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-[#242728] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#57c1ff]/80" />
            <div className="h-3 w-3 rounded-full bg-[#ffc533]/80" />
            <div className="h-3 w-3 rounded-full bg-[#59d499]/80" />
            <div className="ml-3 flex-1 rounded-md border border-[#242728] bg-[#07080a] px-3 py-1.5 text-left text-sm text-[#9c9c9d]">
              Live coaching session — Syntrak
            </div>
          </div>
          <div className="grid gap-px bg-[#242728] sm:grid-cols-3">
            {[
              { label: "Real-time AI", value: "Active" },
              { label: "3D Motion", value: "Tracking" },
              { label: "Form Score", value: "94%" },
            ].map((item) => (
              <div key={item.label} className="bg-[#101111] px-5 py-4 text-left">
                <div className="text-xs text-[#9c9c9d]">{item.label}</div>
                <div className="mt-1 text-sm font-medium text-[#57c1ff]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
