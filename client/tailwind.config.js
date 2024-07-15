/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#efe5df',
        purple: '#544758',
        pink: '#6c1a51',
        mainText: '#42383f',
        dark: '#42383f',
      },
      fontFamily: {
        title: ['bebas-neue-pro', 'sans-serif'],
        'sub-title': ['playfair-display', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
