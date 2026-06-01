import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Footer from './components/footer';
import { useTheme } from './context/themeContext';
import Layout from './layout';
import './styles/lightMood.css';
export default function App() {
  // variables
  const { i18n } = useTranslation();
  const { darkMode } = useTheme();
  // ui
  return (
    <div style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }} className={`App-website  ${darkMode && 'dark'}  bg-[#fffff]  dark:bg-black-0`}>
      <Toaster position='top-center' reverseOrder={false} />
      <Layout />
      <Footer />
    </div>
  );
}
