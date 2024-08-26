import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <div className="content">
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <ContactMe />
      </div>
    </div>
 
  );
}

export default App;
