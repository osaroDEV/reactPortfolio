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
        <div>
          <p>
            Hi there! My pseudo-name is{' '}
            <strong style={{ textShadow: '2px 2px 2px #ecd672' }}>
              osarodev
            </strong>{' '}
            and I love building things with code.
          </p>
          <p>
            My first venture into coding was more than a decade ago when I got
            introduced to now defunct programming languages like Visual Basic,
            Fortran &amp; Pascal.
          </p>
          <p>
            Unfortunately, tertiary education got in the way and I did not look
            back.
          </p>
          <p>
            After graduation, I got a job in the oil and gas sector as an Admin
            Executive. I held this position for a few years and quit as I was
            getting increasingly frustrated with the routine.
          </p>
          <p>
            I had a lot of time to plan my next move. It was then it occurred to
            me: I could start coding again. The difference this time around was
            that the programming languages had become a lot more empowering.
          </p>
          <p>
            I have been honing my coding skills since and also learning a
            foreign language.
          </p>
          <p>I am currently seeking a remote or full-time role.</p>

          <p>
            I can freelance, in the meantime, hence if you have an idea for a
            website or want to upgrade the one you currently use, check the{' '}
            <a className='bio-a' href='#contact'>
              contact
            </a>{' '}
            section.
          </p>
          <p>
            <strong style={{ textShadow: '2px 2px 2px #ecd672' }}>
              I will help you build fast &amp; accessible websites.
            </strong>{' '}
          </p>
          <p>
            Check out the{' '}
            <a className='bio-a' href='#projects'>
              projects
            </a>{' '}
            section to view some of my creations.
          </p>
        </div>
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
