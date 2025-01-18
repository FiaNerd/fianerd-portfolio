import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: undefined,
    fallbackLng: ['en', 'sv'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/{{ns}}.json', // Dynamic loading of translation files
    },
    ns: [
      'home', 
      'heroSection', 
      'Profile/aboutMe', 
      "Profile/skills/webSkills", 
      "Profile/skills/graphicSkills", 
      "Profile/skills/otherSkills",   
      "Profile/skills/programsAndSoftwares",   
      "Profile/skills/webSkills",
      "Profile/experience",
      "Profile/education",
      "Profile/hobbies", 
      "portfolio/heroPortfolioSection",
      "portfolio/portfolioSection",
    ],
    defaultNS: 'HeroSection', // Default namespace
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'], 
      caches: ['localStorage', 'cookie'],
    },
  })

export default i18n
