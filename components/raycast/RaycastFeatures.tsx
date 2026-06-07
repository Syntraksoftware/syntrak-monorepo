import { AppleIcon } from "./icons";

const featureKeys = [
  { label: "Fast.", text: "Think in milliseconds." },
  { label: "Ergonomic.", text: "Keyboard First." },
  { label: "Native.", text: "Pure performance." },
  { label: "Reliable.", text: "99.8% crash-free rate." },
];

const row1 = ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"];
const row2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const row3 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const row4 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const row5 = ["Z", "X", "C", "V", "B", "N", "M"];

export default function RaycastFeatures() {
  return (
    <section className="border-t border-[#242728] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="raycast-section-title">
              <h2>It&apos;s not about saving time.</h2>
              <p>It&apos;s about feeling like you&apos;re never wasting it.</p>
            </div>
            <a href="#download" className="raycast-btn mt-8">
              <AppleIcon />
              Download
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#242728] bg-[#0d0d0d] p-4 md:p-6">
            <div className="space-y-2 opacity-80">
              <div className="hidden gap-1.5 md:grid md:grid-cols-[repeat(13,minmax(0,1fr))]">
                {row1.map((key) => (
                  <div key={key} className="raycast-key text-xs">
                    {key}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-10 gap-1.5">
                {row2.map((key) => (
                  <div key={key} className="raycast-key">
                    {key}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-10 gap-1.5">
                {row3.map((key) => (
                  <div key={key} className="raycast-key">
                    {key}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1.5 md:grid-cols-2">
                {featureKeys.slice(0, 2).map((item) => (
                  <div
                    key={item.label}
                    className="col-span-2 rounded-lg border border-[#242728] bg-[#101111] p-3 text-left text-sm text-[#cdcdcd]"
                  >
                    <strong className="text-[#f4f4f6]">{item.label}</strong> {item.text}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-9 gap-1.5">
                {row4.map((key) => (
                  <div key={key} className="raycast-key">
                    {key}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1.5 md:grid-cols-2">
                {featureKeys.slice(2).map((item) => (
                  <div
                    key={item.label}
                    className="col-span-2 rounded-lg border border-[#242728] bg-[#101111] p-3 text-left text-sm text-[#cdcdcd]"
                  >
                    <strong className="text-[#f4f4f6]">{item.label}</strong> {item.text}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {row5.map((key) => (
                  <div key={key} className="raycast-key">
                    {key}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
