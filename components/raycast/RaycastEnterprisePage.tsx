import Image from "next/image";
import Link from "next/link";
import RaycastFAQSection from "./RaycastFAQSection";
import {
  enterpriseAdminControls,
  enterpriseAnalytics,
  enterpriseCapabilities,
  enterpriseCertifications,
  enterpriseFaqs,
  RAYCAST_ENTERPRISE_MEDIA,
} from "./enterprise-data";

function media(path: string) {
  return `${RAYCAST_ENTERPRISE_MEDIA}/${path}`;
}

function ContactCTA({ className = "" }: { className?: string }) {
  return (
    <Link href="mailto:hello@syntrak.com" className={`raycast-btn-light ${className}`.trim()}>
      Contact Sales
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

export default function RaycastEnterprisePage() {
  return (
    <div className="ios-page">
      <section className="ios-hero">
        <div className="ios-section-inner ios-hero-grid">
          <div className="ios-hero-copy">
            <p className="ios-scan-label">Enterprise</p>
            <div className="ios-qr-placeholder" aria-hidden="true">
              <Image
                src="/logos/white_logo.png"
                alt=""
                width={48}
                height={48}
                className="ios-qr-icon"
              />
            </div>
            <h1>
              Syntrak for <br />
              Enterprise.
            </h1>
            <p>
              Built for ski resorts, academies, and training programmes. Enterprise-grade analytics,
              admin controls, and support for your organisation.
            </p>
            <div className="ios-hero-ctas">
              <ContactCTA />
              <Link href="mailto:hello@syntrak.com" className="ios-video-link">
                Schedule Demo
              </Link>
            </div>
          </div>
          <div className="ios-hero-media">
            <Image
              src={media("hero-screen.e61f4ba7.png")}
              alt="Syntrak enterprise dashboard"
              width={420}
              height={860}
              priority
              className="ios-hero-phone"
            />
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Dashboard"
        title="Coach every athlete"
        description="Monitor athlete progress, assign training plans, and review biomechanical data across your entire programme — from one central dashboard."
        image="home.8b38f543.png"
        imageAlt="Syntrak coach dashboard"
      >
        <Link href="/pricing" className="ios-inline-link">
          View Team Plans
        </Link>
      </FeatureSplit>

      <section className="ios-ai-section">
        <div className="ios-section-inner ios-feature-grid">
          <div className="ios-feature-copy">
            <p className="ios-eyebrow">Admin Controls</p>
            <h2>
              One console. <br />
              Full control.
            </h2>
            <p>
              Centralised admin tools for ski schools and resorts — manage access, sync policies,
              and organisation-wide settings from a single place.
            </p>
            <Link href="/pricing" className="ios-inline-link">
              Explore Enterprise Features
            </Link>
            <div className="ios-presets">
              <p className="ios-presets-label">Resort Admin Controls</p>
              <ul>
                {enterpriseAdminControls.map((control) => (
                  <li key={control}>{control}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="ios-feature-media">
            <Image
              src={media("home-favorites.ed8e0cbb.png")}
              alt="Syntrak enterprise admin controls"
              width={560}
              height={640}
              className="ios-feature-image"
            />
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Teams"
        title="Shared training plans"
        description="Share coaching programmes across coaches and athletes. Create team-wide drills, track completion, and scale instruction without adding headcount."
        image="snippets.14354bd1.png"
        imageAlt="Syntrak team training plans"
        reverse
      >
        <Link href="/pricing" className="ios-inline-link">
          Explore Team Pro
        </Link>
      </FeatureSplit>

      <FeatureSplit
        eyebrow="Integrations"
        title="Connect your resort"
        description="Connect Syntrak with your existing resort systems, booking platforms, and athlete management tools — so coaching data flows where your team already works."
        image="quicklinks.49c51e46.png"
        imageAlt="Syntrak custom integrations"
      >
        <Link href="mailto:hello@syntrak.com" className="ios-inline-link">
          Talk to Sales
        </Link>
      </FeatureSplit>

      <section className="ios-dictation-section">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <p className="ios-dictation-status">Enterprise-grade security</p>
          <h2>Security &amp; Compliance</h2>
          <p>
            End-to-end encryption, on-device processing by default, and full admin control over
            how athlete data is stored and accessed.
          </p>
          <div className="ios-device-icons">
            {enterpriseCertifications.map((cert) => (
              <span key={cert}>{cert}</span>
            ))}
          </div>
          <p className="ios-sync-note">
            Enterprise Analytics includes organisation-wide reporting, custom integrations, API
            access, and dedicated support for your organisation.
          </p>
          <div className="ios-presets ios-presets-center">
            <p className="ios-presets-label">Enterprise Analytics</p>
            <ul>
              {enterpriseAnalytics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Support"
        title="Dedicated to your team"
        description="Priority support with a dedicated account manager and SLA guarantees. Onboarding sessions and best-practice workshops for your coaching staff."
        image="activity-sheet.f2f38f7d.png"
        imageAlt="Syntrak dedicated enterprise support"
        reverse
      />

      <FeatureSplit
        eyebrow="ROI"
        title={
          <>
            Measure impact <br />
            across your programme.
          </>
        }
        description="Calculate how Syntrak can improve coaching efficiency across your ski school or academy — and see the return on smarter, data-driven instruction."
        image="notes.24e64a4c.png"
        imageAlt="Syntrak enterprise ROI"
      >
        <Link href="mailto:hello@syntrak.com" className="ios-inline-link">
          Request ROI Analysis
        </Link>
      </FeatureSplit>

      <section className="ios-keyboard-section">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <p className="ios-eyebrow">At Scale</p>
          <h2>Built for organisations that coach at volume.</h2>
          <p>
            From single academies to multi-resort programmes — Syntrak Enterprise scales with your
            athletes, coaches, and seasons.
          </p>
        </div>
      </section>

      <section className="ios-integrations-section">
        <div className="ios-section-inner">
          <div className="ios-section-title ios-section-title-center">
            <h2>Everything your organisation needs</h2>
            <p>
              Coach dashboards, team plans, integrations, and onboarding — designed for ski schools,
              resorts, and training programmes.
            </p>
          </div>
          <div className="ios-integrations-grid">
            {enterpriseCapabilities.map((item) => (
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
            Scale coaching <br />
            across your organisation.
          </h2>
        </div>
      </section>

      <section className="ios-final-cta">
        <div className="ios-section-inner ios-section-title ios-section-title-center">
          <h2>Ready to get started?</h2>
          <p>Contact our enterprise team to discuss your needs.</p>
          <p className="ios-scan-label">Enterprise</p>
          <div className="ios-qr-placeholder ios-qr-placeholder-center" aria-hidden="true">
            <Image src="/logos/white_logo.png" alt="" width={48} height={48} className="ios-qr-icon" />
          </div>
          <div className="ios-hero-ctas ios-hero-ctas-center">
            <ContactCTA />
            <Link href="/pricing" className="ios-video-link">
              View Pricing
            </Link>
          </div>
          <p className="ios-requirement">Custom pricing — billed annually</p>
        </div>
      </section>

      <RaycastFAQSection faqs={enterpriseFaqs} />
    </div>
  );
}
