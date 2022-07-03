import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="relative my-16 flex flex-col">
      <div className="mb-8 text-5xl font-mono font-bold underline underline-offset-8 dark:text-primaryTextDark">
        Projects    
      </div>
      <div className="flex flex-col items-center xs:items-start gap-4">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
