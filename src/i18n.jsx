import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import arContact from './locales/ar/contact.json';
import arCourses from './locales/ar/courses.json';
import arAbout from './locales/ar/about.json';
import arFooter from './locales/ar/footer.json';
import arHome from './locales/ar/home.json';
import arNavbar from './locales/ar/navbar.json';
import arProjects from './locales/ar/projects.json';
import arSidebar from './locales/ar/sidebar.json';
import arSkills from './locales/ar/skills.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        navbar: arNavbar,
        home: arHome,
        footer: arFooter,
        skills: arSkills,
        projects: arProjects,
        courses: arCourses,
        contact: arContact,
        sidebar: arSidebar,
        about: arAbout,
      },
    },
    ns: ['home', 'navbar', 'footer', 'skills', 'projects', 'courses', 'contact', 'about', 'sidebar'],
    fallbackLng: 'en',
    lng: 'en',

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
