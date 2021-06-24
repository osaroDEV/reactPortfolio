import React from 'react';
import Hamburger from './Hamburger';
import NavBar from './NavBar';
// import ThemeSwitch from './ThemeSwitch';
// import logo from './logo.png';
// import logolight from './logo-lgt.png';
import lightlogo from './lightlogo.png';
import darklogo from './darklogo.png';
import { useGlobalContext } from '../context';

const Header = () => {
  const { darkMode } = useGlobalContext();

  return (
    <section className='header'>
      {/* <img src={`${darkMode?logolight:logo}`} alt='osaro-logo' /> */}
       <a href='https://osarodev.netlify.app'> <img
        className='logo'
        src={`${darkMode ? darklogo : lightlogo}`}
        alt='osaro-logo'
      /></a>
      <div>
        <Hamburger />
        <NavBar />
      </div>
    </section>
  );
};

export default Header;
