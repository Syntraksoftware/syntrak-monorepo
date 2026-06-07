import Image from "next/image";
import Link from "next/link";
import RaycastAI from "./RaycastAI";
import RaycastProFAQ from "./RaycastProFAQ";
import RaycastProModels from "./RaycastProModels";
import { proProductivityFeatures, RAYCAST_PRO_MEDIA } from "./pro-data";

function ProBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="#A2DFFD"
        fillRule="evenodd"
        d="M14.68 5.36 13.44 4.03a4.1 4.1 0 0 0-5.97 0L6.12 5.36a.09.09 0 0 1-.064.027l-1.61-.054a4.1 4.1 0 0 0-4.23 4.23l.054 1.61a.09.09 0 0 1-.027.064l-1.18 1.1a4.1 4.1 0 0 0 0 5.97l1.18 1.1a.09.09 0 0 1 .027.064l-.054 1.61a4.1 4.1 0 0 0 4.23 4.23l1.61-.054a.09.09 0 0 1 .064.027l1.18 1.1a4.1 4.1 0 0 0 5.97 0l1.18-1.1a.09.09 0 0 1 .064-.027l1.61.054a4.1 4.1 0 0 0 4.23-4.23l-.054-1.61a.09.09 0 0 1 .027-.064l1.18-1.1a4.1 4.1 0 0 0 0-5.97l-1.18-1.1a.09.09 0 0 1-.027-.064l.054-1.61a4.1 4.1 0 0 0-4.23-4.23l-1.61.054a.09.09 0 0 1-.064-.027Zm-5.61.19a2.1 2.1 0 0 1 3.05 0l1.1 1.18c.19.2.46.31.73.31l1.61-.054a2.1 2.1 0 0 1 2.17 2.17l-.055 1.61c-.02.6.22 1.18.66 1.6l1.18 1.1a2.1 2.1 0 0 1 0 3.05l-1.18 1.1c-.44.42-.68 1-.66 1.6l.055 1.61a2.1 2.1 0 0 1-2.17 2.17l-1.61-.055c-.27 0-.54.11-.73.31l-1.1 1.18a2.1 2.1 0 0 1-3.05 0l-1.1-1.18a1.6 1.6 0 0 0-.73-.31l-1.61.055a2.1 2.1 0 0 1-2.17-2.17l.055-1.61c.02-.6-.22-1.18-.66-1.6l-1.18-1.1a2.1 2.1 0 0 1 0-3.05l1.18-1.1c.44-.42.68-1 .66-1.6l-.055-1.61a2.1 2.1 0 0 1 2.17-2.17l1.61.054c.27 0 .54-.11.73-.31l1.1-1.18Zm3.71 6.16a1 1 0 0 1 1.47 1.35l-2.5 3.46a1 1 0 0 1-1.67.41l-2.5-2.5a1 1 0 1 1 1.41-1.41l1.42 1.42 1.16-1.6.01-.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ProCTAs() {
  return (
    <div className="pro-hero-ctas">
      <Link href="/pricing" className="raycast-btn-light">
        Compare Plans
      </Link>
      <Link href="/pricing" className="pro-hero-price-link">
        Starting at $10/month
      </Link>
    </div>
  );
}

export default function RaycastProPage() {
  return (
    <div className="pro-page">
      <section className="pro-hero">
        <div className="pro-hero-bg" aria-hidden="true">
          <Image
            src={`${RAYCAST_PRO_MEDIA}/hero.e699ed3b.png`}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="pro-hero-overlay" />
        </div>

        <div className="pro-section-inner pro-hero-content">

          <h1 className="pro-hero-title">Built for athletes. Backed by science.</h1>
          <p className="pro-hero-description">
            Live audio coaching, AI Coaching Engine, and Smart Thermal Fabric.
          </p>
          <ProCTAs />
        </div>
      </section>

      <section className="pro-ai-section">
        <div className="pro-section-inner">
          <p className="pro-eyebrow">Coaching</p>
        </div>
        <RaycastAI />
      </section>

      <RaycastProModels />

      <section className="pro-productivity-intro">
        <div className="pro-section-inner pro-section-title pro-section-title-center">
          <h2>Put the Pro in your skiing.</h2>
          <p>Syntrak Pro is about more than just audio cues.</p>
          <div className="pro-hero-ctas pro-hero-ctas-center">
            <Link href="/pricing" className="raycast-btn-light">
              Compare Plans
            </Link>
            <Link href="/pricing" className="pro-hero-price-link">
              Starting at $10/month
            </Link>
          </div>
        </div>
      </section>

      {proProductivityFeatures.map((feature, index) => (
        <section
          key={feature.id}
          className={`pro-feature-section ${index % 2 === 1 ? "pro-feature-section-reverse" : ""}`}
        >
          <div className="pro-section-inner pro-feature-grid">
            <div className="pro-feature-copy">
              <h2>{feature.title}</h2>
              <p>{feature.subtitle}</p>
              <div className="pro-feature-label">
                <Image
                  src={`${RAYCAST_PRO_MEDIA}/${feature.icon}`}
                  alt=""
                  width={16}
                  height={16}
                  className="pro-feature-label-icon"
                />
                <span>{feature.label}</span>
              </div>
            </div>
            <div className="pro-feature-visual">
              <div className="pro-feature-image-wrap">
                <Image
                  src={`${RAYCAST_PRO_MEDIA}/${feature.image}`}
                  alt=""
                  width={960}
                  height={640}
                  className="pro-feature-image"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="pro-themes-section">
        <div className="pro-section-inner pro-feature-grid pro-feature-grid-reverse">
          <div className="pro-feature-copy">
            <h2>Built to last.</h2>
            <p>Textile electrodes rated at 97.7% reliability after 7+ wash cycles. Just toss it in with your tech-fabric load.</p>
            <div className="pro-feature-label">
              <span>Wash-Safe Sensors</span>
            </div>
          </div>
          <div className="pro-themes-visual">
            <div className="pro-themes-search">Search for images...</div>
            <div className="pro-themes-grid">
              {["Warp", "Great Image"].map((name, i) => (
                <div key={`${name}-${i}`} className="pro-theme-card">
                  <div className="pro-theme-thumb" />
                  <div>
                    <p>{name}</p>
                    <span>5120x2880</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pro-theme-controls">
              <span>Hue</span>
              <span>Saturation</span>
              <span>HEX</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pro-enterprise-cta">
        <div className="pro-section-inner">
          <p>
            Running a ski school or resort?{" "}
            <Link href="/enterprise">Contact us</Link>
          </p>
        </div>
      </section>

      <RaycastProFAQ />
    </div>
  );
}
