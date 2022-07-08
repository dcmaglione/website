import React from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon } from 'react-icons/fi';
import DarkMode from '../hooks/DarkMode';

const Navbar = () => {
  return (
    <div className="fixed flex flex-row justify-between h-16 w-screen text-3xl text-secondaryTextLight dark:text-secondaryTextDark">
      <Link
        activeClass="active"
        to="root"
        spy={true}
        smooth={true}
        duration={600}
        className="hover:text-hoverTextLight dark:hover:text-hoverTextDark transition-all cursor-pointer"
      >
        dcmag
      </Link>
      <ThemeIcon />
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
