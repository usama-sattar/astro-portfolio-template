/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        purple: { 400: "#831edf", 200: "#a246fb", 100: "#ffffffb3" },
        cream: { 400: "#fff9ed", 500: "#fff9ee" },
      },
    },
  },
  plugins: [],
};
