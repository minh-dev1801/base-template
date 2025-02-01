/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4e6bff",
        secondary: "#79808a",
        heading: "#181c31",
        accent: "#f4f7fa",
        pink: "#f36a8d",
        background: "#ecf0f5",
        text: "#111827",
        border: "#e5e7eb",
        borderLight: "#d8e1ed",
        borderDark: "#3c4556",
        backgroudOfDark: "#1C2136",
      },
      container: {
        center: true,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
