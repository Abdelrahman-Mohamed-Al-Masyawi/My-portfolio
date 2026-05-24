import { useTranslation } from 'react-i18next';
import '../styles/footer.css';
import '../styles/Home.css';
import GroupIcons from './groupIcons';
export default function Footer() {
  const { t } = useTranslation('footer');
  return (
    <section style={{ backgroundColor: '#262525' }} className='container-footer'>
      <div className='container-logo'>
        <img className='img-logo' src='/logo-Abdelrahman1.png' alt='' />
        <h2 className='logo-footer'>{t('Abdelrahman Mohamed')}</h2>
      </div>
      <div>
        <GroupIcons />
      </div>
      <p className='copyright'>
        <span>© {new Date().getFullYear()}</span>
        <span></span>
        {t(`All Rights Reserved. Designed & Developed by Abdelrahman Mohamed.`)}
      </p>
    </section>
  );
}
