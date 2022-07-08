import React from 'react';

import { FiSun, FiMoon } from 'react-icons/fi';
import DarkMode from '../hooks/DarkMode';

const Navbar = () => {
  return (
    <div className="fixed flex flex-col justify-between h-16 w-screen">
      <ThemeIcon />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = DarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span
      className="text-3xl text-secondaryTextLight dark:text-secondaryTextDark hover:text-accent dark:hover:text-accent transition-all cursor-pointer"
      onClick={handleMode}
    >
      {darkTheme ? <FiSun /> : <FiMoon />}
    </span>
  );
};

export default Navbar;
