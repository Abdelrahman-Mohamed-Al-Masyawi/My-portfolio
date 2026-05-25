import { createContext, useContext, useRef } from 'react';
const ScrollTOSectionContext = createContext();

export default function ScrollTOSectionProvider({ children }) {
  //* section navbar scrolling to any another section with by using useRef
  const homeRef = useRef(null);
  const aboutRf = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);

  //function scroll
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
    <ScrollTOSectionContext.Provider
      value={{
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
    </ScrollTOSectionContext.Provider>
  );
}

//* custom hook

/**
 * الحلات
 *@homeRef,
 *@aboutRf,
 *@skillsRef,
 *@projectRef,
 *@coursesRef,
 *@coursesRef,
 *@contactRef,
 *@ الدوال
 *@handleScrollTOHome,
 *@handleScrollTOContact,
 *@handleScrollTOCourses,
 *@handleScrollTOSkills,
 *@handleScrollTOAbout,
 *@handleScrollTOProject,
 */
export function useScrollTOSection() {
  const context = useContext(ScrollTOSectionContext);
  if (context === undefined) throw new Error('this context must be inside provider component');
  return context;
}
