/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      theme0_primary: "#1b9c85", 
      theme0_secondary: "#4c4c6d",
      theme0_secondary_low: "#e8f6ef",
      theme0_secondary_high: "#232334", 
      theme0_grey: "#a6a6c1",
      theme0_yellow: "#ffe194", 

      theme1_primary: "#0000FF", 
      theme1_yellow: "#0000FF",
      theme1_secondary: "#0000FF",
      theme1_secondary_low: "#0000FF",
      theme1_secondary_high: "#0000FF", 
  
      theme2_primary: "#FFC0CB", 
      theme2_yellow: "#FFC0CB",
      theme2_secondary: "#FFC0CB",
      theme2_secondary_low: "#FFC0CB",
      theme2_secondary_high: "#FFC0CB", },
    },
    fontFamily: {
      Helvetica: ["Helvetica"],
    },
    extend: {},

  plugins: [],
};
