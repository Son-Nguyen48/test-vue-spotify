module.exports = {
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
        nearly__lightest: "#181818",
        leanerBlue: "linear-gradient(135deg, #450af5, #c4efd9)"
      }
    }
  },
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'

  variants: {
    extend: {}
  },
  plugins: []
};