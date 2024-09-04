/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'btn-primary': 'var(--color-btn-primary)',
        'btn-secondary': 'var(--color-btn-secondary)',
      },
      fontFamily: {
        heading: ['playfair-display', 'serif'],
        'sub-heading': ['merriweather', 'sans-serif'],
        paragraph: ['source-sans-pro', 'sans-serif'],
      },
      breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1440px',
        custom: '703px',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode support
}
