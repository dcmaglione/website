import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';

export const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/dcmaglione/',
    icon: <FiGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dcmaglione/',
    icon: <FiLinkedin />,
  },
  {
    name: 'Email',
    url: 'mailto:dcmaglione@gmail.com',
    icon: <FiMail />,
  },
  {
    name: 'Resume',
    url: '/Resume.pdf',
    icon: <FiFileText />,
  },
];
