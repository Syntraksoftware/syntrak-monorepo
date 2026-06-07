import Image from "next/image";
import Link from "next/link";
import {
  iosIntegrations,
  iosPresets,
  RAYCAST_IOS_MEDIA,
} from "./ios-data";
import RaycastIOSFAQ from "./RaycastIOSFAQ";
import { AppleIcon } from "./icons";

function media(path: string) {
  return `${RAYCAST_IOS_MEDIA}/${path}`;
}

function AppStoreCTA({ className = "" }: { className?: string }) {
  return (
    <Link href="/#download" className={`raycast-btn-light ${className}`.trim()}>
      <AppleIcon />
      Pre-order now
    </Link>
  );
}

function FeatureSplit({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className={`ios-feature-section ${reverse ? "ios-feature-section-reverse" : ""}`}>
      <div className="ios-section-inner ios-feature-grid">
        <div className="ios-feature-copy">
          {eyebrow ? <p className="ios-eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
        </div>
        <div className="ios-feature-media">
          <Image src={media(image)} alt={imageAlt} width={560} height={640} className="ios-feature-image" />
        </div>
      </div>
    </section>
  );
}

export default function RaycastIOSPage() {
  return (
    <div className="ios-page">
      <section className="ios-hero">
        <div className="ios-section-inner ios-hero-grid">
          <div className="ios-hero-copy">
            <p className="ios-scan-label">Scan to Download</p>
            <div className="ios-qr-placeholder" aria-hidden="true">
              <Image
                src={media("app-icon.b57cf1c4.png")}
                alt=""
                width={48}
                height={48}
                className="ios-qr-icon"
              />
            </div>
            <h1>
              Power of Syntrak, <br />
              in your pocket.
            </h1>
            <p>Coaching, session review, and progress tracking — always with you on the mountain.</p>
            <div className="ios-hero-ctas">
              <AppStoreCTA />
              <button type="button" className="ios-video-link">
                Watch Video
              </button>
            </div>
          </div>
          <div className="ios-hero-media">
            <Image
              src={media("hero-screen.e61f4ba7.png")}
              alt="Syntrak app home screen"
              width={420}
              height={860}
              priority
              className="ios-hero-phone"
            />
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="HOME"
        title="Your mountain dashboard"
        description="See your latest form score, session summary, and coaching history at a glance. Everything you need before your next run."
        image="home.8b38f543.png"
        imageAlt="Syntrak app home screen"
      />

      <section className="ios-ai-section">
        <div className="ios-section-inner ios-feature-grid">
          <div className="ios-feature-copy">
            <p className="ios-eyebrow">AI Coaching</p>
            <h2>
              One app. <br />
              Every metric.
            </h2>
            <p>
              Real-time coaching and session review you know from the slopes, now synced and
              accessible across your devices.
            </p>
            <Link href="/ai" className="ios-inline-link">
              Explore AI Coaching
            </Link>
            <div className="ios-presets">
              <p className="ios-presets-label">Coaching Presets</p>
              <ul>
                {iosPresets.map((preset) => (
                  <li key={preset}>{preset}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="ios-feature-media">
            <Image
              src={media("home-favorites.ed8e0cbb.png")}
              alt="Syntrak AI coaching on mobile"
              width={560}
              height={640}
              className="ios-feature-image"
            />
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Sessions"
        title="Session History"
        description="Every run logged and ready to review. Distance, form scores, coaching cues, and key moments — all in one place."
        image="snippets.14354bd1.png"
        imageAlt="Syntrak session history"
        reverse
      >
        <Link href="/pro" className="ios-inline-link">
          Explore Pro
        </Link>
      </FeatureSplit>

      <FeatureSplit
        eyebrow="3D Playback"
        title="3D Playback"
        description="Replay any run in 3D from your phone. See your edge angles, body position, and turn shape from any angle."
        image="quicklinks.49c51e46.png"
        imageAlt="Syntrak 3D playback on mobile"
      >
        <Link href="/pro" className="ios-inline-link">
          Explore 3D Playback
        </Link>
      </FeatureSplit>

      <section className="ios-dictation-section">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <p className="ios-dictation-status">Coaching active…</p>
          <h2>Real-Time Audio Coaching</h2>
          <p>Personalised cues stream to your earbuds in under 10 ms — fast enough to correct mid-turn.</p>
          <div className="ios-device-icons">
            <span>iPhone</span>
            <span>Android</span>
            <span>Earbuds</span>
          </div>
          <p className="ios-sync-note">
            Keep your sessions synced across devices. Access coaching history, 3D playback, and
            progress tracking everywhere.
          </p>
          <p className="ios-pro-note">* Requires Syntrak Pro</p>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Offline Mode"
        title="Works without signal"
        description="Start a session offline on the mountain. The app processes sensor data on-device once paired via Bluetooth."
        image="activity-sheet.f2f38f7d.png"
        imageAlt="Syntrak offline mode"
        reverse
      />

      <FeatureSplit
        eyebrow="PROGRESS"
        title={
          <>
            Track improvement <br />
            season after season.
          </>
        }
        description="See your form scores, edge angle consistency, and drill completion over time — and know exactly where you're improving."
        image="notes.24e64a4c.png"
        imageAlt="Syntrak progress tracking"
      >
        <Link href="/pro" className="ios-inline-link">
          Explore Progress Tracking
        </Link>
      </FeatureSplit>

      <section className="ios-keyboard-section">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <p className="ios-eyebrow">Quick Actions</p>
          <h2>Available wherever you ski.</h2>
          <p>
            Start a session, review your last run, or check your form score — from widgets,
            shortcuts, or your Lock Screen.
          </p>
        </div>
      </section>

      <section className="ios-integrations-section">
        <div className="ios-section-inner">
          <div className="ios-section-title ios-section-title-center">
            <h2>Deeply integrated with your phone</h2>
            <p>Designed to work beyond the app icon. Syntrak fits into the way you already use your devices.</p>
          </div>
          <div className="ios-integrations-grid">
            {iosIntegrations.map((item) => (
              <article key={item.title} className="ios-integration-card">
                <div className="ios-integration-media">
                  <Image
                    src={media(item.image)}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="ios-integration-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ios-hold-section">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <h2>
            Tap to <br />
            Start Coaching
          </h2>
        </div>
      </section>

      <section className="ios-final-cta">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <h2>Ski smarter today and every day.</h2>
          <p>Download the Syntrak app — iOS 16+ and Android 12+.</p>
          <p className="ios-scan-label">Scan to Download</p>
          <div className="ios-qr-placeholder ios-qr-placeholder-center" aria-hidden="true">
            <Image src={media("app-icon.b57cf1c4.png")} alt="" width={48} height={48} className="ios-qr-icon" />
          </div>
          <div className="ios-hero-ctas ios-hero-ctas-center">
            <AppStoreCTA />
          </div>
          <p className="ios-requirement">Requires iOS 16+ or Android 12+</p>
        </div>
      </section>

      <RaycastIOSFAQ />
    </div>
  );
}
