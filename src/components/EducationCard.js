import { EDUCATION } from '../assets/data/education';

const EducationCard = () => {
  return (
    <div class="gap-8 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 max-w-fit">
      {EDUCATION.map(Card)}
    </div>
  );
};

const Card = ({ name, year, degree, url }) => (
  <div className="relative flex flex-col text-xl p-4 shadow-md border-4 border-primaryBgDark dark:border-primaryBgLight bg-secondaryBgDark dark:bg-secondaryBgLight text-secondaryTextDark dark:text-secondaryTextLight">
    <a
      class="text-3xl font-bold hover:text-accent transition-all"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
    <div className="flex flex-col gap-6 font-mono">
      <ul class="text-lg italic text-accent">{year}</ul>
      <ul>{degree}</ul>
    </div>
  </div>
);

export default EducationCard;
