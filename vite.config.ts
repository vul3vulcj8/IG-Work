import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/IG-works/",
  server: {
    port: 3004,
    proxy: {
      "/home": {
        target: "http://localhost:3004",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/following": {
        target: "http://localhost:3004",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/following/, "/following/IG-Work"),
      },
      "/notFound": {
        target: "http://localhost:3004",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/notFound/, "/notFound/IG-Work"),
      },
    },
  },
});
