import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector' // Import LanguageDetector module

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'sv',
    fallbackLng: ['en', 'sv'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['home', 'heroSection', 'abouMe', "skills"],
    defaultNS: 'home',
  })

export default i18n
