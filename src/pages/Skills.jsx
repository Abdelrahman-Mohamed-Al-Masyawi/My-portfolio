import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { skillsData } from '../data/skillsData';
import '../styles/Skills.css';
import { useScrollTOSection } from '../context/scrollToSectionContext';
export default function Skills() {
  // variables
  const [filterSkills, setFilterSkills] = useState('tech');
  const { t } = useTranslation('skills');
  const { skillsRef } = useScrollTOSection();

  const skillsFilter = skillsData.filter((el) => {
    if (filterSkills == 'All') {
      return el;
    }
    return el.category == filterSkills;
  });

  // functions
  function handleFilter(value) {
    setFilterSkills(value);
  }

  function BackgroundBtn(btnName) {
    const style = { background: '#ffff', color: '#000000' };
    return filterSkills === btnName ?
        {
          background: '#ffffff',
          color: '#000000',
          border:"1px solid black"
        }
      : {
          background: ' linear-gradient(94.36deg, #fd6f00 3.1%, #e46400 94.54%)',
          color: ' rgba(255, 255, 255, 1)',
        };
  }

  // ui
  return (
    <section ref={skillsRef} className='container-page-skills'>
      <h2 className='title-page-skills text-[#1f2937]! dark:text-white-4!'>{t('My Skills')}</h2>
      <div className='container-btns-filter-skills'>
        <button style={BackgroundBtn('All')} onClick={() => handleFilter('All')} className='btn-filter-skills'>
          {t('All')}
        </button>
        <button style={BackgroundBtn('tech')} onClick={() => handleFilter('tech')} className='btn-filter-skills'>
          {t('Tech')}
        </button>
        <button style={BackgroundBtn('office')} onClick={() => handleFilter('office')} className='btn-filter-skills'>
          {t('Office')}
        </button>
        <button style={BackgroundBtn('soft')} onClick={() => handleFilter('soft')} className='btn-filter-skills'>
          {t('Soft Skills')}
        </button>
      </div>
      <div className='container-card-Skills'>
        {skillsFilter?.map((skill) => {
          return (
            <div key={skill.id} className='card-Skills bg-[#E5E7EB]! dark:bg-black-6! dark:hover:bg-black-7!'>
              <span className='circle-icons-skills'>
                <img src={skill.icon} alt={skill.name} className='icon-skills' />
              </span>
              <span className='name-skills text-[#1F2937]! dark:text-white! '>{t(skill.name)}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
