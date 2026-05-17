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

          <form className='form-contact widthContainer'>
            <input placeholder='Name' type='text' className='input width-input' />
            <input placeholder='Email' type='text' className='input width-input' />

            <input placeholder='Phone' type='text' className='input width-input' name='' id='' />
            <select className='input width-input' name='' id=''>
              <option className='option-contact'> subject</option>
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

            <textarea placeholder='details message' className='input textarea' name='' id=''></textarea>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactSites({ icon, nameIcon, linkText }) {
  return (
    <div className='containerIconContact'>
      <img className='IconContact' src={icon} alt={nameIcon} />
      <a target='_blank' className='linkText' href={linkText}>
        {nameIcon}
      </a>
    </div>
  );
}
