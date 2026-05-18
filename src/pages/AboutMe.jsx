import { useAppContext } from '../context/AppContext';
import '../styles/AboutMe.css';

export default function AboutMe() {
  const { aboutRf } = useAppContext();
  return (
    <div ref={aboutRf} className='container-page-aboutMe'>
      <h2 className='title-page-aboutMe'>About Me</h2>
      <p className='content-page-aboutMe'>
        My name is Abdelrahman Mohamed. I became interested in technology and in completing tasks in a faster and more
        efficient way. My programming journey started at the beginning of 2024 with Python. I liked the language and how
        it can help in everyday life, not only for professional programmers. Later, I became interested in Front-End
        development. I really liked the field, how work and experience can be displayed to everyone through websites,
        and how services can be provided to the public instead of only personal use like mobile or desktop applications.
        This made me want to share all technical work with others through websites to benefit everyone. Currently, I am
        aiming to continue my journey as a Full-Stack developer so that I can design and build all my websites from
        start to finish by myself. Programming languages really help in work, and even if you learn them without aiming
        for a job, they change your way of thinking, just as they did with me. Now instead of searching for a website
        that provides a service, I try to design it myself.
      </p>
    </div>
  );
}
