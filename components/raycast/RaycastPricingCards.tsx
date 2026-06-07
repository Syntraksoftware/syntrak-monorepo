import Link from "next/link";
import {
  advancedPlanProviders,
  AiProviderLogoRow,
  proPlanProviders,
} from "./ai-provider-logos";
import { AppleIcon, WindowsIcon } from "./icons";

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[#9c9c9d]" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
      <path fill="currentColor" d="M6.5 8.5 7.5 9.5 10 7" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[#9c9c9d]" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" d="M8 5.5v5M5.5 8h5" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="inline h-3.5 w-3.5 text-[#6a6b6c]" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path fill="currentColor" d="M8 7.25v3.5M8 5.5h.01" />
    </svg>
  );
}

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

function SparkleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4 text-[#ff6363]" aria-hidden="true">
      <path fill="currentColor" d="M8 1.5 9 5.5l4 1-3 2.5 1 4L8 10.5 5 13l1-4-3-2.5 4-1z" />
    </svg>
  );
}


type PlanCardProps = {
  title: string;
  subtitle: string;
  price: string;
  featured?: boolean;
  badge?: "pro" | "sparkle";
  children: React.ReactNode;
  cta: { label: string; href: string; icon?: "apple" | "windows" };
};

function PlanCard({ title, subtitle, price, featured, badge, children, cta }: PlanCardProps) {
  return (
    <div className={`pricing-plan-card ${featured ? "pricing-plan-card-featured" : ""}`}>
      <div className="pricing-plan-card-header">
        <div>
          <h2 className="pricing-plan-card-title">{title}</h2>
          <p className="pricing-plan-card-subtitle">{subtitle}</p>
        </div>
        {badge === "pro" && (
          <div className="pricing-plan-card-badge">
            <ProBadge />
          </div>
        )}
        {badge === "sparkle" && (
          <div className="pricing-plan-card-sparkles" aria-hidden="true">
            <SparkleIcon />
            <SparkleIcon />
            <SparkleIcon />
          </div>
        )}
      </div>

      <div className="pricing-plan-card-price">
        <span className="pricing-plan-price-value">{price}</span>
        <span className="pricing-plan-price-period">/ month</span>
      </div>

      <ul className="pricing-plan-features">{children}</ul>

      <Link href={cta.href} className="raycast-btn-light pricing-plan-cta">
        {cta.icon === "apple" && <AppleIcon />}
        {cta.icon === "windows" && <WindowsIcon />}
        {cta.label}
      </Link>
    </div>
  );
}

function FeatureItem({
  icon = "check",
  title,
  titleExtra,
  children,
}: {
  icon?: "check" | "plus";
  title: string;
  titleExtra?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const titleOnly = !children;

  return (
    <li className={`pricing-plan-feature ${titleOnly ? "pricing-plan-feature-compact" : ""}`}>
      <div className="pricing-plan-feature-icon" aria-hidden="true">
        {icon === "plus" ? <PlusCircleIcon /> : <CheckCircleIcon />}
      </div>
      <div className="pricing-plan-feature-body">
        <div className="pricing-plan-feature-title-row">
          <span className="pricing-plan-feature-title">{title}</span>
          {titleExtra}
        </div>
        {children && <div className="pricing-plan-feature-detail">{children}</div>}
      </div>
    </li>
  );
}

export default function RaycastPricingCards() {
  return (
    <section className="pricing-cards-section">
      <div className="pricing-cards-grid">
        <PlanCard
          title="Starter"
          subtitle="Free with garment."
          price="$0"
          cta={{ label: "Pre-order now", href: "/#download", icon: "apple" }}
        >
          <FeatureItem title="Core features, including:">
            Motion tracking, daily session summaries, distance logging, offline sessions + more…
          </FeatureItem>
          <FeatureItem title="3D Playback">1 free playback per day</FeatureItem>
          <FeatureItem title="Syntrak App">iOS 16+ and Android 12+</FeatureItem>
          <FeatureItem title="Data Retention">30 days</FeatureItem>
        </PlanCard>

        <PlanCard
          title="Syntrak Pro"
          subtitle="Full coaching experience"
          price="$12"
          featured
          badge="pro"
          cta={{ label: "Select Plan", href: "/#download" }}
        >
          <FeatureItem icon="plus" title="Everything in Starter" />
          <FeatureItem
            title="Real-Time Audio Coaching"
            titleExtra={
              <>
                <span className="pricing-plan-feature-inline">, powered by:</span>
                <InfoIcon />
              </>
            }
          >
            <AiProviderLogoRow providers={proPlanProviders} />
            <Link href="/ai" className="pricing-plan-link">
              Learn about coaching <InfoIcon />
            </Link>
          </FeatureItem>
          <FeatureItem title="Cloud Sync">
            Sync sessions and progress across iOS, Android, and web
          </FeatureItem>
          <FeatureItem title="Unlimited 3D Playback" />
        </PlanCard>

        <PlanCard
          title="Pro + Premium Coaching"
          subtitle="The most advanced analysis"
          price="$20"
          badge="sparkle"
          cta={{ label: "Select Plan", href: "/#download" }}
        >
          <FeatureItem icon="plus" title="Everything in Pro" />
          <FeatureItem title="Premium Coaching Models">
            <p>including advanced analysis from:</p>
            <AiProviderLogoRow providers={advancedPlanProviders} />
            <Link href="/ai" className="pricing-plan-link">
              Learn about coaching <InfoIcon />
            </Link>
          </FeatureItem>
        </PlanCard>
      </div>
    </section>
  );
}
