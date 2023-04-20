/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dracula" ,"synthwave"],
  },
  plugins: [require("daisyui")],
}
