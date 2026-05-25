import Header from './components/Header';
import Sidebar from './components/sidebar';
import { useSidebar } from './context/sideBarContext';
import useResponsive from './hooks/useResponsive';
import AboutMe from './pages/AboutMe';
import Contact from './pages/contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Projects from './pages/project';
import Skills from './pages/Skills';
import './styles/Layout.css';

export default function Layout() {
  const { isTabletWithPhone } = useResponsive();
  const { showSidebar } = useSidebar();
  return (
    <div className='layout '>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Courses />
      <Contact />
      {showSidebar && <Sidebar />}
    </div>
  );
}
