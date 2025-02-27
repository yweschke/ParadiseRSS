import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import home from './en/home.json';

export const defaultNS = 'home';

i18next.use(initReactI18next).init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
        en: {
            home,
        },
    },
    defaultNS,
});
