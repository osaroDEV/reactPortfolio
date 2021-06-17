import React from 'react';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Bio = () => {
  const { darkMode } = useGlobalContext();
  return (
    <>
      <div className='about'>
        <div className='section-header sm-font'>more about Osaro</div>
        <h2>About Me</h2>
        <p>Hey! I'm a front-end developer and UI/UX expert.</p>

        <p>
          I like creating beautiful web pages for businesses. Check out the
          projects section to view some of my creations.
        </p>
        <span>Find me here:</span>
        <div className='social'>
          <section className='bio-icon-container'>
            <a
              href='https://linkedin.com/in/osaroonaiwu'
              rel='noreferrer'
              target='_blank'
            >
              <FaLinkedin className={`bio-icon ${darkMode ? 'light' : ''}`} />
            </a>
            <a
              href='https://github.com/osaroDEV'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub className={`bio-icon ${darkMode ? 'light' : ''}`} />
            </a>
            <a
              href='https://twitter.com/osaroDEV'
              rel='noreferrer'
              target='_blank'
            >
              <FaTwitterSquare
                className={`bio-icon ${darkMode ? 'light' : ''}`}
              />
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Bio;
