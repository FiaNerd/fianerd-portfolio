
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
        'nav-text': 'var(--color-nav-text)',
        'nav-hover': 'var(--color-nav-hover)'
      },
      fontFamily: {
        // heading: ['veneer', 'sans-serif'],
        heading: ['fredericka-the-greatest', 'serif'],
        textImportant: ['pf-fuel-decay', 'sans-serif'],
        'sub-heading': ['cabin-sketch-regular', 'sans-serif'],
        // heading: ['cabin-sketch-bold', 'sans-serif'],
        // heading: ['playfair-display', 'serif'],s
        // heading: ['ltc-artscript-pro', 'sans-serif'],
        // 'sub-heading': ['proxima-nova', 'sans-serif'],

      },
      zIndex: {
        '100': '100',
      },
      screens: {
        sm: '640px',  
        md: '768px', 
        lg: '1024px',
        xl: '1280px', 
        '2xl': '1536px', 
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
