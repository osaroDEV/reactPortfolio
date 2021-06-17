import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const ThemeSwitch = () => {
  const { darkMode, setDarkMode } = useGlobalContext();
  return (
    <div
      className={`theme-container ${darkMode ? 'darkContainer' : ''}`}
      onClick={() => setDarkMode(!darkMode)}
    >
        <FaMoon className='moon' />
      <div className={`switch ${darkMode ? 'move' : ''} `}></div>
        <FaSun className='sun' />
      
    </div>
  );
};

export default ThemeSwitch;
