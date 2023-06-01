/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        green_theme: "#b9ce3d",
        blue_theme: "#59b0e3",
        dark_blue_theme: "#0069a4",
        tertiary: "#151030",
        cerulean: "#0069a4",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "home-pattern": "url('/src/assets/bgHome.jpg')",
        "home1-pattern": "url('/src/assets/bgHome1.png')",
        "home1-mobile-pattern": "url('/src/assets/bgHome1-mobile.png')",
        "discover-pattern": "url('/src/assets/bgDiscover.jpg')",
        "subscribe-pattern": "url('/src/assets/bgSubscribe.jpg')",
        "contact-pattern": "url('/src/assets/bgContact.png')",
      },
      fontFamily: {
        knockout: ["Knockout", "sans-serif"],
        "aria-narrow": ['"Arial Narrow"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
