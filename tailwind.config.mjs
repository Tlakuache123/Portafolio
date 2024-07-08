/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        deepgreen: {
          100: "#93B1A6",
          200: "#5C8374",
          300: "#183D3D",
          400: "#040D12",
        },
      },
    },
  },
  plugins: [],
};
