import {
  FaBootstrap,
  FaCalculator,
  FaCss3Alt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaLanguage,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';

import { PiCertificateBold } from 'react-icons/pi';

import { GiTeacher } from 'react-icons/gi';
import { IoLogoJavascript } from 'react-icons/io5';


const styleIcon = { width: '55px', height: '55px' };
const college = {
  id: 0,
  title: 'Bachelor of Arts and Education',
  Department: 'Department French language',
  year: '2018-2022 ',
  icon: <FaGraduationCap />,
  img: '',
  academy: 'Minia university',
};
export const coursesData = [
  {
    id: 1,
    title: 'ICDL',
    details:
      'Able to use Office programs such as Word, Excel, PowerPoint, Outlook, Google Chrome, Windows, and general computer',
    year: '2024 ',
    icon: <PiCertificateBold style={styleIcon} />,
    img: '',
    academy: 'Minia university',
  },
  {
    id: 2,
    title: 'English: A1-A2',
    details: 'Ability to communicate with foreigners regarding daily life',
    year: '2022',
    icon: <FaLanguage style={styleIcon} />,
    img: '',
    academy: 'Develop Yourself Academy',
  },
  {
    id: 3,
    title: 'Financial accounting',
    details:
      'Ability to create journal entries, generate the American journal in Excel, post to the general ledger, and prepare financial statements',
    year: '2024',
    icon: <FaCalculator style={styleIcon} />,
    img: '',
    academy: 'self learning and with Financial Accountant',
  },
  {
    id: 4,
    title: 'Effective teaching strategies',
    details:
      'Creating online tests using Google Drive or Kahoot and creating digital learning videos such as PowerPoint presentations',
    year: '2024 ',
    icon: <GiTeacher style={styleIcon} />,
    img: '',
    academy: 'Maaref platform',
  },
  
  {
    id: 5,
    title: 'React',
    details: 'Built modern interactive web applications using components, hooks, routing, and state management',
    year: '2025',
    icon: <FaReact style={styleIcon} />,
    img: '',
    academy: 'Jonas Schmedtmann',
  },
  {
    id: 6,
    title: 'Node.js',
    details: 'Learned backend development, REST APIs, Express.js, authentication, and working with databases',
    year: '2025',
    icon: <FaNodeJs style={styleIcon} />,
    img: '',
    academy: 'Jonas Schmedtmann',
  },
  
  
];

const skills = [
  {
    id: 1,
    title: 'HTML',
    details: 'Learned how to build and structure web pages using semantic HTML elements and best practices',
    year: '2024',
    icon: <FaHtml5 style={styleIcon} />,
    img: '',
    academy: 'Osama Elzero',
  },
  {
    id: 2,
    title: 'CSS',
    details: 'Learned responsive design, Flexbox, Grid, animations, and modern UI styling techniques',
    year: '2024',
    icon: <FaCss3Alt style={styleIcon} />,
    img: '',
    academy: 'Osama Elzero',
  },
  {
    id: 3,
    title: 'JavaScript',
    details: 'Learned DOM manipulation, ES6, asynchronous JavaScript, APIs, and problem solving',
    year: '2025',
    icon: <IoLogoJavascript style={styleIcon} />,
    img: '',
    academy: 'Tarmiz Academy',
  },
  {
    id: 4,
    title: 'Bootstrap',
    details: 'Learned responsive layouts, Bootstrap components, grid system, and building modern user interfaces',
    year: '2024',
    icon: <FaBootstrap style={styleIcon} />,
    img: '',
    academy: 'Abdelrahman Gamal',
  },
  {
    id: 5,
    title: 'Git & GitHub',
    details: 'Learned version control, branching, collaboration, and managing projects using Git and GitHub',
    year: '2025',
    icon: <FaGithub style={styleIcon} />,
    img: '',
    academy: 'Osama Elzero',
  },
];
