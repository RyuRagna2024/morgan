// postcss.config.mjs

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Use the new package name for the Tailwind CSS PostCSS plugin
    "@tailwindcss/postcss": {},

    // Include autoprefixer for browser compatibility (standard practice)
    autoprefixer: {},
  },
};

export default config;
