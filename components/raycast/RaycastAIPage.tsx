import Image from "next/image";
import Link from "next/link";
import {
  aiChatHighlights,
  aiChatSidebar,
  aiCommands,
  aiExtensionRows,
  aiHeroExtensions,
  aiPrivacyItems,
  aiQuickFeatures,
  RAYCAST_AI_MEDIA,
} from "./ai-data";
import RaycastAIFAQ from "./RaycastAIFAQ";
import RaycastProModels from "./RaycastProModels";
import { AppleIcon } from "./icons";

function ExtensionMarquee() {
  const row = [...aiHeroExtensions, ...aiHeroExtensions];

  return (
    <div className="ai-hero-marquee" aria-hidden="true">
      <div className="ai-hero-marquee-track">
        {row.map((name, index) => (
          <span key={`${name}-${index}`} className="ai-hero-extension-pill">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="ai-chat-mock">
      <div className="ai-chat-sidebar">
        <div className="ai-chat-search">Search Chats…</div>
        <div className="ai-chat-group">
          <p>Pinned</p>
          {aiChatSidebar.pinned.map((item) => (
            <button key={item} type="button" className="ai-chat-sidebar-item ai-chat-sidebar-item-active">
              {item}
            </button>
          ))}
        </div>
        <div className="ai-chat-group">
          <p>Today</p>
          {aiChatSidebar.today.map((item) => (
            <button key={item.title} type="button" className="ai-chat-sidebar-item">
              <span>{item.title}</span>
              <small>{item.preview}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="ai-chat-main">
        <div className="ai-chat-header">
          <span>AI Assistant</span>
          <span className="ai-chat-model">Syntrak</span>
        </div>
        <div className="ai-chat-thread">
          <div className="ai-chat-bubble ai-chat-bubble-user">
            Review my last run on the blue slope
          </div>
          <div className="ai-chat-bubble ai-chat-bubble-ai">
            <p>Here&apos;s your run breakdown:</p>
            <p>
              <strong>Edge Angles</strong>
              <br />
              Averaged 42° on steeper sections — 8° more consistent than your previous session.
            </p>
            <p>
              <strong>Coaching Cues</strong>
              <br />
              Delay hip rotation by 0.2s on initiation. Increase outside ski pressure through the apex.
            </p>
          </div>
        </div>
        <div className="ai-chat-composer">
          <span>Ask about your technique…</span>
          <span className="ai-chat-submit">Analyse Run</span>
        </div>
      </div>
    </div>
  );
}

function ExtensionScroller({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="ai-extension-row">
      <div className="ai-extension-track">
        {doubled.map((item, index) => (
          <div key={`${item}-${index}`} className="ai-extension-card">
            <span className="ai-extension-card-text">{item}</span>
            <span className="ai-extension-card-cta">Analyse</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RaycastAIPage() {
  return (
    <div className="ai-page">
      <section className="ai-hero">
        <div className="ai-hero-bg" aria-hidden="true">
          <Image
            src={`${RAYCAST_AI_MEDIA}/bg.13c8fe0f.png`}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="ai-hero-overlay" />
        </div>

        <div className="ai-section-inner ai-hero-content">
          <ExtensionMarquee />
          <h1 className="ai-hero-title">
            Coaching that works
            <br />
            on the mountain
          </h1>
          <p className="ai-hero-description">
            Syntrak combines 8+ embedded sensors with AI coaching — streaming personalised cues to your earbuds in real time
          </p>
          <div className="ai-hero-ctas">
            <Link href="/#download" className="raycast-btn-light">
              <AppleIcon />
              Pre-order now
            </Link>
            <span className="ai-hero-or">or</span>
            <Link href="/pricing" className="ai-hero-browser-link">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-section-inner ai-split">
          <div className="ai-section-copy">
            <p className="ai-eyebrow">Session Review</p>
            <h2>Meet your personal ski coach</h2>
            <p>
              Unsure why a turn felt off? Want to compare runs?
              <br />
              Review biomechanical data and get coaching feedback in one familiar interface.
            </p>
          </div>
          <ChatMock />
        </div>
      </section>

      <section className="ai-section ai-section-muted">
        <div className="ai-section-inner">
          <div className="ai-highlight-grid">
            {aiChatHighlights.map((item) => (
              <article key={item.title} className="ai-highlight-card">
                <div className="ai-highlight-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {"link" in item && item.link && (
                    <span className="ai-inline-link">{item.link}</span>
                  )}
                </div>
                <div className="ai-highlight-image-wrap">
                  <Image
                    src={`${RAYCAST_AI_MEDIA}/${item.image}`}
                    alt=""
                    width={560}
                    height={360}
                    className="ai-highlight-image"
                  />
                </div>
              </article>
            ))}
          </div>

          <figure className="ai-quote">
            <blockquote>
              &ldquo;It&apos;s like having a coach in my ear on every run — but I can&apos;t even see it&apos;s there.&rdquo;
            </blockquote>
            <figcaption>
              <Image
                src={`${RAYCAST_AI_MEDIA}/guillermo.1ede87e2.png`}
                alt=""
                width={40}
                height={40}
                className="ai-quote-avatar"
              />
              <div>
                <strong>Founders Edition Beta Tester</strong>
                <span>Alpine Skier, Colorado</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-section-inner ai-split">
          <div className="ai-section-copy">
            <p className="ai-eyebrow">Real-Time Coaching</p>
            <h2>Hear it on every turn</h2>
            <p>
              Audio advices arrive in under 10 ms — personalised feedback streamed straight to your
              earbuds while you ski
            </p>
          </div>
          <div className="ai-code-block">
            <pre>
              <code>{`export default function FeatureBadge({ children }: { children: React.ReactNode }) {
  return <div className={styles.badge}>{children}</div>;
}`}</code>
            </pre>
          </div>
        </div>

        <div className="ai-section-inner ai-quick-grid">
          {aiQuickFeatures.map((feature) => (
            <article key={feature.title} className="ai-quick-card">
              <Image
                src={`${RAYCAST_AI_MEDIA}/${feature.image}`}
                alt=""
                width={480}
                height={280}
                className="ai-quick-image"
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-section ai-section-muted">
        <div className="ai-section-inner">
          <div className="ai-section-copy ai-section-copy-center">
            <p className="ai-eyebrow">Coaching Commands</p>
            <h2>Analyse naturally</h2>
            <p>
              Ask about your technique in plain language, from edge angles and hip rotation to
              session comparisons and drill recommendations.
            </p>
          </div>

          <div className="ai-extension-rows">
            {aiExtensionRows.map((row, index) => (
              <ExtensionScroller key={index} items={row} />
            ))}
          </div>

          <p className="ai-extension-tip">
            TIP Combine multiple coaching commands to build a complete post-run review
          </p>

          <div className="ai-store-row">
            <div>
              <h3>Explore every metric your garment captures — from sensors to coaching cues.</h3>
              <Link href="/#store" className="ai-inline-link">
                Explore Features
              </Link>
            </div>
            <Image
              src={`${RAYCAST_AI_MEDIA}/store-ai-extensions.2cdb57d1.png`}
              alt=""
              width={520}
              height={320}
              className="ai-store-image"
            />
          </div>

          <div className="ai-store-row ai-store-row-reverse">
            <div>
              <h3>...or train your way</h3>
              <p>
                Create custom coaching presets tailored to your technique, terrain preference, and
                skill level — and refine them as you improve.
              </p>
              <Link href="/pro" className="ai-inline-link">
                Explore Pro
              </Link>
            </div>
            <Image
              src={`${RAYCAST_AI_MEDIA}/code-block.d4b1595c.png`}
              alt=""
              width={520}
              height={320}
              className="ai-store-image"
            />
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-section-inner ai-split">
          <div className="ai-section-copy">
            <p className="ai-eyebrow">Coaching Commands</p>
            <h2>Your technique assistant</h2>
            <p>
              Analyse runs, compare sessions, and get drill recommendations. All from built-in
              coaching commands in the Syntrak app.
            </p>
            <p className="ai-section-subcopy">
              Choose from built-in commands or create your own presets tailored to your skiing style.
            </p>
          </div>
          <Image
            src={`${RAYCAST_AI_MEDIA}/ai-commands.fa04a2b8.png`}
            alt=""
            width={640}
            height={480}
            className="ai-commands-image"
          />
        </div>

        <figure className="ai-quote ai-quote-compact">
          <blockquote>
            &ldquo;The 3D playback alone changed how I review my skiing — I can finally see what my coach has been telling me.&rdquo;
            </blockquote>
            <figcaption>
              <Image
                src={`${RAYCAST_AI_MEDIA}/koen.6d1f621a.png`}
                alt=""
                width={40}
                height={40}
                className="ai-quote-avatar"
              />
              <div>
                <strong>Founders Edition Beta Tester</strong>
                <span>Ski Instructor, Switzerland</span>
            </div>
          </figcaption>
        </figure>

        <div className="ai-section-inner">
          <h3 className="ai-commands-grid-title">Explore Coaching Commands</h3>
          <div className="ai-commands-grid">
            {aiCommands.map((command) => (
              <article key={command.title} className="ai-command-card">
                <h4>{command.title}</h4>
                <p>{command.description}</p>
                <span>{command.model}</span>
              </article>
            ))}
          </div>
          <Link href="/ai" className="ai-inline-link ai-inline-link-block">
            Explore Coaching Commands
          </Link>
        </div>
      </section>

      <div className="ai-models-wrap">
        <div className="ai-section-inner">
          <p className="ai-eyebrow ai-eyebrow-center">Coaching Engine</p>
        </div>
        <RaycastProModels />
      </div>

      <section className="ai-section ai-section-muted">
        <div className="ai-section-inner">
          <div className="ai-section-copy ai-section-copy-center">
            <p className="ai-eyebrow">Privacy</p>
            <h2>Your data is yours</h2>
            <p>Syntrak is designed with privacy in mind, your biomechanical data stays yours.</p>
          </div>
          <div className="ai-privacy-grid">
            {aiPrivacyItems.map((item) => (
              <article key={item.title} className="ai-privacy-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <Link href="/pricing" className="ai-inline-link ai-inline-link-block">
            Learn more about Syntrak Privacy &amp; Security
          </Link>
        </div>
      </section>

      <section className="ai-enterprise-cta">
        <div className="ai-section-inner">
          <p>
            Running a ski school or resort? <Link href="/enterprise">Contact us</Link>
          </p>
        </div>
      </section>

      <RaycastAIFAQ />
    </div>
  );
}
