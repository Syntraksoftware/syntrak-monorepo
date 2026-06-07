import { AppleIcon, ArrowRightIcon, WindowsIcon } from "./icons";

export default function RaycastHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,99,99,0.12),transparent)]" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <h1 className="raycast-display mx-auto max-w-[800px] text-balance">
          See Every Movement. Master Every Run.
        </h1>
        <p className="mx-auto mt-5 max-w-[560px] text-lg leading-relaxed text-[#cdcdcd]">
          AI-powered biomechanical coaching, embedded invisibly in your base layer. Real-time insights. Every turn, every mountain.
        </p>

        <div id="download" className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#download" className="raycast-btn">
            <AppleIcon />
            Download for iOS
          </a>
          <a href="#download-windows" className="raycast-btn">
            <WindowsIcon />
            Download for Android
          </a>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-[#9c9c9d]">
          <span>Founders Edition — Q4 2026</span>
          <span>iOS 16+ · Android 12+</span>
        </div>
      </div>


      <div className="relative mx-auto mt-14 max-w-[980px] px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0d0d0d] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
          <div className="flex items-center gap-2 border-b border-[#242728] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff6363]/80" />
            <div className="h-3 w-3 rounded-full bg-[#ffc533]/80" />
            <div className="h-3 w-3 rounded-full bg-[#59d499]/80" />
            <div className="ml-3 flex-1 rounded-md border border-[#242728] bg-[#07080a] px-3 py-1.5 text-left text-sm text-[#9c9c9d]">
              Live coaching session — Syntrak
            </div>
          </div>
          <div className="space-y-1 p-3">
            {[
              { icon: "⌘", title: "Open Syntrak", sub: "Application" },
              { icon: "AI", title: "Ask AI", sub: "Real time coaching" },
              { icon: "↗", title: "Track your progress", sub: "Every turn, every mountain" },
              { icon: "♪", title: "See your biomechanics", sub: "Invisible, but powerful" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-[#101111]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#242728] bg-[#121212] text-xs text-[#9c9c9d]">
                  {item.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-[#f4f4f6]">{item.title}</div>
                  <div className="text-xs text-[#9c9c9d]">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
