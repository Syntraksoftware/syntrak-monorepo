"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { iosKeyboardSlides, iosModelPresets } from "./ios-data";
import { useInView } from "./useInView";

export function RaycastIOSModelsGraphic() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="ios-rc-models-graphic">
      <div className="ios-rc-models-root">
        <div className="ios-rc-models-screen">
          <div className={`ios-rc-models-blur ${isInView ? "ios-rc-models-blur-active" : ""}`}>
            <p className="ios-rc-models-title">Presets</p>
            <ul className="ios-rc-models-providers">
              {iosModelPresets.map((preset, index) => (
                <li
                  key={preset}
                  className="ios-rc-models-provider"
                  data-index={index}
                  style={{ "--provider-index": index } as React.CSSProperties}
                >
                  <span className="ios-rc-models-provider-icon" aria-hidden="true" />
                  {preset}
                </li>
              ))}
            </ul>
          </div>
          <div className="ios-rc-placeholder ios-rc-placeholder-phone" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function RaycastIOSKeyboardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isInView } = useInView<HTMLDivElement>(0.25);

  useEffect(() => {
    if (!isInView) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % iosKeyboardSlides.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={ref} className="ios-rc-keyboard-graphic">
      <div className="ios-rc-keyboard-root">
        <div className="ios-rc-keyboard-screen">
          <div className={`ios-rc-keyboard-blur ${isInView ? "ios-rc-keyboard-blur-active" : ""}`}>
            <div className="ios-rc-keyboard-carousel">
              {iosKeyboardSlides.map((slide, index) => (
                <div
                  key={slide}
                  className={`ios-rc-keyboard-slide ${
                    activeIndex === index ? "ios-rc-keyboard-slide-active" : ""
                  }`}
                  aria-hidden={activeIndex !== index}
                >
                  <div className="ios-rc-placeholder ios-rc-placeholder-keyboard" />
                </div>
              ))}
            </div>
          </div>
          <div className="ios-rc-placeholder ios-rc-placeholder-keyboard-base" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function RaycastIOSWhisperMock() {
  return (
    <div className="ios-rc-whisper-root">
      <div className="ios-rc-whisper-mock">
        <div className="ios-rc-placeholder ios-rc-placeholder-device" aria-hidden="true" />
        <div className="ios-rc-whisper-composer">
          <div className="ios-rc-whisper-gradient" aria-hidden="true">
            <span className="ios-rc-whisper-circle ios-rc-whisper-circle-1" />
            <span className="ios-rc-whisper-circle ios-rc-whisper-circle-2" />
            <span className="ios-rc-whisper-circle ios-rc-whisper-circle-3" />
          </div>
          <div className="ios-rc-whisper-bottom">
            <span className="ios-rc-whisper-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m10 5.754-3.984 3.68a1.536 1.536 0 0 0 0 2.294 1.86 1.86 0 0 0 2.482 0L13.25 7.25c1.371-1.267 1.343-3.283-.028-4.55s-3.594-1.267-4.965 0L3.292 7.287c-2.056 1.9-2.056 4.981 0 6.881l.089.082"
                />
              </svg>
            </span>
            <span className="ios-rc-whisper-placeholder">Listening...</span>
            <span className="ios-rc-whisper-icon ios-rc-whisper-clear" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="20">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6.28 5.22a.75.75 0 0 0-1.06 1.06L6.94 8 5.22 9.72a.75.75 0 1 0 1.06 1.06L8 9.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L9.06 8l1.72-1.72a.75.75 0 1 0-1.06-1.06L8 6.94 6.28 5.22Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ios-rc-whisper-voice" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="ios-rc-whisper-bar ios-rc-whisper-bar-1" x="2" y="8" width="2" height="4" rx="1" fill="#F2F2F2" />
                <rect className="ios-rc-whisper-bar ios-rc-whisper-bar-2" x="7" y="2" width="2" height="16" rx="1" fill="#F2F2F2" />
                <rect className="ios-rc-whisper-bar ios-rc-whisper-bar-3" x="12" y="5" width="2" height="10" rx="1" fill="#F2F2F2" />
                <rect className="ios-rc-whisper-bar ios-rc-whisper-bar-4" x="17" y="7" width="2" height="6" rx="1" fill="#F2F2F2" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RaycastIOSActionButtonGraphic() {
  return (
    <div className="ios-rc-action-button-root">
      <div className="ios-rc-placeholder ios-rc-placeholder-action-screen" aria-hidden="true" />
      <div className="ios-rc-action-button-overlay">
        <span className="ios-rc-action-button-shape" aria-hidden="true" />
        <span className="ios-rc-action-button-text">
          Hold to <br /> Open Syntrak
        </span>
      </div>
    </div>
  );
}

export function RaycastIOSFloatingQR() {
  return (
    <Link href="/#download" className="ios-rc-floating-qr" aria-label="Scan to download">
      <span className="ios-rc-floating-qr-label">Scan to Download</span>
      <span className="ios-rc-floating-qr-box" aria-hidden="true" />
    </Link>
  );
}
