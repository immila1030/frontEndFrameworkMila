import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import ViteRestart from 'vite-plugin-restart';
import path from 'path';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(), //這邊是透過vite使用vue  test
    visualizer({
      filename: 'stats.html', // 生成分析檔案的文件名稱
      open: true, // 是否以預設的代理伺服器打開分析檔案
      gzipSize: true, //是否蒐集gzip壓縮檔的大小到分析文件
      brotliSize: true, //是否蒐集brotli壓縮檔的大小到分析文件
    }),
    ViteRestart({
      restart: ['vite.config.js'], //監聽是否有改變，改變則會重啟動專案
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
