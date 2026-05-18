import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa';
import '../styles/contact.css';
export default function Contact() {
  return (
    <section className='container-page-contact'>
      <div className='container-title-page-contact'>
        <h2 className='title-page-contact'>Contact me</h2>
        <div className='containerSections'>
          <div className='container-links-contact widthContainer'>
            <p className='paragraph-contact '>
              Don't hesitate to get in touch - i'd be happy to help you achieve the work you want in the best way
              possible
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
              nameIcon={'linkedin'}
            />
            <ContactSites
              linkText={'https://github.com/Abdelrahman-Mohamed-Al-Masyawi'}
              icon={'/svg/contact/github-142-svgrepo-com.svg'}
              nameIcon={'github'}
            />
          </div>
          <ClientForm />
        </div>
      </div>
    </section>
  );
}

function ClientForm() {
  // ==================
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  // ===================

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

  if (loading) return;
    if (!email || !name || !phone || !subject || !message) return toast.error('من فضلك املي جميع البيانات');

    setLoading(true);
    emailjs
      .sendForm(import.meta.env.VITE_Service_ID_email_js, import.meta.env.VITE_Template_ID_email_js, form.current, {
        publicKey: import.meta.env.VITE_Public_Key_email_js,
      })
      .then(
        () => {
          toast.success('تم الارسال بنجاح');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setSubject('');
        },
        (error) => {
          toast.error('فشل الارسال' + error.text);
        },
      )
      .finally(() => {
        setLoading(false);
      });;
  };
  return (
    <form ref={form} onSubmit={sendEmail} className='form-contact widthContainer'>
      <input
        value={name}
        placeholder='Name'
        name='name'
        type='text'
        required
        className='input width-input'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder='email'
        required
        type='email'
        name='client_email'
        className='input width-input'
      />

      <input
        placeholder='Phone'
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        type='text'
        className='input width-input'
        name='client_phone'
        id=''
      />
      <select
        name='client_subject'
        required
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className='input width-input'>
        <option className='option-contact' value=''>
          {' '}
          subject
        </option>
        <option className='option-contact' value='work'>
          work
        </option>
        <option className='option-contact' value='service'>
          service
        </option>
        <option className='option-contact' value='suggest'>
          suggest
        </option>
        <option className='option-contact' value='compline'>
          compline
        </option>
        <option className='option-contact' value='another'>
          another
        </option>
      </select>

      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        required
        name='message'
        rows={2}
        placeholder='details message'
        className='input textarea'></textarea>
      <button
        disabled={loading}
        type='submit'
        className={`rounde-lg m-3 mx-auto flex w-full items-center justify-center bg-slate-900 px-4 py-2 text-white shadow-lg hover:bg-slate-700 ${
          loading ? 'cursor-not-allowed bg-gray-500' : 'bg-slate-900 hover:bg-slate-700'
        }`}>
        {loading ? 'Sending...' : 'Send'}
        <FaPaperPlane className='mx-2' />
      </button>
    </form>
  );
}

function ContactSites({ icon, nameIcon, linkText }) {
  return (
    <div className='containerIconContact'>
      <img className='IconContact' src={icon} alt={nameIcon} />
      <a target='_blank' rel='noreferrer' className='linkText' href={linkText}>
        {nameIcon}
      </a>
    </div>
  );
}
