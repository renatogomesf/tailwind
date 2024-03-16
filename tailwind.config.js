/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      renato: {
        100:'#f0dc4e',
        200:'#baa93b',
        300:'#6d6321',
      },
    },

    extend: {},
  },
  plugins: [],
}