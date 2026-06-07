import Image from "next/image";
import type { BlogContentBlock } from "./blog-post-content";

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function RaycastBlogPostBody({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="blog-post-markdown">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.text}</p>;
          case "heading": {
            const id = block.id || slugifyHeading(block.text);
            return (
              <h2 id={id} key={index}>
                <a href={`#${id}`} className="blog-post-heading-link">
                  {block.text}
                </a>
              </h2>
            );
          }
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={index} className="blog-post-media">
                <div className="blog-post-media-wrapper">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1200}
                    height={675}
                    className="blog-post-media-image"
                    sizes="(max-width: 768px) 100vw, 720px"
                  />
                </div>
                {block.caption ? <figcaption>{block.caption}</figcaption> : null}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
