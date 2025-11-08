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
  },
  // Disable powered by header
  poweredByHeader: false,
};

export default nextConfig;
