import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RaycastPageShell from "@/components/raycast/RaycastPageShell";
import RaycastBlogPostPage from "@/components/raycast/RaycastBlogPostPage";
import { blogPosts, getBlogPostBySlug } from "@/components/raycast/blog-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: `${post.title} - Raycast Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <RaycastPageShell>
      <RaycastBlogPostPage post={post} />
    </RaycastPageShell>
  );
}
