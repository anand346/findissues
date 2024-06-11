/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./helper/themeClasses.js",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      light_main_primary: "#0E7566",
      light_main_secondary: "#16bba3",
      light_main_secondary_low: "#4c4c6d",
      light_main_secondary_high: "#FFFFFF",
      light_main_grey: "#0E7566",
      light_main_yellow: "#B39256",
      dark_main_primary: "#1b9c85",
      dark_main_secondary: "#4c4c6d",
      dark_main_secondary_low: "#e8f6ef",
      dark_main_secondary_high: "#232334",
      dark_main_grey: "#a6a6c1",
      dark_main_yellow: "#ffe194", 

    },
    fontFamily: {
      Helvetica: ["Helvetica"],
    },
    extend: {},
  },

  plugins: [],
};
