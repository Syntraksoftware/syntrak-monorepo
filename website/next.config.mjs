/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Fix for deploymentId/buildId errors
  generateBuildId: async () => {
    return (
      process.env.BUILD_ID ||
      process.env.NETLIFY_BUILD_ID ||
      `build-${Date.now()}`
    );
  },
  // Ensure we don't try to access Vercel-specific runtime config
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  // Disable telemetry to avoid runtime config issues
  telemetry: false,
  // Disable image optimization if causing issues
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
