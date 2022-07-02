import MainContainer from './components/MainContainer';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Footer from './sections/Footer';

function App() {
  return (
    // dark mode testing
    <div className="">
      <div className="app">
        <MainContainer>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Footer />
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
