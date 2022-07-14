import React from 'react';

const MainContainer = ({ children }) => (
  <div className="flex flex-col m-auto px-8 sm:px-16 gap-y-6 max-w-5xl font-sans font-normal text-primaryTextLight dark:text-primaryTextDark">
    {children}
  </div>
);

export default MainContainer;
