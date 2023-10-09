/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main_primary: "#1b9c85",
      main_secondary: "#4c4c6d",
      main_secondary_low: "#e8f6ef",
      main_secondary_high: "#232334",
      main_grey: "#a6a6c1",
      main_yellow: "#ffe194",
    },
    fontFamily: {
      Helvetica: ["Helvetica"],
    },
    extend: {},
  },

  plugins: [],
};
