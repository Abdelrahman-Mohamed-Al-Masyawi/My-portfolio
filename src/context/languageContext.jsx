import { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('English');
  const { t, i18n } = useTranslation();

  // function translation
  function toggleLanguage() {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ar');
    } else {
      i18n.changeLanguage('en');
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>{children}</LanguageContext.Provider>
  );
}


//* custom hook

/**
 * الحلات
 *@ language
 *@ الدوال
 *@ toggleLanguage
 
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('this context must be inside provider component');
  return context;
}
