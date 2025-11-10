import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Blog() {
  const blogPosts: Array<{
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
  }> = [];

  const categories = [
    "Case Study",
    "Ski",
    "Technology",
    "Tips",
  ];

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white relative">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto">
              Insights, tips, and stories about skiing and Syntrak.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 glass-card rounded-lg hover:border-white/20 transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[#a1a1aa] mb-8">
                Coming soon. Check back later for updates and insights.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 block"
                >
                  <div className="mb-4">
                    <span className="text-sm text-[#667eea] font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {post.title}
                  </h3>
                  <p className="text-[#a1a1aa] mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#71717a]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-[#a1a1aa] mb-6">
              Want to stay updated? Subscribe to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-card rounded-lg border border-white/8 focus:outline-none focus:border-[#667eea]"
              />
              <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

