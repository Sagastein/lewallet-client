import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //vite proxy
  server: {
    proxy: {
      "/api": {
        target: "https://lewallet-server.onrender.com/v1/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
