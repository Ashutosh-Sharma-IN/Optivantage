/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  async redirects() {
    // Old Copilot course pages now live at /microsoft-copilot (Oct 2026).
    return [
      {
        source: "/training/copilot-365",
        destination: "/microsoft-copilot",
        permanent: true,
      },
      {
        source: "/microsoft-copilot-training",
        destination: "/microsoft-copilot",
        permanent: true,
      },
      {
        source: "/microsoft-copilot-training-india",
        destination: "/microsoft-copilot",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ai-automation",
        destination: "/ai-automation.html",
      },
    ];
  },
};

module.exports = nextConfig;
