import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaBriefcase, FaFolderOpen, FaGraduationCap, FaPhone, FaTimes, FaTools, FaUser } from 'react-icons/fa';
import { HiLanguage } from 'react-icons/hi2';
import { MdDesignServices } from 'react-icons/md';
import { useAppContext } from '../context/AppContext';
import '../styles/sidebar.css';
export default function Sidebar() {
  const [PageActive, setPageActive] = useState('Home');
  const { closeSidebar, language, toggleLanguage } = useAppContext();
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

  const actions = {
    ActivePage(value, fn) {
      setPageActive(value);
      closeSidebar();
      if (fn) {
        fn();
      }
    },
    Style(value) {
      let color = ' #ff6a00';
      if (PageActive === value) {
        return color;
      }
    },
  };

  const { ActivePage, Style } = actions;
  return (
    <aside className='aside'>
      <div className='container-name-sidebar'>
        <img src='/imgs/mylogo1.png' alt='' className='myImg' />
        <span>Abdelrahman </span>
        <FaTimes onClick={closeSidebar} className='closeIcon' />
      </div>
      <p className='name-Jop'>Front-end Developer</p>

      <ul className='links'>
        <li
          style={{ color: Style('Home') }}
          className='item-page'
          onClick={() => ActivePage('Home', handleScrollTOHome)}>
          <AiFillHome /> <span>Home</span>
        </li>
        <li
          style={{ color: Style('about me') }}
          className='item-page'
          onClick={() => ActivePage('about me', handleScrollTOAbout)}>
          <FaUser /> <span>about me</span>
        </li>
        <li
          style={{ color: Style('skills') }}
          className='item-page'
          onClick={() => ActivePage('skills', handleScrollTOSkills)}>
          <FaTools /> <span>skills </span>
        </li>
        <li
          style={{ color: Style('projects') }}
          className='item-page'
          onClick={() => ActivePage('projects', handleScrollTOProject)}>
          <FaFolderOpen />
          <span>projects</span>
        </li>
        <li
          style={{ color: Style('courses') }}
          className='item-page'
          onClick={() => ActivePage('courses', handleScrollTOCourses)}>
          <FaGraduationCap />
          <span>courses </span>
        </li>
        <li
          style={{ color: Style('contact') }}
          className='item-page'
          onClick={() => ActivePage('contact', handleScrollTOCourses)}>
          <FaPhone />
          <span>contact </span>
        </li>
      </ul>

      <div className='container-lang'>
        <div onClick={toggleLanguage}>
          <HiLanguage className='iconLang' />
          <span>{language === 'English' ? 'عربي' : 'English'}</span>
        </div>
      </div>
    </aside>
  );
}
