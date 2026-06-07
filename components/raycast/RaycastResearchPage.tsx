import Image from "next/image";
import Link from "next/link";
import RaycastResearchFAQ from "./RaycastResearchFAQ";
import RaycastResearchPublications from "./RaycastResearchPublications";
import RaycastResearchSpotlights from "./RaycastResearchSpotlights";
import RaycastResearchTeams from "./RaycastResearchTeams";
import { RAYCAST_RESEARCH_MEDIA } from "./research-data";

export default function RaycastResearchPage() {
  return (
    <div className="pro-page">
      <section className="pro-hero">
        <div className="pro-hero-bg" aria-hidden="true">
          <Image
            src={`${RAYCAST_RESEARCH_MEDIA}/hero.e699ed3b.png`}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="pro-hero-overlay" />
        </div>

        <div className="pro-section-inner pro-hero-content">
          <h1 className="pro-hero-title">Research</h1>
          <p className="pro-hero-description">
            Empirical research, raw analytics, and actionable proof. A blend of biomechanis and Artificial Intelligence.
          </p>
        </div>
      </section>

      <RaycastResearchTeams />
      <RaycastResearchSpotlights />
      <RaycastResearchPublications />

      <section className="research-join-cta">
        <div className="pro-section-inner research-join-grid">
          <div className="research-join-copy">
            <h2>Join the research effort</h2>
            <p>
              We&apos;re building the stack behind the world&apos;s first smart performance thermal.
              Read our latest findings or get in touch about collaboration.
            </p>
            <div className="research-join-actions">
              <Link href="/blog" className="raycast-btn-light">
                Read the blog
              </Link>
              <Link href="mailto:hello@syntrak.com" className="research-join-link">
                Contact research
              </Link>
            </div>
          </div>
          <div className="research-join-visual">
            <Image
              src={`${RAYCAST_RESEARCH_MEDIA}/translator-graphic.6f2faef3.png`}
              alt=""
              width={560}
              height={360}
              className="research-join-image"
            />
          </div>
        </div>
      </section>

      <RaycastResearchFAQ />
    </div>
  );
}
