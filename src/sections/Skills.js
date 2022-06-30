import SkillsCard from '../components/SkillsCard';

const Skills = () => {
  return (
    <div class="relative my-16 flex flex-col">
      <div class="mb-8 text-5xl font-mono font-bold underline underline-offset-8 dark:text-primaryTextDark">
        Skills      
      </div>
      <div class="flex flex-col items-center xs:items-start gap-4">
        <div class="italic font-mono">[✱ - denotes high proficiency]</div>
        <SkillsCard />
      </div>
    </div>
  );
};

export default Skills;
