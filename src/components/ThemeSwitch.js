import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const ThemeSwitch = () => {
  const { handleTheme, themeMode } = useGlobalContext();
  return (
    <div
      className={`theme-container ${themeMode ? 'darkContainer' : ''}`}
      onClick={handleTheme}
    >
        <FaMoon className='moon' />
      <div className={`switch ${themeMode ? 'move' : ''} `}></div>
        <FaSun className='sun' />
    </div>
  );
};

export default ThemeSwitch;
