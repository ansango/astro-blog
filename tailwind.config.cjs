const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Add any custom colors here
      },
      fontFamily: {
        // Add any custom fonts here
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
      },
      transitionProperty: {
        height: "height",
      },
      typography: (theme) => ({}),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-fluid-type")({
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: "rem", // default is rem but it's also possible to use 'px'
        prefix: "", // set a prefix to use it alongside the default font sizes
      },
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        "2xl": [3, 1.2],
        "3xl": [4, 1.2],
        "4xl": [5, 1.1],
        "5xl": [6, 1.1],
        "6xl": [7, 1.1],
        "7xl": [8, 1],
        "8xl": [9, 1],
        "9xl": [10, 1],
      },
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        ".title": {
          "@apply text-2xl font-semibold": {},
        },
      });
    }),
  ],
};
