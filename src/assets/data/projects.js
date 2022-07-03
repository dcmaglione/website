import DOTFILES from '../imgs/projects/dotfiles.jpg';
import PATHFINDING from '../imgs/projects/pathfinding.jpg';
import PHOTOSHARE from '../imgs/projects/photoshare.jpg';
import TESTCHAIN from '../imgs/projects/testchain.jpg';
import WEBSITE_NEW from '../imgs/projects/website_new.jpg';
import WEBSITE_OLD from '../imgs/projects/website_old.jpg';

export const PROJECTS = [
  {
    title: 'Personal Website',
    techs: ['JavaScript', 'React', 'Tailwind'],
    date: '2022 Q3',
    desc: 'Personal website to showcase experiences, projects, and skills.',
    url: 'https://dcmaglione.com/',
    img: WEBSITE_NEW,
  },
  {
    title: 'Dotfiles',
    techs: ['C', 'Python', 'Shell'],
    date: '2021 Q2',
    desc: 'Personal dotfiles repository for various Linux distributions.',
    url: 'https://github.com/dcmaglione/dotfiles/',
    img: DOTFILES,
  },
  {
    title: 'TestChain',
    techs: ['C++'],
    date: '2022 Q1',
    desc: 'Blockchain-based testnet for the Ethereum network.',
    url: 'https://github.com/dcmaglione/TestChain/',
    img: TESTCHAIN,
  },
  {
    title: 'Photoshare',
    techs: ['TypeScript', 'Python', 'SQL'],
    date: '2022 Q1',
    desc: 'Photo sharing website to upload and share images with users.',
    url: 'https://github.com/dcmaglione/Photoshare/',
    img: PHOTOSHARE,
  },
  {
    title: 'Pathfinding Visualizer',
    techs: ['Python', 'Pygame'],
    date: '2021 Q3',
    desc: 'Pathfinding visualizer for the A* search algorithm.',
    url: 'https://github.com/dcmaglione/pathfinding-visualization/',
    img: PATHFINDING,
  },
  {
    title: 'Old Website',
    techs: ['JavaScript', 'React', 'Tailwind'],
    date: '2021 Q3',
    desc: 'Old personal website and first React project.',
    url: 'https://github.com/dcmaglione/dcmag.website/',
    img: WEBSITE_OLD,
  },
];
