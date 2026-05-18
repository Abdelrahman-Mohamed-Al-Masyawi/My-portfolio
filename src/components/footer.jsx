import '../styles/footer.css';
import '../styles/Home.css';
import GroupIcons from './groupIcons';
export default function Footer() {
  return (
    <section style={{ backgroundColor: '#262525' }} className='container-footer'>
      <h2 className='logo-footer'>Abdelrahman Mohamed</h2>
      <GroupIcons />
    </section>
  );
}
