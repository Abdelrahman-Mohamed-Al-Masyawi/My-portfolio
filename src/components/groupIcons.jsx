import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../styles/Home.css';
export default function GroupIcons() {
  const links = {
    Whatsapp: 'https://wa.me/966580370681',
    Linkedin:
      'https://www.linkedin.com/in/abdelrahman-mohammed-6736a7283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B0UWv8TueQZao1VQFWIrhuQ%3D%3D',
    Phon: 'tel:+966580370681',
    Github: 'https://github.com/Abdelrahman-Mohamed-Al-Masyawi',
  };
  return (
    <div className='container-contacts-icon'>
      <a
        title='966580370681'
        href={links.Whatsapp}
        target='_blank'
        className='rounded-icons-container bg-black-6 hover:bg-gold-3'>
        <FaWhatsapp color='#bababa' className='contacts-icon' />
      </a>
      <a href={links.Linkedin} target='_blank' className='rounded-icons-container bg-black-6 hover:bg-gold-3'>
        <FaLinkedin color='#bababa' className='contacts-icon' />
      </a>
      <a
        href={links.Phon}
        title='966580370681'
        target='_blank'
        className='rounded-icons-container bg-black-6 hover:bg-gold-3'>
        <FaPhone color='#bababa' className='contacts-icon' />
      </a>
      <a href={links.Github} target='_blank' className='rounded-icons-container bg-black-6 hover:bg-gold-3'>
        <FaGithub color='#bababa' className='contacts-icon' />
      </a>

      {/* <FaEmail className='contacts-icon' /> */}
    </div>
  );
}
