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
        everdarkbg: {
          100: "#232A2E",
          200: "#2D353B",
          300: "#343F44",
          400: "#3D484D",
          500: "#475258",
          600: "#4F585E",
          700: "#56635f",
        },
        everdarkred: {
          100: "#E67E80",
          200: "#543A48",
        },
        everdarkblue: {
          100: "#7FBBB3",
          200: "#3A515D",
        },
        everdarkgreen: {
          100: "#A7C080",
          200: "#425047	",
        },
        everdarkorange: {
          100: "#E69875",
          200: "#514045",
        },
        everdarkgray: {
          100: "#9DA9A0",
          200: "#859289",
          300: "#7A8478",
        },
        everdarkfg: "#D3C6AA",
        everlightbg: {
          100: "#EFEBD4",
          200: "#FDF6E3",
          300: "#F4F0D9",
          400: "#EFEBD4",
          500: "#E6E2CC",
          600: "#E0DCC7",
          700: "#BDC3AF",
        },
        everlightred: {
          100: "#FBE3DA",
          200: "#F85552",
        },
        everlightblue: {
          100: "#E9F0E9",
          200: "#3A94C5",
        },
        everlightgreen: {
          100: "#EAEDC8",
          200: "#8DA101",
        },
        everlightorange: {
          100: "#FAEDCD",
          200: "#F57D26",
        },
        everlightgray: {
          100: "#A6B0A0",
          200: "#939F91",
          300: "#829181",
        },
        everlightfg: "#5C6A72",
      },
    },
  },
  plugins: [],
};
