/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#16100d",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
    screens: {
      xs: "425px",
      ss: "600px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
