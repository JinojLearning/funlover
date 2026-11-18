import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jin — the Fun Lover",
    short_name: "Jin",
    description: "Jin, a fun lover in Göteborg.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f0603c",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
