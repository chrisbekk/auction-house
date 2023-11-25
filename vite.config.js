import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
export default {
  // config options
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        listings: resolve(root, "listings", "listings.html"),
        contact: resolve(root, "profile", "profile.html"),
      },
    },
  },
};
