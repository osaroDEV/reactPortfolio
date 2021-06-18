import React, { useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Intro from './components/Intro';
import Bio from './components/Bio';
import SkillsTools from './components/SkillsTools';
import Footer from './components/Footer';
import { useGlobalContext } from './context';
import { CgChevronUpO } from 'react-icons/cg';
import ThemeSwitch from './components/ThemeSwitch';
import { motion } from 'framer-motion';

function App() {
  const { isLoading, setIsLoading, darkMode, modalOpen } = useGlobalContext();

  useEffect(() => {
    modalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [modalOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [setIsLoading]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <main
      // id='top'
      className={`main-container ${darkMode ? 'dark' : 'bright'} ${
        modalOpen ? 'no-scroll' : ''
      }`}
    >
      <Header />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='fixed-container-arrow'
      >
        <a
          className={`up-icon ${darkMode ? 'darkTrans' : 'brightTrans'}`}
          href='#top'
        >
          <CgChevronUpO />
        </a>
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className='fixed-container-switch'
      >
        <ThemeSwitch />
      </motion.span>
      <section className='content-container'>
        <Intro />
        <Bio />
        <SkillsTools />
      </section>
      <div id='foo' className='foo'>
        <Footer />
      </div>
    </main>
  );
}

export default App;
