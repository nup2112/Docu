import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
  // Asegúrate de que las rutas de contenido estén configuradas correctamente
  integrations: []
});