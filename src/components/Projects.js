import React from 'react';
import { useGlobalContext } from '../context';
import projectLinks from './projectLinks';

const Projects = () => {
  const { darkMode } = useGlobalContext();
  return (
    <div id='projects' className='projects-link-container'>
      <h1 style={{ textAlign: 'center', marginBottom: '0.5em'}}>Projects</h1>
      <ul style={{ listStyle: 'none' }}>
        {projectLinks.map((links) => {
          const { id, name, url } = links;
          return (
            <li key={id} style={{ textShadow: '2px 2px 2px #ecd672' }}>
              <a
                className={`project-link ${darkMode ? 'dark' : 'bright'}`}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <p>{name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
