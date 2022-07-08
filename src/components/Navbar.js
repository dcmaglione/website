import React from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import DarkMode from '../hooks/DarkMode';

const Navbar = () => {
  return (
    <div className="py-12 px-28 z-10 fixed flex flex-row justify-between w-screen text-3xl text-secondaryTextLight dark:text-secondaryTextDark">
      <Link
        activeClass="active"
        to="root"
        spy={true}
        smooth={true}
        duration={600}
        className="hover:text-hoverTextLight dark:hover:text-hoverTextDark transition-all cursor-pointer font-extrabold"
      >
        DCMAG
      </Link>
      <div className="flex flex-row gap-4">
        <ThemeIcon />
        <FiMenu />
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
