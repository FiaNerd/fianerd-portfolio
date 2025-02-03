import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
<<<<<<< HEAD
    lng: navigator.language || 'en',
=======
    lng: localStorage.getItem('i18nextLng') || navigator.language || 'en',
>>>>>>> feature/frontend-portfolio
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
      "portfolio/top5PortfolioSection",
      "portfolio/frontendPortfolioSection"
    ],
    defaultNS: 'heroSection', // Default namespace
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'], 
      caches: ['localStorage', 'cookie'],
    },
    debug: true,
  })
<<<<<<< HEAD

<<<<<<< HEAD
=======
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
  localStorage.setItem('i18nextLng', lng);
});

i18n.on('loaded', (loaded) => {
  console.log('Loaded translations:', loaded);
});

>>>>>>> feature/frontend-portfolio
=======
>>>>>>> feature/frontend-portfolio
export default i18n