import MainContainer from './components/MainContainer';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';

function App() {
  return (
    <div class="app">
      <MainContainer>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </MainContainer>
    </div>
  );
}

export default App;
