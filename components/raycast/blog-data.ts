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
    title: "How we test on the slopes",
    excerpt: "Our Friday field-testing ritual — and what we've learned from 200+ embedded sensors.",
    date: "June 22, 2022",
    dateTime: "2022-06-22",
    category: "company",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
    authorNames: ["Syntrak Team"],
    content: sampleBlogPostContent,
  },
  {
    slug: "the-new-raycast",
    title: "Introducing the Founders Edition",
    excerpt: "The world's first smart performance thermal — 200+ sensors, real-time AI coaching, ships Q4 2026.",
    date: "May 14, 2026",
    category: "news",
    featured: true,
    cover: "cover.e4e5c3a7.png",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "a-technical-deep-dive-into-the-new-raycast",
    title: "A Technical Deep Dive Into Syntrak Sensors",
    excerpt:
      "How textile electrodes, on-device processing, and sub-10 ms latency make real-time coaching possible on the mountain.",
    date: "May 14, 2026",
    category: "craft",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-pedro-duarte.b1dc86c4.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "introducing-glaze",
    title: "Validated at 93.4% Accuracy",
    excerpt: "New peer-reviewed SeamFit study confirms Syntrak's exercise-classification accuracy on the slopes.",
    date: "March 4, 2026",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-felix-raab.0be78142.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "raycast-for-windows",
    title: "Syntrak for Android",
    excerpt: "The Syntrak app is now available on Android 12+. Pair your garment and coach from any device.",
    date: "November 20, 2025",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-pedro-duarte.b1dc86c4.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "raycast-for-ios",
    title: "Syntrak for iOS",
    excerpt: "Coaching, session review, and progress tracking — always with you on the mountain.",
    date: "April 30, 2025",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "raycast-notes",
    title: "3D Playback Is Here",
    excerpt: "Replay every run in 3D — see your edge angles, body position, and turn shape from any angle.",
    date: "November 6, 2024",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "series-b",
    title: "Founders Edition: Pro for Life",
    excerpt: "Back the Founders Edition and get Syntrak Pro for life — no subscription, free international shipping.",
    date: "September 25, 2024",
    category: "company",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-pedro-duarte.b1dc86c4.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "affiliate-program",
    title: "Introducing Our Affiliate Program",
    excerpt: "Earn commission on every Founders Edition and Pro subscription you refer to Syntrak.",
    date: "July 3, 2024",
    category: "company",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "hype-team",
    title: "Meet the Team",
    excerpt: "The engineers, designers, and skiers building the future of on-mountain coaching.",
    date: "June 5, 2024",
    category: "company",
    authors: ["author-dianne-mc-ewan.920826a8.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "more-ai-models",
    title: "Real-Time Audio Coaching",
    excerpt:
      "Personalised coaching cues now stream to your earbuds in under 10 ms — fast enough to correct mid-turn.",
    date: "April 10, 2024",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "extension-picks-designers",
    title: "Top Metrics for Intermediate Skiers",
    excerpt: "Edge angle consistency, centre-of-mass tracking, and the metrics that matter most as you progress.",
    date: "March 13, 2024",
    category: "resources",
    authors: ["author-faye-sipiano.680945f3.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "how-raycast-api-extensions-work",
    title: "How Textile Electrodes Work",
    excerpt: "The engineering behind wash-safe sensors rated at 97.7% reliability after 7+ cycles.",
    date: "May 31, 2023",
    category: "craft",
    authors: ["author-petr-nikolaev.fc107921.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "introducing-raycast-pro",
    title: "Introducing Syntrak Pro",
    excerpt: "Unlock real-time audio coaching, unlimited 3D playback, and advanced biomechanical metrics.",
    date: "May 10, 2023",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "launch-week-summary",
    title: "Launch Week Summary",
    excerpt: "Everything we shipped during our first Launch Week — from sensors to coaching presets.",
    date: "August 9, 2022",
    category: "news",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-stuart-regan.3337fba5.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "making-our-api-more-powerful",
    title: "On-Device Processing by Default",
    excerpt: "How Syntrak keeps your biomechanical data private with on-device processing and optional encrypted sync.",
    date: "July 21, 2022",
    category: "craft",
    authors: ["author-petr-nikolaev.fc107921.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "bringing-raycast-to-teams",
    title: "Syntrak for Ski Schools",
    excerpt: "Coach dashboards, shared training plans, and athlete progress reports for teams and academies.",
    date: "July 20, 2022",
    category: "news",
    authors: ["author-thomas-lombart.c1e6c8c8.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "a-fresh-look-and-feel",
    title: "A Fresh Look for the App",
    excerpt: "How we redesigned the Syntrak app to make session review faster and coaching clearer on the mountain.",
    date: "July 19, 2022",
    category: "craft",
    authors: ["author-pedro-duarte.b1dc86c4.jpeg"],
    authorNames: ["Syntrak Team"],
  },
  {
    slug: "hello-world",
    title: "Hello World",
    excerpt: "Announcing Syntrak — smart performance thermals with embedded motion capture and AI coaching.",
    date: "October 29, 2020",
    category: "company",
    authors: ["author-thomas-paul-mann.65128b99.jpeg", "author-pedro-duarte.b1dc86c4.jpeg"],
    authorNames: ["Syntrak Team"],
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
  return ["Syntrak Team"];
}
