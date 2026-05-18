import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useAppContext } from '../context/AppContext';
import '../styles/Header.css';
import useResponsive from './../hooks/useResponsive';
export default function Header() {
  const { isTabletWithPhone } = useResponsive();
  const {
    openSidebar,
    showSidebar,

  } = useAppContext();

  if (isTabletWithPhone) {
    return (
      <header>
        <div className='logo'>LOGO</div>
        <RxHamburgerMenu className='iconMenu' onClick={openSidebar} />
      </header>
    );
  }

  return (
    <header>
      <div className='logo'>LOGO</div>
      <Navigation />
      <button className='btn-hire-me'>Hire Me</button>
    </header>
  );
}

function Navigation() {
  const [PageActive, setPageActive] = useState('Home');

  const {
    openSidebar,
    showSidebar,
    handleScrollTOHome,
    handleScrollTOContact,
    handleScrollTOCourses,
    handleScrollTOSkills,
    handleScrollTOAbout,
    handleScrollTOProject,
  } = useAppContext();

  function ActivePage(value, fun) {
    setPageActive(value);
    if (fun) {
      fun();
    }
  }

  function Style(value) {
    let color = ' #f68127  ';
    if (PageActive === value) {
      return color;
    }
  }
  return (
    <ul className='pages'>
      <li style={{ color: Style('Home') }} className='one-page' onClick={() => ActivePage('Home', handleScrollTOHome)}>
        Home
      </li>
      <li
        style={{ color: Style('about me') }}
        className='one-page'
        onClick={() => ActivePage('about me', handleScrollTOAbout)}>
        about me
      </li>
      <li
        style={{ color: Style('skills') }}
        className='one-page'
        onClick={() => ActivePage('skills', handleScrollTOSkills)}>
        skills
      </li>
      <li
        style={{ color: Style('projects') }}
        className='one-page'
        onClick={() => ActivePage('projects', handleScrollTOProject)}>
        projects
      </li>
      <li
        style={{ color: Style('courses') }}
        className='one-page'
        onClick={() => ActivePage('courses', handleScrollTOCourses)}>
        courses
      </li>

      <li
        style={{ color: Style('Contact') }}
        className='one-page'
        onClick={() => ActivePage('Contact', handleScrollTOContact)}>
        Contact
      </li>
    </ul>
  );
}
