import { SKILLS } from '../assets/data/skills';

const SkillsCard = () => {
  return (
    <div class="grid grid-rows-4 grid-cols-1 xs:grid-rows-2 xs:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 max-w-fit gap-8">
      {SKILLS.map(Card)}
    </div>
  );
};

const Card = ({ type, skills }) => (
  <div class="flex flex-col gap-6 text-xl p-4 border-4 border-secondaryBgDark dark:border-secondaryBgLight hover:border-accent transition-all shadow-md text-secondaryTextLight dark:text-secondaryTextDark bg-secondaryBgLight dark:bg-secondaryBgDark">
    <h2 class="text-3xl font-bold underline underline-offset-8">{type}</h2>
    <div class="flex flex-col gap-4 font-mono italic">
      {skills.map((skill) => (
        <ul>{skill}</ul>
      ))}
    </div>
  </div>
);

export default SkillsCard;
