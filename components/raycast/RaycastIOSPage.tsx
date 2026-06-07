import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RaycastIOSActionButtonGraphic,
  RaycastIOSFloatingQR,
  RaycastIOSKeyboardCarousel,
  RaycastIOSModelsGraphic,
  RaycastIOSWhisperMock,
} from "./RaycastIOSGraphics";
import RaycastIOSFAQ from "./RaycastIOSFAQ";
import { iosIntegrations } from "./ios-data";
import { AppleIcon } from "./icons";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="ios-rc-external-link">
      <span>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.25 3.75h6m0 0v6m0-6-8.5 8.5"
        />
      </svg>
    </Link>
  );
}

function SectionTitle({
  tag,
  title,
  description,
  center = false,
  children,
}: {
  tag?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`ios-rc-section-title ${center ? "ios-rc-section-title-center" : ""}`}>
      {tag ? <span className="ios-rc-section-tag">{tag}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      {children}
    </div>
  );
}

function BentoCard({
  title,
  description,
  link,
  fade = "bottom",
  highlight = false,
  contentFirst = false,
  children,
}: {
  title: string;
  description: string;
  link?: { href: string; label: string };
  fade?: "top" | "bottom" | "none";
  highlight?: boolean;
  contentFirst?: boolean;
  children?: React.ReactNode;
}) {
  const graphic = (
    <div
      className={`ios-rc-bento-graphic ios-rc-bento-graphic-centered ${
        fade === "top" ? "ios-rc-bento-fade-top" : fade === "bottom" ? "ios-rc-bento-fade-bottom" : ""
      }`}
    >
      {highlight ? <span className="ios-rc-bento-highlight" aria-hidden="true" /> : null}
      {children ?? <div className="ios-rc-placeholder ios-rc-placeholder-bento" aria-hidden="true" />}
    </div>
  );

  const copy = (
    <div className="ios-rc-bento-content">
      <p className="ios-rc-bento-title">{title}</p>
      <p className="ios-rc-bento-description">{description}</p>
      {link ? <ExternalLink href={link.href}>{link.label}</ExternalLink> : null}
    </div>
  );

  return (
    <article className="ios-rc-bento-item">
      {contentFirst ? (
        <>
          {copy}
          {graphic}
        </>
      ) : (
        <>
          {graphic}
          {copy}
        </>
      )}
    </article>
  );
}

function DeviceArrow() {
  return (
    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M6.58735 12.0831L0.776985 6.27277L6.58735 0.462402L7.73792 1.60019L3.8963 5.44181H18.2401L14.3984 1.60019L15.549 0.462402L21.3594 6.27277L15.549 12.0831L14.3984 10.9326L18.2401 7.10374H3.8963L7.73792 10.9326L6.58735 12.0831Z"
        fill="white"
      />
    </svg>
  );
}

