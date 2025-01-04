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
      loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['home', 
         'heroSection', 
          'abouMe', 
          "webSkills", 
          "graphicSkills", 
          'Skills', 
          "Profile/Skills/otherSkills", 
          "WebSkills"
      ],
      defaultNS: 'HeroSection', 
      detection: {
        order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'], 
        caches: ['localStorage', 'cookie'], 
      },
  })

export default i18n
