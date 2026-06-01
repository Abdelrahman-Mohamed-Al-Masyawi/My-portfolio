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
                <div className='hi dark:text-black-4'>{t('Hi I am')}</div>
                <div className='name dark:text-black-5'>{t('Abdelrahman Mohamed')}</div>
              </div>
              <div className='jop'>{t('Front-end Developer')}</div>
            </div>
            <GroupIcons />
          </div>
          <div className='container-btns'>
            <button className='btn-HireMe-home dark:text-white dark:hover:bg-gold-3'>{t('Hire Me')}</button>
            <button className='btn-cv dark:text-black-5 dark:hover:text-black dark:hover:bg-white '>
              {t('Download CV')}{' '}
            </button>
          </div>
        </div>
        {/* //?احصاءات */}
        <div className='statistics dark:bg-black-6 '>
          <div className='container-one-statistic'>
            <p className='number dark:text-gold-4'>{coursesData.length}</p>
            <p className='name-statistic dark:text-white-3'>{t('projects done')}</p>
          </div>
          <div className='container-one-statistic'>
            <p className='number dark:text-gold-4'>{coursesData.length}</p>
            <p className='name-statistic dark:text-white-3'>{t('courses')}</p>
          </div>
          <div className='container-one-statistic not-border'>
            <p className='number dark:text-gold-4'>{skillsData.length}</p>
            <p className='name-statistic dark:text-white-3'>{t('Skills')}</p>
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
