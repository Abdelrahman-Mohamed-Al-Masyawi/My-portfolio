import GroupIcons from '../components/groupIcons';
import { useAppContext } from '../context/AppContext';
import '../styles/Home.css';
import '../styles/responsive/HomeResponsive.css';

import { skillsData } from './../context/skillsData';

import { coursesData } from './../context/coursesData';
export default function Home() {
  const { homeRef } = useAppContext();
  return (
    <div ref={homeRef} className='container-home'>
      {/* //*information */}
      <div className='container-information'>
        {/* //? معلومات */}
        <div className='information'>
          <div className='person-ifo'>
            <div className='info'>
              <div className='container-name'>
                <div className='hi'>Hi I am</div>
                <div className='name'>Abdelrahman Mohamed</div>
              </div>
              <div className='jop'>Front-end Developer</div>
            </div>
            <GroupIcons />
          </div>
          <div className='container-btns'>
            <button className='btn-HireMe'>Hire Me</button>
            <button className='btn-cv'>Download CV </button>
          </div>
        </div>
        {/* //?احصاءات */}
        <div className='statistics'>
          {/* <div className='container-one-statistic'>
            <p className='number'>5</p>
            <p className='name-statistic'>Experiences</p>
          </div> */}
          <div className='container-one-statistic'>
            <p className='number'>{coursesData.length}</p>
            <p className='name-statistic'>Project done</p>
          </div>
          <div className='container-one-statistic'>
            <p className='number'>{coursesData.length}</p>
            <p className='name-statistic'>courses</p>
          </div>
          <div className='container-one-statistic not-border'>
            <p className='number'>{skillsData.length}</p>
            <p className='name-statistic'>skills</p>
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
