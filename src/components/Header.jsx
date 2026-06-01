import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HiLanguage } from 'react-icons/hi2';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useLanguage } from '../context/languageContext';
import { useScrollTOSection } from '../context/scrollToSectionContext';
import { useSidebar } from '../context/sideBarContext';
import { useTheme } from '../context/themeContext';
import '../styles/Header.css';
import useResponsive from './../hooks/useResponsive';

export default function Header() {
  const { isTabletWithPhone } = useResponsive();
  const { handleScrollTOContact } = useScrollTOSection();
  const { openSidebar } = useSidebar();
  const { toggleLanguage } = useLanguage();
  const { darkMode, toggleDarkMood } = useTheme();
  const { t, i18n } = useTranslation('navbar');

  if (isTabletWithPhone) {
    return (
      <header className='bg-white! dark:bg-black-3!'>
        <div className=' logo-mobile '>
          <img className='img-logo' src='/logo-Abdelrahman1.png' alt='' />
          <div className='my-name-and-jop-inMobile'>
            <div className='nameAndJopInMobile  dark:text-white'>{t('Abdelrahman Mohamed')}</div>
            <div className='nameAndJopInMobile dark:text-white'>{t('Front-end developer')}</div>
          </div>
        </div>
        <RxHamburgerMenu className='iconMenu dark:text-gold-3' onClick={openSidebar} />
      </header>
    );
  }

  return (
    <header className='bg-white! dark:bg-black-3!'>
      <div className='logo'>
        <img className='img-logo' src='/logo-Abdelrahman1.png' alt='' />
      </div>
      <Navigation />
      <span onClick={toggleDarkMood} className='container-lightMood-nav'>
        {darkMode ?
          <FaSun className='sun text-sun' />
        : <FaMoon className='moon text-moon' />}
      </span>
      <button onClick={toggleLanguage} className='lang-pill-btn dark:text-white  dark:bg-black-2 '>
        <HiLanguage className='lang-icon' />
        <span className='lang-text'>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
      </button>
      <button onClick={() => handleScrollTOContact()} className={`btn-hire-me   dark:text-white`}>
        {t('Hire Me')}
      </button>
    </header>
  );
}

function Navigation() {
  const [PageActive, setPageActive] = useState('Home');
  const { t } = useTranslation('navbar');
  const { openSidebar, showSidebar } = useSidebar();
  const {
    handleScrollTOHome,
    handleScrollTOContact,
    handleScrollTOCourses,
    handleScrollTOSkills,
    handleScrollTOAbout,
    handleScrollTOProject,
  } = useScrollTOSection();
  function ActivePage(value, fun) {
    setPageActive(value);
    if (fun) {
      fun();
    }
  }

  return (
    <ul className='pages'>
      <li
        className='one-page dark:text-black-5 text-[#374151] hover:text-gold-2'
        onClick={() => ActivePage('Home', handleScrollTOHome)}>
        {t('Home')}
      </li>
      <li
        className='one-page dark:text-black-5  text-[#374151] hover:text-gold-2'
        onClick={() => ActivePage('about me', handleScrollTOAbout)}>
        {t('about me')}
      </li>
      <li
        className='one-page text-[#374151]  dark:text-black-5 hover:text-gold-2'
        onClick={() => ActivePage('skills', handleScrollTOSkills)}>
        {t('skills')}
      </li>
      <li
        className='one-page dark:text-black-5 text-[#374151] hover:text-gold-2'
        onClick={() => ActivePage('projects', handleScrollTOProject)}>
        {t('projects')}
      </li>
      <li
        className='one-page dark:text-black-5 text-[#374151] hover:text-gold-2'
        onClick={() => ActivePage('courses', handleScrollTOCourses)}>
        {t('courses')}
      </li>

      <li
        className='one-page dark:text-black-5 text-[#374151] hover:text-gold-2'
        onClick={() => ActivePage('Contact', handleScrollTOContact)}>
        {t('Contact')}
      </li>
    </ul>
  );
}
