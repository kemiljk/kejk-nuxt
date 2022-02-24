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
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        display: "Rakkas",
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
