import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  return (
    <div className="relative my-16 flex flex-col">
      <div className="mb-8 text-5xl font-mono font-bold underline underline-offset-8 dark:text-primaryTextDark">
        Experience  
      </div>
      <div className="flex flex-col items-center xs:items-start gap-4">
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
