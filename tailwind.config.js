module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          background: '#000000',
        },
        dark: {
          background: '#f6f7f8'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
