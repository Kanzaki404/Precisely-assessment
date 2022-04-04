import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import TranslationEn from './en.json'
import TranslationSv from './sv.json'

i18n
.use(initReactI18next)
.init({
    resources: {
        en: {translation: TranslationEn},
        sv: {translation: TranslationSv}
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false}
})

export default i18n;