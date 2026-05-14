import { coursesData } from '../context/coursesDate';
import '../styles/courses.css';
export default function Courses() {
  const courses = coursesData;
  return (
    <section className='container-courses'>
      <div className='container-title-page'>
        <h2 className='title-page-Courses'>Courses</h2>
        <p className='details-title-page-courses'>
          Dedicated to lifelong learning, building innovative solutions, and growing through real-world projects and
          modern technologies.
        </p>
      </div>
      <div className='container-courses'>
        {courses?.map((cours) => {
          return (
            <div className='card'>
              <span className='icon-card'>{cours.icon}</span>
              <h3 className='title-card'>{cours.title}</h3>
              <p className='details-card'>{cours.details}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
