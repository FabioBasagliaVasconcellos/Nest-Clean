import swc from "unplugin-swc";
import { configDefaults, defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    globals: true,
    root: "./",
    exclude: [...configDefaults.exclude, "**/data/pg/**"],
    environment: "node",
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: "es6" },
    }),
  ],
});
