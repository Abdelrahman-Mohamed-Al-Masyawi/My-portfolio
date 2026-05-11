import AppProvider from './context/AppContext';
import Layout from './layout';

export default function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
