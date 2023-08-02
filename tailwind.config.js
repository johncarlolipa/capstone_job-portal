/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["Assistant", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        noto: ["Noto", "sans-serif"],
      },
      colors: {
        "mountain-meadow": {
          DEFAULT: "#10B981",
          50: "#D7FCEF",
          100: "#C4FAE8",
          200: "#9EF7D9",
          300: "#79F3CB",
          400: "#53F0BC",
          500: "#2EEDAE",
          600: "#13DF9B",
          700: "#10B981",
          800: "#0C855D",
          900: "#075239",
          950: "#053827",
        },
      },
      fontSizes: {
        '10xl': ' 4.375rem',
        '5xl': '2.5rem',
        '4xl': '2rem',
        '3xl': '1.25rem',
        '2xl': '1.125rem',
        'xl':'1rem',
        'lg':'0.875rem',
        'md' :'.75rem ',
        'sm' : '.625rem',
      }
    },
  },
  plugins: [],
};
