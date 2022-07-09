import React from 'react';
import EducationCard from '../components/EducationCard';

const Education = () => {
  return (
    <div id="education" className="relative py-16 flex flex-col">
      <div className="mb-8 text-5xl font-mono font-bold underline underline-offset-8">
        Education   
      </div>
      <div className="flex flex-col items-center xs:items-start gap-4">
        <EducationCard />
      </div>
    </div>
  );
};

export default Education;
