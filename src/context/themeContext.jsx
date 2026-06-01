import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMood() {
   setDarkMode((prev) => !prev);
  }
/*
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
*/
  return <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMood }}>{children}</ThemeContext.Provider>;
}

//* custom hook

/**
 * الحلات
 *@ darkMode
 *@setDarkMod,
 *@ الدوال
 *@toggleDarkMood,
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error('this context must be inside provider component');
  return context;
}
