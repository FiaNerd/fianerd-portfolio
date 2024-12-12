/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-mode': 'var(--color-bg-mode)',
        'accent-primary': 'var(--color-accent-primary)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'text-heading': 'var(--color-text-heading)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        'btn-primary': 'var(--color-btn-primary)',
        'btn-secondary': 'var(--color-btn-secondary)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'hover-primary': 'var(--color-hover-primary)',
        'hover-text': 'var(--color-hover-text)',
        'bg-plate': 'var(--color-bg-plate)',
      },
      zIndex: {
        '100': '100',
      },
      fontFamily: {
        heading: ["proxima-nova", 'sans-serif'],
        // heading: ['playfair-display', 'serif'],
        'sub-heading': ["proxima-nova", 'sans-serif'],
        // 'sub-heading': ['merriweather', 'sans-serif'],
        paragraph: ['Poppins', 'sans-serif'],
        // paragraph: ['source-sans-pro', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px', '1.2'], 
        h2: ['36px', '1.3'], 
        h3: ['24px', '1.4'], 
        h4: ['20px', '1.6'],
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