export default function RaycastIOSPage() {
  return (
    <div className="ios-rc-page">
      <RaycastIOSFloatingQR />

      <section className="ios-rc-hero">
        <div className="ios-rc-hero-image-wrap">
          <div className="ios-rc-placeholder ios-rc-placeholder-hero-screen" aria-hidden="true" />
          <div className="ios-rc-hero-app-icon-wrap" aria-hidden="true">
            <div className="ios-rc-hero-app-icon-glow" />
            <Image
              src="/logos/white_logo.png"
              alt=""
              width={108}
              height={108}
              className="ios-rc-hero-app-icon"
              priority
            />
          </div>
        </div>
        <div className="ios-rc-hero-copy">
        <h1>
          Power of Syntrak, <br />
          now on iOS.
        </h1>
        <p>Coaching, session review, and 3D playback always with you.</p>
        <div className="ios-rc-hero-ctas">
          <Link href="/#download" className="raycast-btn-light">
            <AppleIcon />
            Pre-order now
          </Link>
          <button type="button" className="ios-rc-video-link">
            Watch Video
          </button>
        </div>
        </div>
      </section>

      <section className="ios-rc-section ios-rc-section-small">
        <SectionTitle
          center
          tag="HOME"
          title="Your home away from home"
          description={
            <>
              Make Syntrak yours by customizing your home with the content and actions you need most.
              <br />
              And search is just a pull away.
            </>
          }
        />
        <div className="ios-rc-home-graphic-wrap">
          <div className="ios-rc-placeholder ios-rc-placeholder-home" aria-hidden="true" />
          <div className="ios-rc-placeholder ios-rc-placeholder-home-favorites" aria-hidden="true" />
        </div>
      </section>

      <section className="ios-rc-section ios-rc-section-small ios-rc-models-section">
        <div className="ios-rc-models-layout">
          <div className="ios-rc-models-copy">
            <SectionTitle
              tag="Syntrak AI"
              title={
                <>
                  One interface. <br />
                  Dozens of models.
                </>
              }
              description="The AI coaching and session review you know and love, now synced and accessible across your devices."
            >
              <ExternalLink href="/ai">Explore Syntrak AI</ExternalLink>
            </SectionTitle>
          </div>
          <RaycastIOSModelsGraphic />
        </div>
      </section>

      <section className="ios-rc-section ios-rc-section-small">
        <div className="ios-rc-bento ios-rc-bento-2">
          <BentoCard
            title="Snippets"
            description="Your essential information, ready to reuse. Store addresses, codes, and templates for quick access."
            link={{ href: "/research", label: "Explore Snippets" }}
            fade="bottom"
          />
          <BentoCard
            title="Quicklinks"
            description="Your most important resources organized and accessible. Just a tap away, wherever you are."
            link={{ href: "/research", label: "Explore Quicklinks" }}
            fade="top"
            highlight
          />
        </div>
      </section>

      <section className="ios-rc-section ios-rc-section-small">
        <div className="ios-rc-bento ios-rc-bento-2">
          <div className="ios-rc-bento-subgrid">
            <BentoCard title="Voice Dictation with Whisper" description="Talk to AI in over 50 languages with just a tap and hold." fade="top">
              <RaycastIOSWhisperMock />
            </BentoCard>
            <article className="ios-rc-bento-item ios-rc-bento-item-text">
              <p className="ios-rc-bento-title">
                iPhone <DeviceArrow /> Android <DeviceArrow /> Earbuds
              </p>
              <p className="ios-rc-bento-description">
                Keep your content synced across devices. Access all your coaching sessions, 3D playback,
                and progress tracking.
              </p>
              <p className="ios-rc-footnote">* Requires Syntrak Pro</p>
            </article>
          </div>
          <BentoCard title="Activity Sheet Extension" description="Access Syntrak from almost every app. Use AI commands on selected text." fade="none">
            <div className="ios-rc-placeholder ios-rc-placeholder-activity" aria-hidden="true" />
          </BentoCard>
        </div>
      </section>

      <section className="ios-rc-section ios-rc-section-small">
        <SectionTitle
          tag="SESSION REVIEW"
          title={
            <>
              It&apos;s time to go all-in <br />
              on session review.
            </>
          }
          description={
            <>
              Catch up on past runs while commuting or collect ideas while off the mountain.
              <br />
              <br />
              <ExternalLink href="/research">Explore Session Review</ExternalLink>
            </>
          }
        />
        <div className="ios-rc-notes-graphic-wrap">
          <div className="ios-rc-placeholder ios-rc-placeholder-notes" aria-hidden="true" />
        </div>
      </section>

      <section className="ios-rc-section ios-rc-section-small ios-rc-keyboard-section">
        <div className="ios-rc-keyboard-layout">
          <div className="ios-rc-keyboard-copy">
            <SectionTitle
              tag="Custom Keyboard"
              title="Available wherever you type."
              description="Dictate messages with AI post-processing, run AI commands, share Quicklinks or reply faster with Snippets."
            />
          </div>
          <RaycastIOSKeyboardCarousel />
        </div>
      </section>

      <section className="ios-rc-section ios-rc-section-small">
        <SectionTitle
          center
          title="Deeply integrated with iOS"
          description="Designed to work well beyond the app icon. Syntrak is integrated into many iOS features."
        />
        <div className="ios-rc-bento ios-rc-bento-2">
          {iosIntegrations.map((item) => (
            <article
              key={item.title}
              className={`ios-rc-bento-item ${
                item.variant === "widgets" ? "ios-rc-bento-item-widgets" : ""
              } ${item.variant === "action" ? "ios-rc-bento-item-action" : ""}`}
            >
              {item.variant === "action" ? (
                <>
                  <p className="ios-rc-bento-title">{item.title}</p>
                  <p className="ios-rc-bento-description">{item.description}</p>
                  <div className="ios-rc-bento-graphic">
                    <RaycastIOSActionButtonGraphic />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`ios-rc-bento-graphic ${
                      item.variant === "widgets" ? "ios-rc-bento-fade-top" : ""
                    } ${item.variant === "controls" ? "ios-rc-bento-graphic-controls" : ""}`}
                  >
                    <div
                      className={`ios-rc-placeholder ${
                        item.variant === "widgets"
                          ? "ios-rc-placeholder-widgets"
                          : item.variant === "controls"
                            ? "ios-rc-placeholder-controls"
                            : "ios-rc-placeholder-bento"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ios-rc-bento-title">{item.title}</p>
                  <p className="ios-rc-bento-description">{item.description}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="ios-rc-section">
        <SectionTitle
          center
          title="Be more productive today and everyday."
          description="Download and use Syntrak for iOS."
        />
        <div className="ios-rc-download-block">
          <div className="ios-rc-download-qr ios-rc-download-desktop">
            <span>Scan to Download</span>
            <div className="ios-rc-placeholder ios-rc-placeholder-qr" aria-hidden="true" />
          </div>
          <div className="ios-rc-hero-ctas ios-rc-download-mobile">
            <Link href="/#download" className="raycast-btn-light">
              <AppleIcon />
              Pre-order now
            </Link>
          </div>
          <p className="ios-rc-requirement">Requires iOS 16+ or Android 12+</p>
        </div>
      </section>

      <RaycastIOSFAQ />
    </div>
  );
}
