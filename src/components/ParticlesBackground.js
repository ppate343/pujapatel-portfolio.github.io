
import React, { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from '../assets/particlesConfig';

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
  
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    return (
      <>
        {init && (
          <Particles
            id="tsparticles"
            options={particlesConfig}
          />
        )}
      </>
    );
  };
  
  export default ParticlesBackground;