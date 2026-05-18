import { useState } from 'react';
import { skillsData } from '../context/skillsData';
import '../styles/Skills.css';
import { useAppContext } from '../context/AppContext';
export default function Skills() {
  const [filterSkills, setFilterSkills] = useState('tech');
 const { skillsRef } = useAppContext();
  function handleFilter(value) {
    setFilterSkills(value);
  }

  const skillsFilter = skillsData.filter((el) => {
    if (filterSkills == 'All') {
      return el;
    }
    return el.category == filterSkills;
  });

  function BackgroundBtn(btnName) {
    const style = { background: '#ffff', color: '#000000' };
    return filterSkills === btnName ?
        {
          background: '#ffffff',
          color: '#000000',
        }
      : {
          background: ' linear-gradient(94.36deg, #fd6f00 3.1%, #e46400 94.54%)',
          color: ' rgba(255, 255, 255, 1)',
        };
  }
  return (
    <section ref={skillsRef} className='container-page-skills'>
      <h2 className='title-page-skills'>My Skills</h2>
      <div className='container-btns-filter-skills'>
        <button style={BackgroundBtn('All')} onClick={() => handleFilter('All')} className='btn-filter-skills'>
          All
        </button>
        <button style={BackgroundBtn('tech')} onClick={() => handleFilter('tech')} className='btn-filter-skills'>
          Tech
        </button>
        <button style={BackgroundBtn('office')} onClick={() => handleFilter('office')} className='btn-filter-skills'>
          Office
        </button>
        <button style={BackgroundBtn('soft')} onClick={() => handleFilter('soft')} className='btn-filter-skills'>
          Soft Skills
        </button>
      </div>
      <div className='container-card-Skills'>
        {skillsFilter?.map((skill) => {
          return (
            <div id={skill.id} className='card-Skills'>
              <span className='circle-icons-skills'>
                <img src={skill.icon} alt={skill.name} className='icon-skills' />
              </span>
              <span className='name-skills'>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
