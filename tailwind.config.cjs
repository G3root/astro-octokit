const { themeValues } = require("./themes");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./public/**/*.html", "./src/**/*.{astro,js,ts}"],
  theme: {
    extend: {
      colors: {
        loContrast: "var(--loContrast)",
        hiContrast: "var(--hiContrast)",
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents }) => {
      addBase({
        ":root": themeValues[0],
        '[data-theme="dark"]': themeValues[1],
      });
    }),
  ],
};
