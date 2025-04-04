/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#0D9488",
        secondary: "#F0F8FF",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#808080",
      }
    },
  },
  plugins: [],
}