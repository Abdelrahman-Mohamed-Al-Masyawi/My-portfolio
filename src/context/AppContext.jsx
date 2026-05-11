// استدعاء الهوك
import { createContext, useContext, useState } from 'react';

// عمل الحاويه لتخزين الحالات بداخلها
const AppContext = createContext();

// عمل الكمبوناد الخاص بتخزين كل الحالات والدوال التي يجب مشاركتها مع باقي التطبيق

export default function AppProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [language, setLanguage] = useState('English');
  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);
  const toggleLanguage = () => (language === 'English' ? setLanguage('Arabic') : setLanguage('English'));

  return (
    <AppContext.Provider
      value={{
        //*sidebar
        showSidebar,
        setShowSidebar,
        openSidebar,
        closeSidebar,

        // *language
        language,
        setLanguage,
        toggleLanguage,
      }}>
      {children}
    </AppContext.Provider>
  );
}

// عمل الهوك المخصص لجلب كل الحالات والدوال

//* custom hook

/**
 * الحلات
 *@ Sidebar -setShowSidebar
 *@ language, setLanguage
 *@ الدوال
 *@ openSidebar - closeSidebar
 *@ toggleLanguage
 */
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) throw new Error('this context must be inside provider component');
  return context;
}
