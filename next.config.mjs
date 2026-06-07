/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Vercel handles build ID automatically
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  // Disable telemetry if desired
  telemetry: false,
  // Image optimization (enabled by default on Vercel)
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "misc-assets.raycast.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.raycast.com",
        pathname: "/_next/static/media/**",
      },
    ],
  },
  // Disable powered by header
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/developers",
        destination: "/ios",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/users/sign_in",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
