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
      Get it today
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
              Power of Raycast, <br />
              now on iOS.
            </h1>
            <p>AI, Notes, Snippets and Quicklinks always with you.</p>
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
              alt="Raycast for iOS home screen"
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
        title="Your home away from home"
        description="Make Raycast yours by customizing your home with the content and actions you need most. And search is just a pull away."
        image="home.8b38f543.png"
        imageAlt="Raycast iOS home screen customization"
      />

      <section className="ios-ai-section">
        <div className="ios-section-inner ios-feature-grid">
          <div className="ios-feature-copy">
            <p className="ios-eyebrow">Raycast AI</p>
            <h2>
              One interface. <br />
              Dozens of models.
            </h2>
            <p>
              The AI Chat and Commands you know and love, now synced and accessible across your
              devices.
            </p>
            <Link href="/ai" className="ios-inline-link">
              Explore Raycast AI
            </Link>
            <div className="ios-presets">
              <p className="ios-presets-label">Presets</p>
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
              alt="Raycast AI on iOS"
              width={560}
              height={640}
              className="ios-feature-image"
            />
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Snippets"
        title="Snippets"
        description="Your essential information, ready to reuse. Store addresses, codes, and templates for quick access."
        image="snippets.14354bd1.png"
        imageAlt="Raycast Snippets on iOS"
        reverse
      >
        <Link href="/pro" className="ios-inline-link">
          Explore Snippets
        </Link>
      </FeatureSplit>

      <FeatureSplit
        eyebrow="Quicklinks"
        title="Quicklinks"
        description="Your most important resources organized and accessible. Just a tap away, wherever you are."
        image="quicklinks.49c51e46.png"
        imageAlt="Raycast Quicklinks on iOS"
      >
        <Link href="/pro" className="ios-inline-link">
          Explore Quicklinks
        </Link>
      </FeatureSplit>

      <section className="ios-dictation-section">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <p className="ios-dictation-status">Listening...</p>
          <h2>Voice Dictation with Whisper</h2>
          <p>Talk to AI in over 50 languages with just a tap and hold.</p>
          <div className="ios-device-icons">
            <span>iPhone</span>
            <span>Mac</span>
            <span>iPad</span>
          </div>
          <p className="ios-sync-note">
            Keep your content synced across devices. Access all your AI chats, Notes, Snippets and
            Quicklinks.
          </p>
          <p className="ios-pro-note">* Requires Raycast Pro</p>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Activity Sheet Extension"
        title="Access Raycast from almost every app"
        description="Use AI Commands on selected text."
        image="activity-sheet.f2f38f7d.png"
        imageAlt="Raycast Activity Sheet on iOS"
        reverse
      />

      <FeatureSplit
        eyebrow="RAYCAST NOTES"
        title={
          <>
            It&apos;s time to go all-in <br />
            on Raycast Notes.
          </>
        }
        description="Catch-up on past meeting notes while commuting or collect ideas while out touching grass."
        image="notes.24e64a4c.png"
        imageAlt="Raycast Notes on iOS"
      >
        <Link href="/pro" className="ios-inline-link">
          Explore Raycast Notes
        </Link>
      </FeatureSplit>

      <section className="ios-keyboard-section">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <p className="ios-eyebrow">Custom Keyboard</p>
          <h2>Available wherever you type.</h2>
          <p>
            Dictate messages with AI post-processing, run AI commands, share Quicklinks or reply
            faster with Snippets.
          </p>
        </div>
      </section>

      <section className="ios-integrations-section">
        <div className="ios-section-inner">
          <div className="ios-section-title ios-section-title-center">
            <h2>Deeply integrated with iOS</h2>
            <p>Designed to work well beyond the app icon. Raycast is integrated into many iOS features.</p>
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
            Hold to <br />
            Open Raycast
          </h2>
        </div>
      </section>

      <section className="ios-final-cta">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <h2>Be more productive today and everyday.</h2>
          <p>Download and use Raycast for iOS.</p>
          <p className="ios-scan-label">Scan to Download</p>
          <div className="ios-qr-placeholder ios-qr-placeholder-center" aria-hidden="true">
            <Image src={media("app-icon.b57cf1c4.png")} alt="" width={48} height={48} className="ios-qr-icon" />
          </div>
          <div className="ios-hero-ctas ios-hero-ctas-center">
            <AppStoreCTA />
          </div>
          <p className="ios-requirement">Requires iOS 18</p>
        </div>
      </section>

      <RaycastIOSFAQ />
    </div>
  );
}
