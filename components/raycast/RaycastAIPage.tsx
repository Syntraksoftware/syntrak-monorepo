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
          <span>Project Assistant</span>
          <span className="ai-chat-model">Ray-1</span>
        </div>
        <div className="ai-chat-thread">
          <div className="ai-chat-bubble ai-chat-bubble-user">
            Please give me an overview of my day
          </div>
          <div className="ai-chat-bubble ai-chat-bubble-ai">
            <p>Here&apos;s an overview of your day:</p>
            <p>
              <strong>Calendar</strong>
              <br />
              You have two events today: 1:1 with Pedro at 12:30 and Tennis Practice at 18:00.
            </p>
            <p>
              <strong>Linear Issues</strong>
              <br />
              Update design system typography scales, develop accessible tooltip system, fix Safari
              CSS glitches.
            </p>
          </div>
        </div>
        <div className="ai-chat-composer">
          <span>Ask AI anything…</span>
          <span className="ai-chat-submit">Submit Actions ⌘K</span>
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
            <span className="ai-extension-card-cta">Add to Raycast</span>
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
            AI that works
            <br />
            with your OS
          </h1>
          <p className="ai-hero-description">
            Raycast AI combines leading models with powerful extensions — right on your OS
          </p>
          <div className="ai-hero-ctas">
            <Link href="/#download" className="raycast-btn-light">
              <AppleIcon />
              Download
            </Link>
            <span className="ai-hero-or">or</span>
            <Link href="/ai" className="ai-hero-browser-link">
              Try in Browser
            </Link>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-section-inner ai-split">
          <div className="ai-section-copy">
            <p className="ai-eyebrow">AI Chat</p>
            <h2>Meet your new virtual assistant</h2>
            <p>
              Stuck while coding? Need help planning your day?
              <br />
              Chat with 32+ different models in one familiar interface.
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
              &ldquo;Raycast is incrementally turning my Mac into an AI-native operating system and
              I&apos;m so here for it.&rdquo;
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
                <strong>Guillermo Rauch</strong>
                <span>CEO, Vercel</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-section-inner ai-split">
          <div className="ai-section-copy">
            <p className="ai-eyebrow">Quick AI</p>
            <h2>Ask anything, anytime, anywhere</h2>
            <p>
              Quick AI combines the power of AI with the web to answer any question in a light and
              unobtrusive interface
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
            <p className="ai-eyebrow">AI Extensions</p>
            <h2>Interact Naturally</h2>
            <p>
              AI Extensions turn your everyday language into actions and answers — from renaming
              files to checking Linear tickets.
            </p>
          </div>

          <div className="ai-extension-rows">
            {aiExtensionRows.map((row, index) => (
              <ExtensionScroller key={index} items={row} />
            ))}
          </div>

          <p className="ai-extension-tip">
            TIP Combine multiple AI Extensions to create advanced workflows
          </p>

          <div className="ai-store-row">
            <div>
              <h3>Explore the community of third party Extensions in the Raycast Store.</h3>
              <Link href="/#store" className="ai-inline-link">
                Explore AI Extensions
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
              <h3>...or build your own</h3>
              <p>
                Create your own AI Extension to support your own use case, and optionally publish
                it to the Store for everyone to use.
              </p>
              <Link href="/ai" className="ai-inline-link">
                Explore Docs
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
            <p className="ai-eyebrow">AI Commands</p>
            <h2>Your automation assistant</h2>
            <p>
              Automate repetitive tasks and eliminate chores by creating AI Commands that can be
              invoked with a single hotkey.
            </p>
            <p className="ai-section-subcopy">
              Choose from 30+ built-in commands or create your own tailored to your specific flows.
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
            &ldquo;Having AI integrated in the OS is the future that Raycast enables today.&rdquo;
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
              <strong>Koen Bok</strong>
              <span>Founder, Framer</span>
            </div>
          </figcaption>
        </figure>

        <div className="ai-section-inner">
          <h3 className="ai-commands-grid-title">Explore AI Commands</h3>
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
            Explore AI Commands
          </Link>
        </div>
      </section>

      <div className="ai-models-wrap">
        <div className="ai-section-inner">
          <p className="ai-eyebrow ai-eyebrow-center">AI Models</p>
        </div>
        <RaycastProModels />
      </div>

      <section className="ai-section ai-section-muted">
        <div className="ai-section-inner">
          <div className="ai-section-copy ai-section-copy-center">
            <p className="ai-eyebrow">Privacy</p>
            <h2>Your data is yours</h2>
            <p>Raycast AI is designed with privacy in mind, ensuring your details remain safe.</p>
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
            Learn more about Raycast AI Privacy &amp; Security
          </Link>
        </div>
      </section>

      <section className="ai-enterprise-cta">
        <div className="ai-section-inner">
          <p>
            Want enterprise features? <Link href="/enterprise">Contact us</Link>
          </p>
        </div>
      </section>

      <RaycastAIFAQ />
    </div>
  );
}
