import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaBriefcase, FaPhone, FaTimes, FaUser } from 'react-icons/fa';
import { HiLanguage } from 'react-icons/hi2';
import { MdDesignServices } from 'react-icons/md';
import { useAppContext } from '../context/AppContext';
import '../styles/sidebar.css';
export default function Sidebar() {
  const [PageActive, setPageActive] = useState('Home');
  const { closeSidebar, language, toggleLanguage } = useAppContext();

  
  const actions = {
    ActivePage(value) {
      setPageActive(value);
      closeSidebar();
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
        <li style={{ color: Style('Home') }} className='item-page' onClick={() => ActivePage('Home')}>
          <AiFillHome /> <span>Home</span>
        </li>
        <li style={{ color: Style('Services') }} className='item-page' onClick={() => ActivePage('Services')}>
          <MdDesignServices /> <span>Services</span>
        </li>
        <li style={{ color: Style('About') }} className='item-page' onClick={() => ActivePage('About')}>
          <FaUser /> <span>About me</span>
        </li>
        <li style={{ color: Style('Portfolio') }} className='item-page' onClick={() => ActivePage('Portfolio')}>
          <FaBriefcase />
          <span>Portfolio</span>
        </li>
        <li style={{ color: Style('Contact') }} className='item-page' onClick={() => ActivePage('Contact')}>
          <FaPhone />
          <span>Contact me</span>
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
