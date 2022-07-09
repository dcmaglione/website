import React from 'react';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import DarkMode from '../hooks/DarkMode';

const Navbar = () => {
  return (
    <div className="py-4 px-16 z-10 fixed left-1/2 -translate-x-1/2 flex flex-col xs:flex-row items-center xs:items-start gap-2 xs:gap-0 justify-between w-11/12 text-3xl text-secondaryTextLight dark:text-secondaryTextDark bg-primaryBgLight dark:bg-primaryBgDark max-w-screen-2xl">
      <a
        href="/"
        className="hover:text-hoverTextLight dark:hover:text-hoverTextDark transition-all cursor-pointer font-extrabold"
      >
        DCMAG
      </a>
      <div className="flex flex-row gap-4">
        <ThemeIcon />
        <FiMenu className="hover:text-accent dark:hover:text-accent transition-all cursor-pointer" />
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
