import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiLanguage } from 'react-icons/hi2';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useAppContext } from '../context/AppContext';
import '../styles/Header.css';
import useResponsive from './../hooks/useResponsive';
export default function Header() {
  const { isTabletWithPhone } = useResponsive();
  const { openSidebar, showSidebar, handleScrollTOContact, toggleLanguage } = useAppContext();

  const { t, i18n } = useTranslation('navbar');

  if (isTabletWithPhone) {
    return (
      <header>
        <div className=' logo-mobile'>
          <img className='img-logo' src='/logo-Abdelrahman1.png' alt='' />
          <div className='my-name-and-jop-inMobile'>
            <div style={{ color: '#fff' }} className='nameAndJopInMobile'>
              {t('Abdelrahman Mohamed')}
            </div>
            <div style={{ color: '#fff' }} className='nameAndJopInMobile'>
              {t('Front-end developer')}
            </div>
          </div>
        </div>
        <RxHamburgerMenu className='iconMenu' onClick={openSidebar} />
      </header>
    );
  }

  return (
    <header>
      <div className='logo'>
        <img className='img-logo' src='/logo-Abdelrahman1.png' alt='' />
      </div>
      <Navigation />
      <button onClick={toggleLanguage} className='lang-pill-btn'>
        <HiLanguage className='lang-icon' />
        <span className='lang-text'>{i18n.language === 'en' ? 'AR' : 'EN'}</span>
      </button>
      <button onClick={() => handleScrollTOContact()} className='btn-hire-me'>
        {t('Hire Me')}
      </button>
    </header>
  );
}

function Navigation() {
  const [PageActive, setPageActive] = useState('Home');
  const { t } = useTranslation('navbar');
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

  return (
    <ul className='pages'>
      <li className='one-page' onClick={() => ActivePage('Home', handleScrollTOHome)}>
        {t('Home')}
      </li>
      <li className='one-page' onClick={() => ActivePage('about me', handleScrollTOAbout)}>
        {t('about me')}
      </li>
      <li className='one-page' onClick={() => ActivePage('skills', handleScrollTOSkills)}>
        {t('skills')}
      </li>
      <li className='one-page' onClick={() => ActivePage('projects', handleScrollTOProject)}>
        {t('projects')}
      </li>
      <li className='one-page' onClick={() => ActivePage('courses', handleScrollTOCourses)}>
        {t('courses')}
      </li>

      <li className='one-page' onClick={() => ActivePage('Contact', handleScrollTOContact)}>
        {t('Contact')}
      </li>
    </ul>
  );
}
