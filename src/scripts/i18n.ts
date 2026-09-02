import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

i18next
  .use(LanguageDetector)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: 'es',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

function updateDOM() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const text = i18next.t(key);
      if (typeof text === 'string') {
        el.textContent = text;
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      (el as HTMLInputElement).placeholder = i18next.t(key);
    }
  });

  document.documentElement.lang = i18next.language;
}

export function toggleLanguage() {
  const newLang = i18next.language === 'es' ? 'en' : 'es';
  i18next.changeLanguage(newLang).then(() => {
    updateDOM();
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.textContent = newLang.toUpperCase();
    }
  });
}

export function initI18n() {
  updateDOM();
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = i18next.language.toUpperCase();
  }
}
