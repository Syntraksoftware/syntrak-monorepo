import Image from "next/image";
import {
  getBlogAuthorNames,
  getBlogPostContent,
  RAYCAST_BLOG_MEDIA,
  type BlogPost,
} from "./blog-data";
import RaycastBlogPostBody from "./RaycastBlogPostBody";

export default function RaycastBlogPostPage({ post }: { post: BlogPost }) {
  const authorNames = getBlogAuthorNames(post);
  const content = getBlogPostContent(post);

  return (
    <article className="blog-post-page">
      <div className="blog-post-container">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-description">{post.excerpt}</p>

          <div className="blog-post-meta">
            <div className="blog-post-meta-author">
              {post.authors?.[0] ? (
                <Image
                  src={`${RAYCAST_BLOG_MEDIA}/${post.authors[0]}`}
                  alt=""
                  width={21}
                  height={21}
                  className="blog-post-author-avatar"
                />
              ) : (
                <span className="blog-post-author-placeholder" aria-hidden="true" />
              )}
              <span className="blog-post-meta-value">{authorNames.join(", ")}</span>
            </div>

            <div className="blog-post-meta-date">
              <time dateTime={post.dateTime ?? post.date}>{post.date}</time>
            </div>
          </div>
        </header>

        <RaycastBlogPostBody blocks={content} />
      </div>
    </article>
  );
}
