import React from 'react';
import { useInView } from 'react-intersection-observer';
import UnitProject from './UnitProject';
import projectLinks from './projectLinks';

const Projects = () => {
  const { ref, inView } = useInView();
  return (
    <div id='projects'>
      {' '}
      <span
        ref={ref}
        className={`section-header sm-font ${
          inView ? 'alt-border-curves' : null
        }`}
        style={{ lineHeight: 'initial' }}
      >
        what i've been working on
      </span>
      <h2>Projects</h2>
      <div
        style={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          margin: '2rem 0',
        }}
      >
        {projectLinks.map((project) => {
          return <UnitProject key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
