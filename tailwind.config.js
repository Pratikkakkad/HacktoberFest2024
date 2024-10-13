// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-red": {
          DEFAULT: "#e61d25", // Base color
          50: "#fce5e6", // Very light
          100: "#f9b7bb", // Light
          200: "#f28a8f", // Lighter
          300: "#eb5d64", // Slightly lighter
          400: "#e63039", // Darker
          500: "#e61d25", // Base color (DEFAULT)
          600: "#c2191f", // Darker shade
          700: "#9b1318", // Even darker
          800: "#740e11", // Very dark
          900: "#4e080a", // Almost black
        },
      },
    },
  },
  plugins: [],
};
