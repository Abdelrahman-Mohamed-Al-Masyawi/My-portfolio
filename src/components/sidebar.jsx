import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillHome } from 'react-icons/ai';
import { FaFolderOpen, FaGraduationCap, FaPhone, FaTimes, FaTools, FaUser } from 'react-icons/fa';
import { HiLanguage } from 'react-icons/hi2';
import { useAppContext } from '../context/AppContext';
import '../styles/sidebar.css';
export default function Sidebar() {
  const [PageActive, setPageActive] = useState('Home');
  const { closeSidebar, language, toggleLanguage } = useAppContext();
  

  const {
    openSidebar,
    showSidebar,
    handleScrollTOHome,

    handleScrollTOCourses,
    handleScrollTOSkills,
    handleScrollTOAbout,
    handleScrollTOProject,
    handleScrollTOContact,
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

  const { t, i18n } = useTranslation('sidebar');

  return (
    <aside className='aside'>
      <div className='container-name-sidebar'>
        <img src='/imgs/mylogo1.png' alt='' className='myImg' />
        <span>{t('Abdelrahman')} </span>
        <FaTimes onClick={closeSidebar} className='closeIcon' />
      </div>
      <p className='name-Jop'>{t('Front-end developer')}</p>

      <ul className='links'>
        <li
          // style={{ color: Style('Home') }}
          className='item-page'
          onClick={() => ActivePage('Home', handleScrollTOHome)}>
          <AiFillHome /> <span>{t('Home')}</span>
        </li>
        <li
          // style={{ color: Style('about me') }}
          className='item-page'
          onClick={() => ActivePage('about me', handleScrollTOAbout)}>
          <FaUser /> <span>{t('About me')}</span>
        </li>
        <li
          // style={{ color: Style('skills') }}
          className='item-page'
          onClick={() => ActivePage('skills', handleScrollTOSkills)}>
          <FaTools /> <span>{t('Skills')} </span>
        </li>
        <li
          // style={{ color: Style('projects') }}
          className='item-page'
          onClick={() => ActivePage('projects', handleScrollTOProject)}>
          <FaFolderOpen />
          <span>{t('Projects')}</span>
        </li>
        <li
          // style={{ color: Style('courses') }}
          className='item-page'
          onClick={() => ActivePage('courses', handleScrollTOCourses)}>
          <FaGraduationCap />
          <span>{t('Courses')} </span>
        </li>
        <li
          // style={{ color: Style('contact') }}
          className='item-page'
          onClick={() => ActivePage('contact', handleScrollTOContact)}>
          <FaPhone />
          <span>{t('Contact')} </span>
        </li>
      </ul>

      {/* <div className='container-lang'>
        <div onClick={toggleLanguage}>
          <HiLanguage className='iconLang' />
          <span>{language === 'English' ? 'عربي' : 'English'}</span>
        </div>
      </div> */}

      <div className='container-lang' onClick={toggleLanguage}>
        <div>
          <HiLanguage className='iconLang' />
          <span>{i18n.language === 'en' ? 'عربي' : 'English'}</span>
        </div>
      </div>
    </aside>
  );
}
