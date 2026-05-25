import GroupIcons from '../components/groupIcons';
import '../styles/Home.css';
import '../styles/responsive/HomeResponsive.css';

import { skillsData } from '../data/skillsData';

import { useTranslation } from 'react-i18next';
import { coursesData } from '../data/coursesData';
import { useScrollTOSection } from '../context/scrollToSectionContext';
export default function Home() {
  const { homeRef } = useScrollTOSection();
  const { t } = useTranslation();
  return (
    <div ref={homeRef} className='container-home'>
      {/* //*information */}
      <div className='container-information'>
        {/* //? معلومات */}
        <div className='information'>
          <div className='person-ifo'>
            <div className='info'>
              <div className='container-name'>
                <div className='hi'>{t('Hi I am')}</div>
                <div className='name'>{t('Abdelrahman Mohamed')}</div>
              </div>
              <div className='jop'>{t('Front-end Developer')}</div>
            </div>
            <GroupIcons />
          </div>
          <div className='container-btns'>
            <button className='btn-HireMe'>{t('Hire Me')}</button>
            <button className='btn-cv'>{t('Download CV')} </button>
          </div>
        </div>
        {/* //?احصاءات */}
        <div className='statistics '>
          {/* <div className='container-one-statistic'>
            <p className='number'>5</p>
            <p className='name-statistic'>Experiences</p>
          </div> */}
          <div className='container-one-statistic'>
            <p className='number'>{coursesData.length}</p>
            <p className='name-statistic'>{t('projects done')}</p>
          </div>
          <div className='container-one-statistic'>
            <p className='number'>{coursesData.length}</p>
            <p className='name-statistic'>{t('courses')}</p>
          </div>
          <div className='container-one-statistic not-border'>
            <p className='number'>{skillsData.length}</p>
            <p className='name-statistic'>{t('Skills')}</p>
          </div>
        </div>
      </div>
      {/* //* my img */}
      <div className='container-myImg'>
        <div className='circle'>
          <img src='/imgs/mylogo1.png' alt='my-img' />
        </div>
      </div>
    </div>
  );
}
