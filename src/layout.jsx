import Header from './components/Header';
import Sidebar from './components/sidebar';
import { useAppContext } from './context/AppContext';
import useResponsive from './hooks/useResponsive';
import AboutMe from './pages/AboutMe';
import Courses from './pages/Courses';
import Home from './pages/Home';
import './styles/Layout.css';

export default function Layout() {
  const { isTabletWithPhone } = useResponsive();
  const { showSidebar } = useAppContext();
  return (
    <div className='layout'>
      <Header />
      <Home />
      <AboutMe/>
      <Courses/>
      {showSidebar && <Sidebar />}
    </div>
  );
}
