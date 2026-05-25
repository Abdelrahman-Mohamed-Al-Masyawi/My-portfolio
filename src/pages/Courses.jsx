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
        <h2 className='title-page-Courses'>{t('Courses')}</h2>
        <p className='details-title-page-courses'>
          {t(
            'Dedicated to lifelong learning, building innovative solutions, and growing through real-world projects and modern technologies.',
          )}
        </p>
      </div>
      <div className='container-courses'>
        {courses?.map((cours) => {
          return (
            <div key={cours.id} className='card'>
              <div className='header-card'>
                <span className='icon-card'>{cours.icon}</span>
                <h3 className='title-card'>{t(cours.title)}</h3>
              </div>
              <p className='details-card'>{t(cours.details)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
