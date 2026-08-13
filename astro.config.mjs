// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * ASSUMPTION, pending confirmation: the site is served from the apex domain
 * pmvends.com via a GitHub Pages custom domain, so `base` stays '/'.
 * If it is instead a project page (username.github.io/repo), set `base` to
 * '/repo' here and nothing else needs to change, provided links are built with
 * Astro's path helpers rather than hardcoded leading slashes.
 */
const SITE_URL = 'https://pmvends.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: '/',

  integrations: [
    // /thanks is noindex, so it is kept out of the sitemap too.
    sitemap({ filter: (page) => !page.endsWith('/thanks/') }),
  ],

  /**
   * Astro downloads these at build time and serves them from our own origin, so
   * there is no request to Google at runtime. It also generates size-adjusted
   * fallback faces, which is what keeps the heading font from causing layout
   * shift. Only the weights the design actually uses are listed.
   */
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Exo 2',
      cssVariable: '--font-exo-2',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
