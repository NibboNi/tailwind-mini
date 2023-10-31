/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 1.2s linear infinite",
      },
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
      },
    },
  },
  plugins: [],
};
