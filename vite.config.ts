import { plugin as Markdown, Mode } from 'vite-plugin-markdown';

import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import hljs from 'highlight.js';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: './',
  plugins: [
    Components({
      dirs: ['src/components'],
    }),
    Markdown({
      markdownIt: {
        highlight: function (str: string, lang: string) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(str, { language: lang }).value;
            } catch (error) {
              console.error(error);
            }
          }
          return '';
        },
        html: true,
        linkify: true,
        typographer: true,
      },
      mode: [Mode.HTML],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
