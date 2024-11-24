import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
