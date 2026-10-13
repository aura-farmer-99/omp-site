import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Deployed as a GitHub Pages project site at:
//   https://aura-farmer-99.github.io/omp-site/
// The production build is served from that subpath, so all asset URLs need the
// base prefix. Dev keeps serving from the root for convenience.
// Override the production base with the `VITE_BASE` env var if needed.
const PROD_BASE = process.env.VITE_BASE ?? "/omp-site/";

export default defineConfig(({ command }) => ({
  base: command === "build" ? PROD_BASE : "/",
  plugins: [react(), tailwindcss()],
}));
