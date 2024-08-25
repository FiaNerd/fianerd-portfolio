// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'sv',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    sv: {
      translation: {
        title: 'Multi-language app',
        label: 'Välj ett annat språk!',
        home: 'Hem',
        about: 'Om Mig',
        portfolio: 'Portfolio',
        webb: 'Webb',
        allProjects: 'Alla projekt',
        frontend: 'Frontend',
        backend: 'Backend',
        fullstack: 'Fullstack',
        grafisk: 'Grafisk',
        contact: 'Kontakta mig',
      },
    },
    en: {
      translation: {
        title: 'Multi-language app',
        label: 'Select another language!',
        home: 'Home',
        about: 'About Me',
        portfolio: 'Portfolio',
        webb: 'Web',
        allProjects: 'All Projects',
        frontend: 'Frontend',
        backend: 'Backend',
        fullstack: 'Fullstack',
        grafisk: 'Graphic',
        contact: 'Contact me',
      },
    },
  },
})

export default i18n
