import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Footer from './components/footer';
import AppProvider from './context/AppContext';
import Layout from './layout';

export default function App() {
  // variables
  const { i18n } = useTranslation();

  // ui
  return (
    <AppProvider>
      <div style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }} className='App-website'>
        <Toaster position='top-center' reverseOrder={false} />
        <Layout />
        <Footer />
      </div>
    </AppProvider>
  );
}
