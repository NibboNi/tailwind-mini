/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
