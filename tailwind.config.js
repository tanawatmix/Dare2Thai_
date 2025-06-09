/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a7f3d0', // Blue
        secondary: '#0053ff', // Yellow
        accent: '#eba3ff', // Red
        neutral: '#374151', // Gray
        'base-100': '#FFFFFF', // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}