import { createContext, useContext, useState } from 'react';
const SidebarContext = createContext();

export default function SidebarProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <SidebarContext.Provider
      value={{
        //*sidebar
        showSidebar,
        setShowSidebar,
        openSidebar,
        closeSidebar,
      }}>
      {children}
    </SidebarContext.Provider>
  );
}

//* custom hook

/**
 * الحلات
 *@showSidebar,
 *@setShowSidebar,
 *@ الدوال
 *@openSidebar,
 *@closeSidebar,
 */
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) throw new Error('this context must be inside provider component');
  return context;
}
