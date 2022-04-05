import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Todo_List_For_Vue/' : './',
  build: {
    outDir: 'dist',
  },
  plugins: [vue()],
});
