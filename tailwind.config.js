/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = {
  ...{
    "ccfv-blue": "#054f96",
    "ccfv-cyan": "#87ABCC",
    "ccfv-orange": "#DE8226",
    "ccfv-gold": "#F2AB45",
    "ccfv-grey": "#4F4F4F",
    white: "#ffffff",
  },
};

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["proxima-nova", "sans-serif"],
      display: ["neuzeit-grotesk", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1360px",
        "2xl": "1920px",
      },
      colors: colors,

      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("preline/plugin"), require('@tailwindcss/forms')],
};
