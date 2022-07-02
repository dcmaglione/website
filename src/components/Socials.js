import { SOCIALS } from '../assets/data/socials';

const Socials = () => {
  return (
    <div className="relative flex flex-row items-center justify-center m-2">
      {SOCIALS.map(Icon)}
    </div>
  );
};

const Icon = ({ name, url, icon }) => (
  <div key={name} className="relative mx-5 text-3xl group">
    <a
      className="text-secondaryTextLight dark:text-secondaryTextDark hover:text-accent dark:hover:text-accent transition-all"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
    <span className="absolute mt-2 px-1.5 left-1/2 -translate-x-1/2 text-sm font-semibold text-secondaryTextDark dark:text-secondaryTextLight bg-secondaryBgDark dark:bg-secondaryBgLight rounded-md shadow-md transition-all origin-center scale-0 group-hover:scale-100">
      {name}
    </span>
  </div>
);

export default Socials;
