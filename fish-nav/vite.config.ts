import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        //别名指向  用于当文件中使用了@后  浏览器渲染使用
        find: "@/",
        replacement: path.resolve(process.cwd(), "src") + "/",
      },
    ],
  },
  server: {
    open: true,
    port: 5173,
  },
});
