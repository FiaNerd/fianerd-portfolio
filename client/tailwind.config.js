/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // LIGHT
      white: '#efe5df',
      black: '#1c2226',
      'dark-red': '#2f1628',
      pink: '#ffaaab',
      'coral-pink': '#ff5e6c',
      yellow: '#feb300',

      // DARK
      dark: '#42383f',
      'dark-purple': '#1b063c',

      // purple: '#544758',
      // 'dark-green': '#022530',
      // pink: '#6c1a51',
      // mainText: '#42383f',
      // red: '#420202',
      // 'dark-red': '#2e192c',
      // 'dark-red': '#230c0a',
    },
    fontFamily: {
      heading: ['playfair-display', 'serif'],
      'sub-heading': ['merriweather', 'sans-serif'],
      paragraph: ['source-sans-pro', 'sans-serif'],
      // 'sub-heading': ['bebas-neue-pro', 'sans-serif'],
      // 'sub-heading': ['cormorant-garamond', 'serif'],
    },
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
      custom: '703px',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
