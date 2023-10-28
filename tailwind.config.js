/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
      mono: ["Rokkitt", "monospace"],
    },
    extend: {
      animation: {
        "ping-slow": "ping 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
