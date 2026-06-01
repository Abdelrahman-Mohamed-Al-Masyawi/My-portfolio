import { useTranslation } from 'react-i18next';
import { coursesData } from '../data/coursesData';
import '../styles/courses.css';
import { useScrollTOSection } from '../context/scrollToSectionContext';
export default function Courses() {
  const courses = coursesData;
  const { coursesRef } = useScrollTOSection();
  const { t } = useTranslation('courses');
  return (
    <section ref={coursesRef} className='container-courses'>
      <div className='container-title-page'>
        <h2 className='title-page-Courses dark:text-white-4!'>{t('Courses')}</h2>
        <p className='details-title-page-courses dark:text-black-5'>
          {t(
            'Dedicated to lifelong learning, building innovative solutions, and growing through real-world projects and modern technologies.',
          )}
        </p>
      </div>
      <div className='container-courses'>
        {courses?.map((cours) => {
          return (
            <div key={cours.id} className='card bg-[#E5E7EB]! dark:bg-black-6! dark:hover:bg-black-7'>
              <div className='header-card'>
                <span className='icon-card'>{cours.icon}</span>
                <h3 className='title-card dark:text-gold-1!'>{t(cours.title)}</h3>
              </div>
              <p className='details-card  dark:text-white-3 dark:hover:text-white'>{t(cours.details)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
