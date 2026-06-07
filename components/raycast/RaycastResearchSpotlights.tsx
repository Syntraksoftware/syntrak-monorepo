import Image from "next/image";
import Link from "next/link";
import { researchSpotlights, RAYCAST_RESEARCH_MEDIA } from "./research-data";

export default function RaycastResearchSpotlights() {
  return (
    <section className="research-spotlights-section">
      <div className="pro-section-inner">
        <div className="research-spotlights-grid">
          {researchSpotlights.map((spotlight) => (
            <Link
              key={spotlight.slug}
              href={`/blog/${spotlight.slug}`}
              className="research-spotlight-card"
            >
              <div className="research-spotlight-media">
                {spotlight.image ? (
                  <Image
                    src={`${RAYCAST_RESEARCH_MEDIA}/${spotlight.image}`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : null}
              </div>
              <div className="research-spotlight-body">
                <div className="research-spotlight-meta">
                  <span>{spotlight.category}</span>
                  <time dateTime={spotlight.date}>{spotlight.date}</time>
                </div>
                <h3>{spotlight.title}</h3>
                <p>{spotlight.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
