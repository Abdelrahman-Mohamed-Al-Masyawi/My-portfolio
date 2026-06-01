import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillHome } from 'react-icons/ai';
import { FaFolderOpen, FaGraduationCap, FaMoon, FaPhone, FaSun, FaTimes, FaTools, FaUser } from 'react-icons/fa';
import { HiLanguage } from 'react-icons/hi2';
import { useLanguage } from '../context/languageContext';
import { useScrollTOSection } from '../context/scrollToSectionContext';
import { useSidebar } from '../context/sideBarContext';
import { useTheme } from '../context/themeContext';
import '../styles/sidebar.css';

export default function Sidebar() {
  const [PageActive, setPageActive] = useState('Home');
  const { closeSidebar } = useSidebar();
  const { language, toggleLanguage } = useLanguage();
  const { openSidebar, showSidebar } = useSidebar();

  const {
    handleScrollTOHome,
    handleScrollTOContact,
    handleScrollTOCourses,
    handleScrollTOSkills,
    handleScrollTOAbout,
    handleScrollTOProject,
  } = useScrollTOSection();

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
  const { toggleDarkMood, lightMood } = useTheme();
  return (
    <aside className='aside bg-white! dark:bg-black-8! dark:text-white'>
      <div className='container-name-sidebar'>
        <img src='/imgs/mylogo1.png' alt='' className='myImg' />
        <span>{t('Abdelrahman')} </span>
        <FaTimes onClick={closeSidebar} className='closeIcon dark:text-[#eb0707]' />
      </div>
      <p className='name-Jop dark:text-gold-5'>{t('Front-end developer')}</p>

      <ul className='links'>
        <li
          // style={{ color: Style('Home') }}
          className='item-page dark:hover:bg-[#ff6a0014] dark:hover:text-gold-5'
          onClick={() => ActivePage('Home', handleScrollTOHome)}>
          <AiFillHome /> <span>{t('Home')}</span>
        </li>
        <li
          // style={{ color: Style('about me') }}
          className='item-page dark:hover:bg-[#ff6a0014] dark:hover:text-gold-5'
          onClick={() => ActivePage('about me', handleScrollTOAbout)}>
          <FaUser /> <span>{t('About me')}</span>
        </li>
        <li
          // style={{ color: Style('skills') }}
          className='item-page dark:hover:bg-[#ff6a0014] dark:hover:text-gold-5'
          onClick={() => ActivePage('skills', handleScrollTOSkills)}>
          <FaTools /> <span>{t('Skills')} </span>
        </li>
        <li
          // style={{ color: Style('projects') }}
          className='item-page dark:hover:bg-[#ff6a0014] dark:hover:text-gold-5'
          onClick={() => ActivePage('projects', handleScrollTOProject)}>
          <FaFolderOpen />
          <span>{t('Projects')}</span>
        </li>
        <li
          // style={{ color: Style('courses') }}
          className='item-page dark:hover:bg-[#ff6a0014] dark:hover:text-gold-5'
          onClick={() => ActivePage('courses', handleScrollTOCourses)}>
          <FaGraduationCap />
          <span>{t('Courses')} </span>
        </li>
        <li
          // style={{ color: Style('contact') }}
          className='item-page dark:hover:bg-[#ff6a0014] dark:hover:text-gold-5'
          onClick={() => ActivePage('contact', handleScrollTOContact)}>
          <FaPhone />
          <span>{t('Contact')} </span>
        </li>
      </ul>

      <LanguageWithDarMode />
    </aside>
  );
}

function LanguageWithDarMode() {
  const { t, i18n } = useTranslation('sidebar');
  const { toggleDarkMood, darkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className='container-lang-theme dark:bg-[#17191d] '>
      <button onClick={toggleDarkMood} className='container-lightMood dark:bg-[#171a1e] dark:hover:bg-[#2b3138] '>
        {darkMode ?
          <FaSun className=' sun-sidebar dark:text-sun' />
        : <FaMoon className=' moon-sidebar dark:text-moon' />}
      </button>
      <span className='line dark:bg-[#f5deb3]'></span>
      <button
        onClick={toggleLanguage}
        className='container-lang dark:text-white dark:bg-[#14171c] dark:hover:bg-[#2b3138]'>
        <HiLanguage className='lang-sidebar dark:text-white' />
        <span>{i18n.language === 'en' ? 'عربي' : 'English'}</span>
      </button>
    </div>
  );
}
