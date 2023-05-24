import React from 'react';
import { useInView } from 'react-intersection-observer';
import portrait from './portrait.jpg';
import { FaFileAlt, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Intro = () => {
  const { ref, inView } = useInView();
  const time = new Date();
  const hours = time.getHours();
  let timeOfDay = (hours <= 11) ? 'morning' : (hours <= 15 && hours > 11) ? 'afternoon' : (hours > 15) ? 'evening' : '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='intro'
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        src={portrait}
        className='bio-image'
        alt=''
      />
      <div className='caption' tabindex='0'>
        <span ref={ref} className={`section-header ${inView ? 'alt-border-curves' : null}`}>Good {timeOfDay}, I am</span>
        <motion.h1
          initial={{ opacity: 0, y: '40px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.25 }}
          className='name'
          tabindex='0'
        >
          Osaro Onaiwu
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: '40px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.22 }}
          className='title'
          tabindex='0'
        >
          <FaRegStar className='icon-animate' />
          <p tabindex='0'>frontend & cloud developer</p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: '40px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.19 }}
          className='brief-bio'
          tabindex='0'
        >
          A front-end developer & tutor focused on fluency in React & Javascript
        </motion.p>
        <a
          className='proj'
          href='https://drive.google.com/file/d/1VPCey6C7l4rVjtrch5dWVByCo5dWUly-/view?usp=sharing'
          rel='noreferrer'
          target='_blank'
        >
          <button className='btn'>
            <div className='flexed btn-animate'>
              <span>view resume</span>
              <FaFileAlt className='sideIcon' />
            </div>
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Intro;
