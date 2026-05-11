import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useAppContext } from '../context/AppContext';
import '../styles/Header.css';
import useResponsive from './../hooks/useResponsive';

export default function Header() {
  const { isTabletWithPhone } = useResponsive();
  const { openSidebar, showSidebar } = useAppContext();
  if (isTabletWithPhone) {
    return (
      <header>
        {/* <button className='btn-hire-me'>Hire Me</button> */}
        <div className='logo'>LOGO</div>
        <RxHamburgerMenu className='iconMenu' onClick={openSidebar} />
      </header>
    );
  }

  return (
    <header>
      <div className='logo'>LOGO</div>

      <Navigation />
      {/* <RxHamburgerMenu className='iconMenu' onClick={openSidebar} /> */}
      <button className='btn-hire-me'>Hire Me</button>
    </header>
  );
}

function Navigation() {
  const [PageActive, setPageActive] = useState('Home');

  function ActivePage(value) {
    setPageActive(value);
  }

  function Style(value) {
    let color = ' #f68127  ';
    if (PageActive === value) {
      return color;
    }
  }
  return (
    <ul className='pages'>
      <li style={{ color: Style('Home') }} className='one-page' onClick={() => ActivePage('Home')}>
        Home
      </li>
      <li style={{ color: Style('Services') }} className='one-page' onClick={() => ActivePage('Services')}>
        Services
      </li>
      <li style={{ color: Style('courses') }} className='one-page' onClick={() => ActivePage('courses')}>
        courses
      </li>
      <li style={{ color: Style('projects') }} className='one-page' onClick={() => ActivePage('projects')}>
        projects
      </li>
      <li style={{ color: Style('About') }} className='one-page' onClick={() => ActivePage('About')}>
        About me
      </li>
      <li style={{ color: Style('Portfolio') }} className='one-page' onClick={() => ActivePage('Portfolio')}>
        Portfolio
      </li>
      <li style={{ color: Style('Contact') }} className='one-page' onClick={() => ActivePage('Contact')}>
        Contact me
      </li>
    </ul>
  );
}
