import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443,
    },
  },
});
