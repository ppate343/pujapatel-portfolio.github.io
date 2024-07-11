import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experiences />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
