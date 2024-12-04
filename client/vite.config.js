import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      cert: process.env.SSL_CERT,
      key: process.env.SSL_KEY,
    },
    host: "127.0.0.1",
    open: true,
  },
  preview: {
    host: "0.0.0.0",
  },
  define: {
    "process.env": process.env,
  },
});
