import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import DarkMode from '../hooks/DarkMode';
import DropMenu from './DropMenu';

const Navbar = () => {
  return (
    <div className="pt-6 pb-2 px-6 lg:px-16 z-10 fixed left-1/2 -translate-x-1/2 flex flex-row items-center xs:items-start gap-2 xs:gap-0 justify-between w-[94vw] text-3xl text-secondaryTextLight dark:text-secondaryTextDark bg-primaryBgLight dark:bg-primaryBgDark max-w-screen-2xl border-b-4 border-primaryBgDark dark:border-primaryBgLight">
      <a
        href="/"
        className="hover:text-hoverTextLight dark:hover:text-hoverTextDark transition-all cursor-pointer font-extrabold"
      >
        DCMAG
      </a>
      <div className="flex flex-row gap-4">
        <ThemeIcon />
        <DropMenu />
      </div>
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = DarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span
      className="hover:text-accent dark:hover:text-accent transition-all cursor-pointer"
      onClick={handleMode}
    >
      {darkTheme ? <FiSun /> : <FiMoon />}
    </span>
  );
};

export default Navbar;
