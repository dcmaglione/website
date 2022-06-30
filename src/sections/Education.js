import EducationCard from '../components/EducationCard';

const Education = () => {
  return (
    <div class="relative my-16 flex flex-col">
      <div class="mb-8 text-5xl font-mono font-bold underline underline-offset-8 dark:text-primaryTextDark">
        Education   
      </div>
      <div class="flex flex-col items-center xs:items-start gap-4">
        <EducationCard />
      </div>
    </div>
  );
};

export default Education;
