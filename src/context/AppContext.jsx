// استدعاء البروفيدر الابناء
import LanguageProvider from './languageContext';
import ScrollTOSectionProvider from './scrollToSectionContext';
import SidebarProvider from './sideBarContext';
import ThemeProvider from './themeContext';

export default function AppProvider({ children }) {
  
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <ScrollTOSectionProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ScrollTOSectionProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
