import React from 'react';
import UnitProject from './UnitProject';
import projectLinks from './projectLinks';


const Projects = () => {
  return (
    <>
      {' '}
      <div id='projects' className='section-header sm-font' style={{ lineHeight: 'initial' }}>
        my works
      </div>
      <h1 style={{ textAlign: 'center', marginBottom: '0.5em' }}>
        Projects
      </h1>
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
