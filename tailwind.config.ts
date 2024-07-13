/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        current: "currentColor",
        transparent: "transparent",
        stroke: "#EEEEEE",
        strokedark: "#2D2F40",
        hoverdark: "#252A42",
        titlebg: "#ADFFF8",
        titlebg2: "#FFEAC2",
        titlebgdark: "#46495A",
        btndark: "#292E45",
        white: "#FFFFFF",
        black: "#181C31",
        blackho: "#2C3149",
        blacksection: "#1C2136",
        primary: "#006BFF",
        primaryho: "#0063EC",
        meta: "#20C5A8",
        waterloo: "#757693",
        manatee: "#999AA1",
        alabaster: "#FBFBFB",
        zumthor: "#EDF5FF",
        socialicon: "#D1D8E0",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/image (1).png')"
      }
    },
  },
  plugins: [],
};