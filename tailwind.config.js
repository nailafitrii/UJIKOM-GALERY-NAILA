/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        primary: "#4d7c0f",
        secondary: "#3f6212",
        bg: "#fff",
        text: "#000",
        text_secondary: "#475569",
      },
    },
  },
  plugins: [],
};
