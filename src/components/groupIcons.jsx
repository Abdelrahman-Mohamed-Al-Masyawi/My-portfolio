import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../styles/Home.css';
export default function GroupIcons() {
  return (
    <div className='container-contacts-icon'>
      <span className='rounded-icons-container'>
        <FaWhatsapp color='#bababa' className='contacts-icon' />
      </span>
      <span className='rounded-icons-container'>
        <FaLinkedin color='#bababa' className='contacts-icon' />
      </span>
      <span className='rounded-icons-container'>
        <FaPhone color='#bababa' className='contacts-icon' />
      </span>
      <span className='rounded-icons-container'>
        <FaGithub color='#bababa' className='contacts-icon' />
      </span>

      {/* <FaEmail className='contacts-icon' /> */}
    </div>
  );
}
