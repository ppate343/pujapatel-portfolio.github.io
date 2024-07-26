import React from 'react';
import '../css/Projects.css'

const Projects = () => {
  return (
    <section id="projects" className='projects-section'>
      <h2>Projects</h2>
      <div className='projects-container'>
      <div id='portfolio' className='project'>
        <p>Portfolio Website React.js | Github</p>
      </div>
      <div id='datascience' className='project'>
        <p>Datasience Python | Github</p>
      </div>
      <div id='ARecipe' className='project'>
      <p>ARecipe  Angular.ts Express.js MongoDB | Github</p>
      </div>
      <div id='Cashly.io' className='project'>
      <p>Cashly.io  REact.js Express.js MongoDB RESTApi | Github</p>
      </div>
      </div>
    </section>
  );
};

export default Projects;
