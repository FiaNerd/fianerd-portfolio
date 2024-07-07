/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#efe5df',
      purple: '#544758',
      pink: '#6c1a51',
      mainText: '#42383f',
    },
    fontFamily: {
      // title: ['chiavettieri', 'sans-serif'],
      title: ['bebas-neue-pro', 'sans-serif'],
      'sub-title': ['playfair-display', 'serif']
      // title: ['quiroh', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
