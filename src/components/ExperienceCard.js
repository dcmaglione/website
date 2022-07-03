import { EXPERIENCE } from '../assets/data/experience';

const ExperienceCard = () => {
  return (
    <div className="gap-8 grid grid-rows-auto grid-cols-1 lg:grid-rows-auto lg:grid-cols-2 max-w-fit">
      {EXPERIENCE.map(Card)}
    </div>
  );
};

const Card = ({ title, company, date, url, img }) => (
  <div
    key={title}
    className="relative flex flex-col text-xl p-4 gap-6 shadow-md border-4 border-secondaryBgDark dark:border-secondaryBgLight bg-secondaryBgLight dark:bg-secondaryBgDark text-secondaryTextLight dark:text-secondaryTextDark"
  >
    <div className="flex flex-row gap-4">
      <img
        className="h-24 w-24 border-2 border-secondaryBgDark dark:border-secondaryBgLight"
        src={img}
        alt={title}
      />
      <div className="flex flex-col">
        <a
          className="text-3xl font-bold hover:text-accent transition-all"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <ul className="text-lg italic font-mono text-accent font-medium">
          {company}
        </ul>
      </div>
    </div>
    <div className="font-mono font-bold">{date}</div>
  </div>
);

export default ExperienceCard;
