const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  publicDir: "public",
  server: {
    port: 8080,
  },
};
