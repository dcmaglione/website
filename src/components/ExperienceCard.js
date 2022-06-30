import { EXPERIENCE } from '../assets/data/experience';

const ExperienceCard = () => {
  return (
    <div class="gap-8 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 max-w-fit">
      {EXPERIENCE.map(Card)}
    </div>
  );
};

const Card = ({ title, company, date, location, url, img }) => (
  <div></div> 
);

export default ExperienceCard;
