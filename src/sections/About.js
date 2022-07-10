import React from 'react';
import PFP from '../assets/imgs/pfp.jpeg';

const About = () => {
  return (
    <div
      id="about"
      className="relative my-16 flex flex-col scroll-mt-32 xs:scroll-mt-24"
    >
      <div className="mb-8 text-5xl font-mono font-bold underline underline-offset-8">
        About      
      </div>
      <div className="gap-10 flex flex-col lg:flex-row items-center xs:items-start">
        <div>
          <img
            src={PFP}
            alt="Profile"
            className="max-w-xs xs:max-w-sm shadow-md border-4 border-primaryBgDark dark:border-primaryBgLight"
          />
        </div>
        <div className="flex flex-col gap-4 text-xl text-secondaryTextLight dark:text-secondaryTextDark">
          <h2 className="text-3xl font-bold">Hi There!</h2>
          <p>
            I'm a Junior at Boston University pursuing a BA/MS in Computer
            Science with a passion for software development and IT operations.
            Within CS, I possess a unique balance of technical depth alongside
            strong interpersonal skills.
          </p>
          <p>
            Outside of work, you'll find me spending quality time with friends,
            skateboarding around the city, reading a good book, or enjoying a
            nice cup of coffee!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
