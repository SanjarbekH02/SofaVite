import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import languageDetoctor from 'i18next-browser-languagedetector'
import uzTranslation from '../public/locales/uz.json'
import ruTranslation from '../public/locales/ru.json'
import enTranslation from '../public/locales/en.json'

const laungage = localStorage.getItem('i18nextLng') || 'ru'

i18n
.use(I18NextHttpBackend)
.use(languageDetoctor)
.use(initReactI18next)
.init({
    fallbackLng : 'en',
    lng : laungage,
    debug : true,
    resources : {
        uz:{translation: uzTranslation},
        ru:{translation: ruTranslation},
        en:{translation: enTranslation}
    }
})

export default i18n;