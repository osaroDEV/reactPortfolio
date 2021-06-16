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
      <span className='moon'>
        <FaMoon />
      </span>
      <div className={`switch ${darkMode ? 'move' : ''} `}></div>
      <span className='sun'>
        <FaSun />
      </span>
    </div>
  );
};

export default ThemeSwitch;
