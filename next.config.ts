import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep tracing scoped to this app instead of unrelated parent lockfiles.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
