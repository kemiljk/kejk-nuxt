const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        display: "DM Serif Display",
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      backgroundColor: ["active"],
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
