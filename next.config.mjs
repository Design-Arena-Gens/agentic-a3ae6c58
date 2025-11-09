/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["zustand", "clsx"],
  },
};

export default nextConfig;
