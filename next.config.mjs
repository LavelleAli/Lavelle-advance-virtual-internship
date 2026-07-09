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
    trailingSlash: true,
  }),
  images: {
    ...(isGithubPagesBuild
      ? { loader: "custom", loaderFile: "./lib/imageLoader.js" }
      : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
