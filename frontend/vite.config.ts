/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
    },
  },
  test: {
    // обычная Vitest-конфигурация, если вам нужны тесты
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});
