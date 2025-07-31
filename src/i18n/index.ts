import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './ru.json';
import uz from './uz.json';
import en from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      uz: { translation: uz },
      en: { translation: en },
    },
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: { escapeValue: false },
  });

export default i18n; 