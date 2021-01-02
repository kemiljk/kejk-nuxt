const defaultTheme = require("tailwindcss/defaultTheme");

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
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      transitionProperty: {
        'spacing': 'margin, padding',
        }
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
    }
  },
  plugins: [],
};
