const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const repoName = "Lavelle-advance-virtual-internship";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    root: import.meta.dirname,
  },
  reactCompiler: true,
  ...(isGithubPagesBuild && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  images: {
    unoptimized: isGithubPagesBuild,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
