const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
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
  plugins: [require("@tailwindcss/typography")],
};
