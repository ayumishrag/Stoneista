import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import path from "path";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },


  experimental: {},

  webpack: (config) => {
    config.resolve.alias["@payload-config"] = path.resolve(
      process.cwd(),
      "./src/payload/payload.config.ts"
    );

    config.resolve.alias["@payload-types"] = path.resolve(
      process.cwd(),
      "./src/payload/payload-types.ts"
    );
    module.exports = {
      distDir: 'build',
    }

    return config;
  },
};

export default withPayload(nextConfig);
