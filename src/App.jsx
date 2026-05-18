import { Toaster } from 'react-hot-toast';
import AppProvider from './context/AppContext';
import Layout from './layout';
import Footer from './components/footer';

export default function App() {
  return (
    <AppProvider>
      <Toaster position='top-center' reverseOrder={false} />
      <Layout />
      <Footer/>
    </AppProvider>
  );
}
