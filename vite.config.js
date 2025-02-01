import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/geoxinho/NextCar.git",
  build: {
    outDir: "build",
  },
});
