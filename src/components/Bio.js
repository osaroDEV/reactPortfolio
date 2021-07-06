import React from 'react';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Bio = () => {
  const { darkMode } = useGlobalContext();
  return (
    <>
      <div id='about' className='about'>
        <div
          className='section-header sm-font'
          style={{ lineHeight: 'initial' }}
        >
          more about Osaro
        </div>
        <h2>About Me</h2>
        <p>
          I’ll help you build fast, accessible websites. If you have an idea for
          a website or want to upgrade the one you currently use; check the{' '}
          <a className='bio-a' href='#contact'>
            contact
          </a>{' '}
          section. I am always honing my coding skills and also learning a
          foreign language. In my free-time, I play chess mostly. Check out the{' '}
          <a className='bio-a' href='#projects'>
            projects
          </a>{' '}
          section to view some of my creations.
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
