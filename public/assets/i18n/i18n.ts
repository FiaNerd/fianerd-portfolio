import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('i18nextLng') || navigator.language || 'en-US',
    fallbackLng: ['sv-SE', 'en-US'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/{{ns}}.json', 
    },    
    ns: [
      'translation',
      'home', 
      'heroSection', 
      'profile',
      'profile/aboutMe', 
      "profile/skills/webSkills", 
      "profile/skills/graphicSkills", 
      "profile/skills/otherSkills",   
      "profile/skills/programsAndSoftwares",   
      "profile/skills/webSkills",
      "profile/experience",
      "profile/education",
      "profile/hobbies", 
      "portfolio",
      "portfolio/heroPortfolioSection",
      "portfolio/portfolio",
      "portfolio/top5PortfolioSection",
      "portfolio/frontendPortfolioSection",
      "portfolio/backendPortfolioSection",
      "portfolio/fullstackPortfolioSection",
    ],
    defaultNS: 'heroSection',
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'], 
      caches: ['localStorage', 'cookie'],
    },
    debug: true,
  })

export default i18n