import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const LANGUAGE_STORAGE_KEY = 'club-master-language'
const supportedLanguages = ['fi', 'en'] as const

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (savedLanguage && supportedLanguages.includes(savedLanguage as (typeof supportedLanguages)[number])) {
    return savedLanguage
  }

  const browserLanguage = navigator.language.split('-')[0]
  if (supportedLanguages.includes(browserLanguage as (typeof supportedLanguages)[number])) {
    return browserLanguage
  }

  return 'fi'
}

const resources = {
  fi: {
    translation: {
      app: {
        title: 'Club Master 3000',
      },
      nav: {
        proposals: 'Ehdotukset',
        calendar: 'Kalenteri',
        language: 'Kieli',
        openMenu: 'Avaa valikko',
        changeLanguage: 'Vaihda kieli',
      },
      language: {
        fi: 'Suomi',
        en: 'English',
      },
      eventsPage: {
        title: 'Klubitoiminnan ehdotukset',
      },
      eventList: {
        empty: 'Ei ehdotuksia vielä. Lisää ensimmäinen tapahtuma.',
        confirmed: 'Vahvistettu',
        noDescription: 'Ei kuvausta',
      },
      eventForm: {
        title: 'Ehdota tapahtumaa',
        nameLabel: 'Tapahtuman nimi',
        descriptionLabel: 'Kuvaus',
        dateLabel: 'Päivämäärä',
        saving: 'Tallennetaan...',
        submit: 'Lähetä ehdotus',
      },
      calendar: {
        title: 'Tapahtumakalenteri',
        empty: 'Ei vahvistettuja tapahtumia vielä.',
      },
      notFound: {
        title: 'Sivua ei löytynyt',
      },
      errors: {
        loadEvents: 'Tapahtumia ei voitu ladata. Onko JSON Server käynnissä?',
      },
    },
  },
  en: {
    translation: {
      app: {
        title: 'Club Master 3000',
      },
      nav: {
        proposals: 'Proposals',
        calendar: 'Calendar',
        language: 'Language',
        openMenu: 'Open menu',
        changeLanguage: 'Change language',
      },
      language: {
        fi: 'Suomi',
        en: 'English',
      },
      eventsPage: {
        title: 'Club activity proposals',
      },
      eventList: {
        empty: 'No proposals yet. Add the first event.',
        confirmed: 'Confirmed',
        noDescription: 'No description',
      },
      eventForm: {
        title: 'Suggest an event',
        nameLabel: 'Event name',
        descriptionLabel: 'Description',
        dateLabel: 'Date',
        saving: 'Saving...',
        submit: 'Submit proposal',
      },
      calendar: {
        title: 'Event calendar',
        empty: 'No confirmed events yet.',
      },
      notFound: {
        title: 'Page not found',
      },
      errors: {
        loadEvents: 'Failed to load events. Is JSON Server running?',
      },
    },
  },
}

void i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'fi',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  document.documentElement.lang = language
})

document.documentElement.lang = i18n.language

export default i18n