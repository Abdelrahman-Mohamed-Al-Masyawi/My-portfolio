import { FaReact, FaNodeJs, FaCalculator, FaLanguage, FaGraduationCap } from 'react-icons/fa';

import { PiCertificateBold } from 'react-icons/pi';

const styleIcon = { width: '55px', height: '55px',color:"#ffffff" };

export const coursesData = [
  {
    id: 1,
    title: 'ICDL',
    details: 'Office tools: Word, Excel, PowerPoint, Outlook and basic computer skills',
    year: '2024',
    icon: <img src='/svg/Logo_ICDL.svg' style={styleIcon} />,
    academy: 'Self Learning',
  },
  {
    id: 2,
    title: 'English (A1-A2)',
    details: 'Basic communication skills for daily conversations',
    year: '2022',
    icon: <FaLanguage style={styleIcon} />,
    academy: 'Develop Yourself Academy',
  },
  {
    id: 3,
    title: 'Financial Accounting',
    details: 'Journal entries, Excel bookkeeping, ledger and financial statements',
    year: '2024',
    icon: <img src="/svg/calculator-svgrepo-com (1).svg" style={styleIcon} />,
    academy: 'Self Learning',
  },
  {
    id: 4,
    title: 'React Development',
    details: 'Modern web apps using components, hooks, routing and state management',
    year: '2025',
    icon: <img src="/svg/react-svgrepo-com.svg" style={styleIcon} />,
    academy: 'Jonas Schmedtmann',
  },
  {
    id: 5,
    title: 'Node.js Backend',
    details: 'REST APIs, Express.js, authentication and databases',
    year: '2025',
    icon: <img src='/svg/node-svgrepo-com.svg' style={styleIcon} />,
    academy: 'Jonas Schmedtmann',
  },
];
