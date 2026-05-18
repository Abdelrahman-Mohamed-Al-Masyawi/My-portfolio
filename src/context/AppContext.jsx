// استدعاء الهوك
import { createContext, useContext, useRef, useState } from 'react';

// عمل الحاويه لتخزين الحالات بداخلها
const AppContext = createContext();

// عمل الكمبوناد الخاص بتخزين كل الحالات والدوال التي يجب مشاركتها مع باقي التطبيق

export default function AppProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [language, setLanguage] = useState('English');
  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);
  const toggleLanguage = () => (language === 'English' ? setLanguage('Arabic') : setLanguage('English'));

  //?section navbar scrolling to any another section with by using useRef
  const homeRef = useRef(null);
  const aboutRf = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);
  //function
  function handleScrollTOHome() {
    homeRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }
  function handleScrollTOAbout() {
    aboutRf.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }
  function handleScrollTOSkills() {
    skillsRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }
  function handleScrollTOProject() {
    projectRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }
  function handleScrollTOCourses() {
    coursesRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }
  function handleScrollTOContact() {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }

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

        //* reference to any section
        homeRef,
        aboutRf,
        skillsRef,
        projectRef,
        coursesRef,
        coursesRef,
        contactRef,

        //* function scrolling
        handleScrollTOHome,
        handleScrollTOContact,
        handleScrollTOCourses,
        handleScrollTOSkills,
        handleScrollTOAbout,
        handleScrollTOProject,
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
 *@  reference to any section=>
        homeRef,
        aboutRf,
        skillsRef,
        projectRef,
        coursesRef,
        coursesRef,
        contactRef,
 */
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) throw new Error('this context must be inside provider component');
  return context;
}
