// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
	site: 'https://magerlinc.github.io',
	// GitHub Pages serves the site under /den-gode-stemning;
	// locally we serve from the root instead.
	base: isProd ? '/den-gode-stemning' : '/',
});
