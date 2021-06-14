import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { useGlobalContext } from './context';

function App() {
  const { darkMode } = useGlobalContext();
  return (
    <main className={`container ${darkMode ? 'dark' : 'bright'}`}>
      <div className='padded'>
        <Header />
        <h1>hello</h1>
        <Footer />
      </div>
    </main>
  );
}

export default App;
