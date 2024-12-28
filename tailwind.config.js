/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-mode': 'var(--color-bg-mode)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'accent-primary': 'var(--color-accent-primary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-accent': 'var(--color-text-accent)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'btn-bg': 'var(--color-btn-bg)',
        'bg-hover': 'var(--color-bg-hover)',
        'hover-text': 'var(--color-hover-text)',
      },
      fontFamily: {
        heading: ['playfair-display', 'serif'],
        'sub-heading': ["proxima-nova", 'sans-serif'],
      },
      zIndex: {
        '100': '100',
      },
      breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1440px',
        custom: '703px',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
  },
  plugins: [],
  darkMode: 'class', 
}
