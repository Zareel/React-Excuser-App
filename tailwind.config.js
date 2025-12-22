/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron:["Orbitron","sans-serif"],
        head: ["Freckle Face", "system-ui"],
        excuse:["Finger Paint", "cursive"]
      },
    },
  },
  plugins: [],
};