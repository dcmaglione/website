import Socials from '../components/Socials';
import '../index.css';

const Home = () => {
  return (
    <div class="relative m-auto flex flex-col items-center justify-center text-center h-screen">
      <h1
        id="title"
        class="m-2 text-7xl font-bold tracking-wide dark:text-primaryTextDark"
      >
        Dominic Maglione
      </h1>
      <h2
        id="subtitle"
        class="m-4 font-mono text-2xl italic text-secondaryTextLight dark:text-secondaryTextDark"
      >
        Aspiring Full Stack Developer
      </h2>
      <div id="socials">
        <Socials />
      </div>
    </div>
  );
};

export default Home;
