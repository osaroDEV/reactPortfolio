import React, { useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Intro from './components/Intro';
import Bio from './components/Bio';
import SkillsTools from './components/SkillsTools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useGlobalContext } from './context';
import { CgChevronUpO } from 'react-icons/cg';
import ThemeSwitch from './components/ThemeSwitch';
import { motion } from 'framer-motion';

function App() {
  const { isLoading, setIsLoading, themeMode, modalOpen } = useGlobalContext();

  useEffect(() => {
    modalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflowY = 'scroll');
  }, [modalOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, [setIsLoading]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      id='home'
      className={`main-container ${themeMode ? 'dark' : 'bright'} ${
        modalOpen ? 'no-scroll' : ''
      }`}
    >
      <Header />
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`fixed-container-arrow up-icon ${
          themeMode ? 'dark-color' : 'bright-color'
        }`}
        href='#top'
      >
        <CgChevronUpO className='up-icon' />
      </motion.a>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='fixed-container-switch'
      >
        <ThemeSwitch />
      </motion.span>
      <section className='content-container'>
        <main>
        <Intro />
        <Bio />
        </main>
        <Projects />
        <SkillsTools />
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
