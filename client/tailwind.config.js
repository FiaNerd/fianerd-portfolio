/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#efe5df',
      black: '#000000',
      purple: '#544758',
      pink: '#6c1a51',
      // mainText: '#42383f',
      dark: '#42383f',
      red: '#420202',
      'dark-red': '#230c0a',
      'dark-green': '#022530',
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
