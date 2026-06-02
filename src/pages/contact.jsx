import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane } from 'react-icons/fa';
import { useScrollTOSection } from '../context/scrollToSectionContext';
import '../styles/contact.css';
export default function Contact() {
  // variables
  const { contactRef } = useScrollTOSection();
  const { t } = useTranslation('contact');

  // ui
  return (
    <section ref={contactRef} className='container-page-contact'>
      <div className='container-title-page-contact'>
        <h2 className='title-page-contact text-[#1f2937]! dark:text-white-4!'>{t('Contact me')}</h2>
        <div className='containerSections'>
          <div className='container-links-contact widthContainer'>
            <p className='paragraph-contact text-[#1f2937]! dark:text-black-5! '>
              {t(
                "Don't hesitate to get in touch - I'd be happy to help you achieve the work you want in the best way possible",
              )}
            </p>
            <ContactSites
              linkText={'https://wa.me/966580370681'}
              icon={'/svg/contact/whatsapp-svgrepo-com.svg'}
              nameIcon={'966580370681'}
            />
            <ContactSites
              linkText={'mailto:abdelrhmanelsyed7@gmail.com'}
              icon={'/svg/contact/gmail-svgrepo-com.svg'}
              nameIcon={'abdelrhmanelsyed7@gmail.com'}
            />
            <ContactSites
              linkText={
                'https://www.linkedin.com/in/abdelrahman-mohammed-6736a7283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B0UWv8TueQZao1VQFWIrhuQ%3D%3D'
              }
              icon={'/svg/contact/linkedin-1-svgrepo-com.svg'}
              nameIcon={t('linkedin')}
            />
            <ContactSites
              linkText={'https://github.com/Abdelrahman-Mohamed-Al-Masyawi'}
              icon={'/svg/contact/github-142-svgrepo-com.svg'}
              nameIcon={t('github')}
            />
          </div>
          <ClientForm />
        </div>
      </div>
    </section>
  );
}

function ClientForm() {
  // variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('contact');
  const messageError = t('Please fill all fields');
  const messageSuccess = t('Message sent successfully');
  // refs
  const form = useRef();

  // functions
  function handlerNumberPhone(e) {
    const onlyNumber = e.target.value.replace(/\D/g, '');
    setPhone(onlyNumber);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;
    if (!email || !name || !phone || !subject || !message) return toast.error(messageError);

    setLoading(true);
    emailjs
      .sendForm(import.meta.env.VITE_Service_ID_email_js, import.meta.env.VITE_Template_ID_email_js, form.current, {
        publicKey: import.meta.env.VITE_Public_Key_email_js,
      })
      .then(
        () => {
          toast.success(messageSuccess);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setSubject('');
        },
        (error) => {
          toast.error(e('Failed to send') + error.text);
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  // ui
  return (
    <form ref={form} onSubmit={sendEmail} className='form-contact widthContainer'>
      <input
        value={name}
        placeholder={t('name')}
        name='name'
        type='text'
        required
        className='input dark:bg-black-6 dark:text-white-4 width-input'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder={t('email')}
        required
        type='email'
        name='client_email '
        className='input dark:bg-black-6 dark:text-white-4 width-input'
      />

      <input
        placeholder={t('phone')}
        value={phone}
        onChange={handlerNumberPhone}
        type='text'
        className='input dark:bg-black-6 dark:text-white-4 width-input'
        name='client_phone'
        id=''
      />
      <select
        name='client_subject '
        required
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className='input dark:bg-black-6 dark:text-white-4 width-input'>
        <option className='option-contact dark:bg-black dark:text-white-4' value=''>
          {t('subject')}
        </option>
        <option className='dark:bg-black dark:text-white-4' value='work'>
          {t('work')}
        </option>
        <option className='dark:bg-black dark:text-white-4' value='service'>
          {t('service')}
        </option>
        <option className='dark:bg-black dark:text-white-4' value='suggest'>
          {t('suggestion')}
        </option>
        <option className='dark:bg-black dark:text-white-4' value='compline'>
          {t('complaint')}
        </option>
        <option className='dark:bg-black dark:text-white-4' value='another'>
          {t('another')}
        </option>
      </select>

      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        required
        name={t('message')}
        rows={2}
        placeholder={t('details message')}
        className='input dark:bg-black-6 dark:text-white-4! textarea'></textarea>
      <button
        disabled={loading}
        type='submit'
        className={` dark:bg-gold-4 rounde-lg m-3 mx-auto flex w-full items-center justify-center px-4 py-2  dark:text-white shadow-lg dark:hover:bg-green-600  ${
          loading ? 'cursor-not-allowed dark:bg-gray-500' : 'dark:bg-slate-900 dark:hover:bg-slate-700'
        }`}>
        {loading ? t('Sending...') : t('Send')}
        <FaPaperPlane className='mx-2' />
      </button>
    </form>
  );
}

function ContactSites({ icon, nameIcon, linkText }) {
  return (
    <div className='containerIconContact'>
      <img className='IconContact' src={icon} alt={nameIcon} />
      <a target='_blank' rel='noreferrer' className='linkText text-[#f97316]! dark:text-white-4!' href={linkText}>
        {nameIcon}
      </a>
    </div>
  );
}
