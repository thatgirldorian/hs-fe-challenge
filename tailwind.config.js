/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        custom: "300",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      fontFamily: {
        apercu: ["Apercu Pro", "sans-serif"],
        "apercu-bold": ["Apercu Pro Bold", "sans-serif"],
        "apercu-medium": ["Apercu Medium", "sans-serif"],
        "apercu-light": ["Apercu Pro Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
