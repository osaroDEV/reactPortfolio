import React from 'react';
import portrait from './portrait.jpg';
import { FaFileAlt, FaRegStar } from 'react-icons/fa';
import {motion} from 'framer-motion'

const Intro = () => {
  return (
    <div className='intro'>
      <motion.img
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        src={portrait}
        className='bio-image'
        alt='Osaro Onaiwu'
      />
      <div className='caption'>
        <p className='section-header'>Hello, I am</p>
        <h1 className='name'>Osaro Onaiwu</h1>
        <div className='title'>
          <FaRegStar />
          <p>developer & UI/UX expert</p>
        </div>
        <p className='brief-bio'>
          I'm a front-end developer focused on fluency in React & Javascript
        </p>
        <a
          className='proj'
          href='https://drive.google.com/file/d/1dg-OzrLflbhOBYnzqnwzfSKLZeJmTWAd/view?usp=sharing'
          rel='noreferrer'
          target='_blank'
        >
          <button className='btn'>
            <span>view resume</span>
            <FaFileAlt className='sideIcon' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
