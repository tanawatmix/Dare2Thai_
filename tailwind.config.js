/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFF', // Blue
        secondary: '#000', // Yellow
        accent: '#808080', // Red
        neutral: ' #808080', // Gray
        'base-100': '#FFFFFF', // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'light-bg': "url(https://img.freepik.com/free-photo/empty-room-background-with-white-walls_23-2151020041.jpg?semt=ais_hybrid&w=740)",
        'dark-bg': "url('https://img.freepik.com/free-photo/black-white-background_23-2150530984.jpg?semt=ais_hybrid&w=740')",
      },
    },
  },
  plugins: [],
}