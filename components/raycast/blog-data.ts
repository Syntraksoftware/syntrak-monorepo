import {
  createPlaceholderContent,
  sampleBlogPostContent,
  type BlogContentBlock,
} from "./blog-post-content";

export type BlogCategory = "news" | "company" | "craft" | "resources";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime?: string;
  category: BlogCategory;
  featured?: boolean;
  cover?: string;
  authors?: string[];
  authorNames?: string[];
  content?: BlogContentBlock[];
};

export const blogCategories: { id: BlogCategory | "all"; label: string }[] = [
  { id: "all", label: "All Posts" },
  { id: "news", label: "News" },
  { id: "company", label: "Company" },
  { id: "craft", label: "Craft" },
  { id: "resources", label: "Resources" },
];

export { TEMPLATE_MEDIA as RAYCAST_BLOG_MEDIA } from "./template-media";

export const blogPosts: BlogPost[] = [
  {
    slug: "we-hack-every-friday",
    title: "We hack every Friday",
    excerpt: "How it works, why it matters and what we've done so far.",
    date: "June 22, 2022",
    dateTime: "2022-06-22",
    category: "company",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
    authorNames: ["Thomas Paul Mann"],
    content: sampleBlogPostContent,
  },
  {
    slug: "the-new-raycast",
    title: "The New Raycast",
    excerpt: "Introducing the next generation of Raycast for macOS.",
    date: "May 14, 2026",
    category: "news",
    featured: true,
    cover: "cover.e4e5c3a7.png",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
  },
  {
    slug: "a-technical-deep-dive-into-the-new-raycast",
    title: "A Technical Deep Dive Into the New Raycast",
    excerpt:
      "The story behind Raycast's cross-platform rewrite and the details that make it feel fast, delightful, and familiar.",
    date: "May 14, 2026",
    category: "craft",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-pedro-duarte.b1dc86c4.jpeg"],
  },
  {
    slug: "introducing-glaze",
    title: "Introducing Glaze",
    excerpt: "Create beautiful desktop apps in minutes by chatting with AI. Now in private beta.",
    date: "March 4, 2026",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-felix-raab.0be78142.jpeg"],
  },
  {
    slug: "raycast-for-windows",
    title: "Raycast for Windows",
    excerpt: "Your computer, but faster. Raycast for Windows is now in public beta.",
    date: "November 20, 2025",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-pedro-duarte.b1dc86c4.jpeg"],
  },
  {
    slug: "raycast-for-ios",
    title: "Raycast for iOS",
    excerpt: "Stay productive and organized wherever life takes you.",
    date: "April 30, 2025",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
  },
  {
    slug: "raycast-notes",
    title: "Meet the new Raycast Notes",
    excerpt: "Fast, light, and frictionless note-taking experience.",
    date: "November 6, 2024",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
  },
  {
    slug: "series-b",
    title: "$30M Series B to bring Raycast to new platforms",
    excerpt: "Announcing our Series B to bring Raycast to Windows and iOS",
    date: "September 25, 2024",
    category: "company",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-pedro-duarte.b1dc86c4.jpeg"],
  },
  {
    slug: "affiliate-program",
    title: "Introducing our Affiliate Program",
    excerpt: "Earn a 30% commission on all payments coming from users you brought to Raycast Pro.",
    date: "July 3, 2024",
    category: "company",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
  },
  {
    slug: "hype-team",
    title: "The Hype Team",
    excerpt: "Meet the team behind our videos, tweets, newsletters, and sneak peeks.",
    date: "June 5, 2024",
    category: "company",
    authors: ["author-dianne-mc-ewan.920826a8.jpeg"],
  },
  {
    slug: "more-ai-models",
    title: "One interface, many LLMs",
    excerpt:
      "Raycast AI gets more powerful with Anthropic Claude 3, Perplexity, and more models - making it the perfect UI for AI",
    date: "April 10, 2024",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
  },
  {
    slug: "extension-picks-designers",
    title: "Top Extension Picks for Designers",
    excerpt: "Dive into our top extension picks for designers and see how they can enhance your design workflow.",
    date: "March 13, 2024",
    category: "resources",
    authors: ["author-faye-sipiano.680945f3.jpeg"],
  },
  {
    slug: "how-raycast-api-extensions-work",
    title: "How the Raycast API and extensions work",
    excerpt: "Learn more about how we built the Raycast API and how it works under the hood",
    date: "May 31, 2023",
    category: "craft",
    authors: ["author-petr-nikolaev.fc107921.jpeg"],
  },
  {
    slug: "introducing-raycast-pro",
    title: "Introducing Raycast Pro",
    excerpt: "Unlock a new level of productivity with AI, Cloud Sync, and more",
    date: "May 10, 2023",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
  },
  {
    slug: "launch-week-summary",
    title: "Launch Week Summary",
    excerpt: "An overview of what we shipped during our first Launch Week.",
    date: "August 9, 2022",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-stuart-regan.3337fba5.jpeg"],
  },
  {
    slug: "making-our-api-more-powerful",
    title: "Making our API more powerful",
    excerpt: "How we're making it even easier for developers to extend Raycast",
    date: "July 21, 2022",
    category: "craft",
    authors: ["author-petr-nikolaev.fc107921.jpeg"],
  },
  {
    slug: "bringing-raycast-to-teams",
    title: "Bringing Raycast to Teams",
    excerpt: "The brand new way to build internal productivity tools tailored to your needs.",
    date: "July 20, 2022",
    category: "news",
    authors: ["author-thomas-lombart.c1e6c8c8.jpeg"],
  },
  {
    slug: "a-fresh-look-and-feel",
    title: "A fresh look and feel",
    excerpt: "How we've changed our app design to make it even easier and faster to use.",
    date: "July 19, 2022",
    category: "craft",
    authors: ["author-pedro-duarte.b1dc86c4.jpeg"],
  },
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Announcing our public beta, seed round and developer program.",
    date: "October 29, 2020",
    category: "company",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-pedro-duarte.b1dc86c4.jpeg"],
  },
];

const blogPostsBySlug = new Map(blogPosts.map((post) => [post.slug, post]));

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPostsBySlug.get(slug);
}

export function getBlogPostContent(post: BlogPost): BlogContentBlock[] {
  if (post.content) return post.content;
  return createPlaceholderContent(post.title, post.excerpt);
}

export function getBlogAuthorNames(post: BlogPost): string[] {
  if (post.authorNames?.length) return post.authorNames;
  return ["Raycast Team"];
}
