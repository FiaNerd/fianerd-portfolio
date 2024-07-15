/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#efe5df',
      purple: '#544758',
      pink: '#6c1a51',
      mainText: '#42383f',
      dark: '#42383f',
      red: '#230c0a'
    },
    fontFamily: {
      title: ['bebas-neue-pro', 'sans-serif'],
      'sub-title': ['playfair-display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
