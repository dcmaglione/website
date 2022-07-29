import React from 'react';

const Footer = () => {
  return (
    <div className="relative my-10  flex flex-col text-center gap-2 xs:gap-0 xs:flex-row xs:text-justify justify-between">
      <div className="text-xl">© 2022 Dominic Maglione</div>
      <a
        className="text-xl font-mono hover:text-accent hover:font-bold transition-all"
        href="https://github.com/dcmaglione/website"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </a>
    </div>
  );
};

export default Footer;
