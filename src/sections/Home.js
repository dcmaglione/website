import React from 'react';
import Socials from '../components/Socials';
import '../index.css';

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center h-screen">
      <h1
        id="title"
        className="m-2 text-7xl font-bold tracking-wide dark:text-primaryTextDark"
      >
        Dominic Maglione
      </h1>
      <h2
        id="subtitle"
        className="m-4 font-mono font-medium text-2xl italic text-secondaryTextLight dark:text-secondaryTextDark"
      >
        Full Stack Software Developer
      </h2>
      <div id="socials">
        <Socials />
      </div>
    </div>
  );
};

export default Home;
