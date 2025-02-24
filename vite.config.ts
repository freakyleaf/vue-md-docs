import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import Markdown from 'unplugin-vue-markdown/vite';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItPrism from 'markdown-it-prism';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: './',
  plugins: [
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        md.use(MarkdownItAnchor, {
          permalink: true,
          permalinkAttrs: () => ({ 'aria-label': 'Anchor link' }),
          permalinkBefore: true,
          permalinkClass: 'header-anchor',
          permalinkSpace: true,
          permalinkSymbol: '#',
          slugify: (slug: string) => slug.toLowerCase().replace(/\s+/g, '-'),
          tabIndex: false,
        });
        md.use(MarkdownItPrism);
      },
    }),
    Components({
      // Required as we have multiple markdown files with the same names (e.g. 'getting-started.md')
      directoryAsNamespace: true,
      // Using 'src/content' instead of 'src/content/docs' so `directoryAsNamespace` generates valid component names in 'components.d.ts'
      // If we don't use 'src/content' the generated component names begin with numbers
      dirs: ['src/components', 'src/content'],
      extensions: ['md', 'vue'],
    }),
    vue({
      include: [/\.md$/, /\.vue$/],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
