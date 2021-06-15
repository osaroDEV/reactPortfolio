import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { useGlobalContext } from './context';
import { CgChevronUpO } from 'react-icons/cg';
import ThemeSwitch from './components/ThemeSwitch';
import Intro from './components/Intro'

function App() {
  const { darkMode } = useGlobalContext();
  return (
    <main className={`main-container ${darkMode ? 'dark' : 'bright'}`}>
        <Header />
        <span className='fixedIcons up-arrow'>
          <ThemeSwitch />
          <CgChevronUpO className='icon' />
        </span>
        <section className="content-container">
          <Intro />
        </section>
        <Footer />
    </main>
  );
}

export default App;
