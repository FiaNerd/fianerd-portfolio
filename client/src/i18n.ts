// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
        alla_projekt: 'Alla projekt',
        frontend: 'Frontend',
        backend: 'Backend',
        fullstack: 'Fullstack',
        grafisk: 'Grafisk',
        kontakt: 'Kontakt',
      },
    },
    en: {
      translation: {
        title: 'Multi-language app',
        label: 'Select another language!',
        home: 'Home',
        about: 'About Me',
        portfolio: 'Portfolio',
        webb: 'Web Development',
        alla_projekt: 'All Projects',
        frontend: 'Frontend',
        backend: 'Backend',
        fullstack: 'Fullstack',
        grafisk: 'Graphic Design',
        kontakt: 'Contact',
      },
    },
  },
});

export default i18n;
