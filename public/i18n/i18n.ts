import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('i18nextLng') || navigator.language || 'en',
    fallbackLng: ['en', 'sv'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: [
      'translation',
      'common',
      'home',
      'heroSection',

      'profile',
      'profile/aboutMe',
      'profile/experience',
      'profile/education',
      'profile/hobbies',
      'profile/skills/webSkills',
      'profile/skills/graphicSkills',
      'profile/skills/otherSkills',
      'profile/skills/programsAndSoftwares',

      'portfolio',
      'portfolio/heroPortfolioSection',
      'portfolio/portfolio',
      'portfolio/top5PortfolioSection',
      'portfolio/frontendPortfolioSection',
      'portfolio/backendPortfolioSection',
      'portfolio/fullstackPortfolioSection',

      'contact/contact',
      'contact/contactForm',
      'contact/contactFormValidation',
      'contact/contactValidation',

      'blogPost',
      'blogPost/blogPostCards',
    ],
    defaultNS: 'translation',
    detection: {
      order: [
        'querystring',
        'localStorage',
        'cookie',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
      ],
      caches: ['localStorage', 'cookie'],
    },
    debug: true,
  });

export default i18n;
