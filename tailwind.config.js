/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': "#EBECF0",
        'blueText': "#003966",
        'footerColor': "#488FB0",
        'inputColor': "#E6EEF8",
        'inputPlaceholder': "#90A4AE"
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'Roboto': ["Roboto", 'sans-serif'],
      },
    },
  },
  plugins: [],
}