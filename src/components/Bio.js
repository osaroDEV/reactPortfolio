import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Bio = () => {
  const { ref, inView } = useInView();
  const { themeMode } = useGlobalContext();

  return (
    <>
      <div id='about' className='about'>
        <span
          ref={ref}
          className={`section-header sm-font ${
            inView ? 'alt-border-curves' : null
          }`}
          style={{ lineHeight: 'initial' }}
        >
          more about Osaro
        </span>
        <div>
          <p>
            Hi there! My pseudo-name is <strong>osarodev</strong> and I blog about code <Link to='/blog'><span className='bio-a'>here</span></Link>.
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
          <p>I am working as a Cloud Developer whilst seeking a remote job.</p>

          <p>
            Oh! I almost forgot to mention that I also{' '}
            <strong>freelance &amp; teach frontend technologies</strong>. Feel
            free to hit me up via the{' '}
            <a className='bio-a' href='#contact'>
              contact
            </a>{' '}
            section.
          </p>
          <p>
            <strong>
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
        <div className='social-icons-wrapper'>
          <section className='bio-icon-container'>
            <a
              href='https://linkedin.com/in/osaroonaiwu'
              rel='noreferrer'
              target='_blank'
            >
              <FaLinkedin
                className={`bio-icon ${themeMode ? 'dark' : 'bright'}`}
              />
              <span className={`icon-text ${themeMode ? 'dark' : 'bright'}`}>
                linkedin
              </span>
            </a>
            <a
              href='https://github.com/osaroDEV'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub
                className={`bio-icon ${themeMode ? 'dark' : 'bright'}`}
              />
              <span className={`icon-text ${themeMode ? 'dark' : 'bright'}`}>
                github
              </span>
            </a>
            <a
              href='https://twitter.com/osaroDEV'
              rel='noreferrer'
              target='_blank'
            >
              <FaTwitterSquare
                className={`bio-icon ${themeMode ? 'dark' : 'bright'}`}
              />
              <span className={`icon-text ${themeMode ? 'dark' : 'bright'}`}>
                twitter
              </span>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Bio;
