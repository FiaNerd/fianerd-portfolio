const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
        'nav-text': 'var(--color-nav-text)',
        'nav-hover': 'var(--color-nav-hover)',
        outlinedLight: '#e63946',
        outlinedDark: '#dbf5d5',
      },
      fontFamily: {
        heading: ['fredericka-the-greatest', 'serif'],
        textImportant: ['pf-fuel-decay', 'sans-serif'],
        'sub-heading': ['cabin-sketch-regular', 'sans-serif'],
      },
      zIndex: {
        '100': '100',
      },
      screens: {
        xxs: '320px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      resolutions: {
        '2': '2dppx',
        '3': '3dppx',
        '4': '4dppx',
        '5': '5dppx',
        '6': '6dppx'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      keyframes: {
        fade: {
          'from': { opacity: 0.4 },
          'to': { opacity: 1 },
        },
      },
      animation: {
        fade: 'fade 1.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-resolution'),
    require('tailwindcss-highlights'),
  ],
  variants: {
    aspectRatio: ['responsive', 'hover'],
  },
});