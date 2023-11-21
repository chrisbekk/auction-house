import dotenv from "dotenv";
import { defineConfig } from "vite";

dotenv.config();
const path = require("path");

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  publicDir: "public",
  server: {
    port: 8080,
  },
});
