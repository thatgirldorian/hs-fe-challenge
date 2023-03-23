/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        secondary: "#5856D6",
        success: "#34C759",
        warning: "#FF9500",
        error: "#FF3B30",
      },
      fontFamily: {
        apercu: ["Apercu Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
