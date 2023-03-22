/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: "1600px",
      lg: "1200px",
      md: "991px",
    },
    extend: {
      colors: { mainColor: "#3DA9AB" },
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
      small: "16px",
    },
  },
  plugins: [],
};
