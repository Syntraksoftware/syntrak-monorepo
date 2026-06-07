import Image from "next/image";
import { ChevronRightIcon } from "./icons";
import { templateExtension } from "./template-media";

const extensions = [
  {
    name: "Real-Time Audio Coaching",
    description: "Hear personalised cues through your earbuds as you ski — under 10 ms from sensor to sound.",
    icon: "linear-icon.png",
    image: "linear-web.png",
    gradient:
      "linear-gradient(138deg, rgba(32, 35, 91, 0.70) 22.00%, rgba(7, 9, 33, 0.70) 82.00%)",
  },
  {
    name: "3D Motion Playback",
    description: "Replay every run in 3D to see your form, edge angles, and body position from any angle.",
    icon: "google-translate-icon.png",
    image: "google-translate-web.png",
    gradient:
      "radial-gradient(94.21% 78.40% at 50.00% 29.91%, rgba(43, 94, 180, 0.70), rgba(13, 16, 35, 0.42))",
  },
  {
    name: "Biomechanics Tracking",
    description: "200+ embedded sensors capture movement patterns tuned for alpine skiing biomechanics.",
    icon: "spotify-icon.png",
    image: "spotify-web.png",
    gradient:
      "radial-gradient(30.00% 40.00% at 52.00% 36.91%, rgba(13, 110, 48, 1.00), rgba(8, 53, 24, 1.00))",
  },
  {
    name: "Edge Angle Analysis",
    description: "Measure edge angle consistency and centre-of-mass tracking to refine your technique.",
    icon: "arc-icon.png",
    image: "arc-web.png",
    gradient:
      "radial-gradient(50% 50% at 50% 50%, rgba(255, 99, 99, 0.35), rgba(7, 8, 10, 0.9))",
  },
  {
    name: "Session Summaries",
    description: "Get daily summaries after every session — distance, form scores, and key moments to review.",
    icon: "slack-icon.png",
    image: "slack-web.png",
    gradient:
      "linear-gradient(135deg, rgba(74, 21, 75, 0.8) 0%, rgba(20, 10, 30, 0.9) 100%)",
  },
  {
    name: "Drill Recommendations",
    description: "Receive personalised training drills based on your skiing style, skill level, and progress.",
    icon: "notion-icon.png",
    image: "notion-web.png",
    gradient:
      "linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%)",
  },
];

const categories = ["Coaching", "Analysis", "Training", "Progress"];

export default function RaycastExtensions() {
  return (
    <section id="store" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="raycast-section-title max-w-[640px]">
          <h2>Everything you need to ski better.</h2>
          <p>From real-time cues to post-run analysis — all built into one smart thermal.</p>
        </div>

        <div className="mt-8 inline-flex rounded-full border border-[#242728] bg-[#0d0d0d] p-1">
          {categories.map((cat, i) => (
            <button
              key={cat}
              type="button"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-[#101111] text-[#f4f4f6]"
                  : "text-[#9c9c9d] hover:text-[#f4f4f6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {extensions.map((ext) => (
            <a
              key={ext.name}
              href="#"
              className="group w-[320px] shrink-0"
            >
              <div
                className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)]"
                style={{
                  background: ext.gradient,
                  boxShadow:
                    "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0 0 0 1px rgba(255, 255, 255, 0.06) inset",
                }}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={templateExtension(ext.icon)}
                        alt=""
                        width={56}
                        height={56}
                        className="rounded-xl"
                      />
                      <div className="text-lg font-medium text-[#f4f4f6]">{ext.name}</div>
                    </div>
                    <span className="text-[#9c9c9d] opacity-0 transition-opacity group-hover:opacity-100">
                      <ChevronRightIcon />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#cdcdcd]">
                    {ext.description}
                  </p>
                  <div className="mt-4 h-px bg-[rgba(255,255,255,0.08)]" />
                </div>
                <Image
                  src={templateExtension(ext.image)}
                  alt=""
                  width={360}
                  height={360}
                  className="w-full"
                />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-lg font-medium text-[#9c9c9d]">
          And more coming in 2027 — snowboard, trail-running, and cycling.
        </p>
      </div>
    </section>
  );
}
