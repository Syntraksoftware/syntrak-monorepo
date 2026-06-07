/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok.app", "*.ngrok.io"],
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
      {
        source: "/pro",
        destination: "/research",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
