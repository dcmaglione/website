import { EXPERIENCE } from '../assets/data/experience';

const ExperienceCard = () => {
  return (
    <div class="gap-8 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 max-w-fit">
      {EXPERIENCE.map(Card)}
    </div>
  );
};

const Card = ({ title, company, date, location, url, img }) => (
  <div class="relative flex flex-col text-xl p-4 gap-6 shadow-md border-4 border-secondaryBgDark dark:border-secondaryBgLight bg-secondaryBgLight dark:bg-secondaryBgDark text-secondaryTextLight dark:text-secondaryTextDark">
    <div class="flex flex-row gap-4">
      <img
        class="h-24 w-24 border-2 border-secondaryBgDark dark:border-x-secondaryBgLight"
        src={img}
        alt={title}
      />
      <div class="flex flex-col">
        <a
          class="text-3xl font-bold hover:text-accent transition-all"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <ul class="text-lg italic font-mono text-accent">{company}</ul>
      </div>
    </div>
    <div class="font-mono font-bold">{date}</div>
  </div>
);

export default ExperienceCard;
