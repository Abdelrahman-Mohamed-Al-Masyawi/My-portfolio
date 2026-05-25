import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [lightMood, setLightMood] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (lightMood) {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [lightMood]);

  function handleLightMood() {
    lightMood ? setLightMood(false) : setLightMood(true);
  }

  return <ThemeContext.Provider value={{ lightMood, setLightMood, handleLightMood }}>{children}</ThemeContext.Provider>;
}

//* custom hook

/**
 * الحلات
 *@ lightMood
 *@setLightMood,
 *@ الدوال
 *@handleLightMood,
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error('this context must be inside provider component');
  return context;
}
