const basePath = "/Lavelle-advance-virtual-internship";

export default function githubPagesImageLoader({ src }) {
  if (src.startsWith("http")) {
    return src;
  }
  return `${basePath}${src}`;
}
