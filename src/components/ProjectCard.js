import { PROJECTS } from '../assets/data/projects';

const ProjectCard = () => {
  return (
    <div className="gap-8 grid grid-rows-auto grid-cols-1 md:grid-rows-auto md:grid-cols-2 max-w-md md:max-w-fit">
      {PROJECTS.map(Card)}
    </div>
  );
};

const Card = ({ title, techs, date, desc, url, img }) => (
  <div
    key={title}
    className="relative flex flex-col gap-4 text-xl p-4 shadow-md border-4 border-primaryBgDark dark:border-primaryBgLight bg-secondaryBgDark dark:bg-secondaryBgLight text-primaryTextDark dark:text-primaryTextLight"
  >
    <img
      className="h-max w-max border-2 border-primaryBgDark dark:border-primaryBgLight"
      src={img}
      alt={title}
    />
    <div className="flex flex-row flex-wrap gap-4">
      {techs.map((tech) => (
        <div
          key={tech}
          className="p-1 font-mono font-semibold border-2 bg-secondaryBgLight dark:bg-secondaryBgDark text-secondaryTextLight dark:text-secondaryTextDark border-primaryBgDark dark:border-primaryBgLight"
        >
          {tech}
        </div>
      ))}
    </div>
    <div className="flex flex-col gap-0">
      <a
        className="text-3xl font-bold hover:text-hoverTextDark dark:hover:text-hoverTextLight transition-all"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <div className="text-lg italic text-accent font-mono font-medium">
        {date}
      </div>
    </div>
    <div className="mt-2 font-mono text-secondaryTextDark dark:text-secondaryTextLight">
      {desc}
    </div>
  </div>
);

export default ProjectCard;
