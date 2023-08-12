/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["Assistant", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#2D317B",
          50: "#8B8FD5",
          100: "#7C80CF",
          200: "#5E63C4",
          300: "#4349B7",
          400: "#383D99",
          500: "#2D317B",
          600: "#1E2152",
          700: "#0F1029",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        red: {
          DEFAULT: "#7B2D2D",
        },
        green: {
          DEFAULT: "#12AF22",
        },
        gray: {
          DEFAULT: "#363940",
        },
        black: {
          DEFAULT: "#000000",
        },
      },
      fontSizes: {
        "10xl": " 4.375rem",
        "5xl": "2.5rem",
        "4xl": "2rem",
        "3xl": "1.25rem",
        "2xl": "1.125rem",
        xl: "1rem",
        lg: "0.875rem",
        md: ".75rem ",
        sm: ".625rem",
      },
    },
  },
  plugins: [],
};
