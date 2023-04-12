/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1600px",
      lg: "1200px",
      md: "991px",
      sm: "600px",
    },
    extend: {
      colors: {
        mainColor: "#3DA9AB",
        dialogueMes: "#3973B8",
        dialogueRes: "#3CC29E",
        golden: "#F6D03D",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    fontSize: {
      xl: "60px",
      large: "35px",
      ml: "30px",
      medium: "24px",
      main: "22px",
      ms: "19px",
      small: "16px",
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
