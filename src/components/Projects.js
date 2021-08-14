import React from 'react';
import UnitProject from './UnitProject';
import projectLinks from './projectLinks';


const Projects = () => {
  return (
    <>
      {' '}
      <span id='projects' className='section-header sm-font' style={{ lineHeight: 'initial' }}>
        what i've been working on
      </span>
      <h2>
        Projects
      </h2>
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
    </>
  );
};

export default Projects;
