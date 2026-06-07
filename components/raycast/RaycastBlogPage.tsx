"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  blogCategories,
  blogPosts,
  RAYCAST_BLOG_MEDIA,
  type BlogCategory,
} from "./blog-data";

function AuthorAvatars({ authors = [] }: { authors?: string[] }) {
  if (authors.length === 0) {
    return (
      <span className="blog-author-placeholder" aria-hidden="true">
        Avatar
      </span>
    );
  }

  return (
    <div className="blog-author-stack">
      {authors.map((author) => (
        <Image
          key={author}
          src={`${RAYCAST_BLOG_MEDIA}/${author}`}
          alt=""
          width={24}
          height={24}
          className="blog-author-avatar"
        />
      ))}
    </div>
  );
}

function PostMeta({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <div className="blog-post-meta">
      <AuthorAvatars authors={post.authors} />
      <time dateTime={post.date}>{post.date}</time>
    </div>
  );
}

export default function RaycastBlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

  const featuredPost = blogPosts.find((post) => post.featured);
  const filteredPosts = useMemo(() => {
    const posts = blogPosts.filter((post) => !post.featured);
    if (activeCategory === "all") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="blog-page">
      <div className="blog-page-inner">
        <h1 className="blog-page-title">Blog</h1>

        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="blog-featured-post">
            <div className="blog-featured-cover">
              {featuredPost.cover && (
                <Image
                  src={`${RAYCAST_BLOG_MEDIA}/${featuredPost.cover}`}
                  alt=""
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              )}
            </div>
            <div className="blog-featured-body">
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <PostMeta post={featuredPost} />
            </div>
          </Link>
        )}

        <div className="blog-layout">
          <aside className="blog-sidebar" aria-label="Blog categories">
            <ul className="blog-category-list">
              {blogCategories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    className={`blog-category-link ${
                      activeCategory === category.id ? "blog-category-link-active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="blog-post-list">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-post-card">
                <div className="blog-post-card-body">
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <PostMeta post={post} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
