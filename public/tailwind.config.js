/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: "Proxima Nova",
    container: {
      center: true
    },
    extend: {
      colors: {
        green: "#1db954",
        dark: "#121212",
        light: "#282828",
        lightest: "#B3B3B3",
        darkest: "#191414",
        nearly__lightest: "#181818"
      }
    }
  },
  variants: {},
  plugins: []
};

