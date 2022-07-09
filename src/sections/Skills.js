import React from 'react';
import SkillsCard from '../components/SkillsCard';

const Skills = () => {
  return (
    <div id="skills" className="relative py-16 flex flex-col">
      <div className="mb-8 text-5xl font-mono font-bold underline underline-offset-8">
        Skills      
      </div>
      <div className="flex flex-col items-center xs:items-start gap-4 text-secondaryTextLight dark:text-secondaryTextDark">
        <div className="italic font-mono">[✱ - denotes high proficiency]</div>
        <SkillsCard />
      </div>
    </div>
  );
};

export default Skills;
