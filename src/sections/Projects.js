import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className="relative py-16 flex flex-col">
      <div className="mb-8 text-5xl font-mono font-bold underline underline-offset-8">
        Projects    
      </div>
      <div className="flex flex-col items-center xs:items-start gap-4">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
