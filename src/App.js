import React from 'react';
import MainContainer from './components/MainContainer';

import Navbar from './sections/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
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
  );
}

export default App;
