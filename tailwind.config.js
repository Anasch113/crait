/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {

        'bg-pink': '#ffb8ff',
        'bg-black': '#141314',
        'bg-light-pink': '#e5b7eb',
        'bg-brown-light' : 'rgb(56 45 45)'

      },
      colors: {
        'text-pink': '#ffb8ff'
      },
      borderColor: {
        'border-pink': '#e5b7eb',
      }
    },
  },
  plugins: [],
}