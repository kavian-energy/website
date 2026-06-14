import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: false
    }),
    prerender: {
      entries: [
        '/',
        '/about',
        '/services',
        '/products',
        '/contact'
      ],
      handleHttpError: 'warn',
      crawl: true
    }
  }
};

export default config;