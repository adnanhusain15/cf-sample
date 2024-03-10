import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        ...defaultTheme.screens,
      },
      colors: {
        "cf-purple": "#DBD9FF",
        "cf-purple-dark": "#6C48F0",
        "cf-blue-dark": "#0E1B2C",
        "cf-blue": "#226CF5",
        "cf-orange": "#FF7361",
        "cf-gray": "#64647A",
      },
      fontFamily: {
        BuenosAires: ["Buenos Aires Trial"],
      },
    },
  },
  plugins: [],
};
