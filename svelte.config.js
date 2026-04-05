import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path }) => {
				// The /demo/ iframe content is served from static/ and not a SvelteKit route
				if (path.startsWith('/demo')) return;
				throw new Error(`404 ${path}`);
			}
		}
	}
};

export default config;
