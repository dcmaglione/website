import { EDUCATION } from '../assets/data/education';

const EducationCard = () => {
  return <div className="gap-8 max-w-fit">{EDUCATION.map(Card)}</div>;
};

const Card = ({ name, year, degree, url }) => (
  <div
    key={name}
    className="relative flex flex-col text-xl p-4 shadow-md border-4 border-primaryBgDark dark:border-primaryBgLight bg-secondaryBgDark dark:bg-secondaryBgLight text-secondaryTextDark dark:text-secondaryTextLight"
  >
    <a
      className="text-3xl font-bold hover:text-accent transition-all"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
    <div className="flex flex-col gap-6 font-mono">
      <ul className="text-lg italic text-accent font-medium">{year}</ul>
      <ul>{degree}</ul>
    </div>
  </div>
);

export default EducationCard;
