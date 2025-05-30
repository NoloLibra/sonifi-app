/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        kodchasan: ['Kodchasan', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

