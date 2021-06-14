import React from 'react';
import { useGlobalContext } from '../context';
import { CgMenuLeft, CgClose } from 'react-icons/cg';

const Hamburger = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <div className='hamburger-container' onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <CgClose className='icon' /> : <CgMenuLeft className='icon' />}
    </div>
  );
};

export default Hamburger;
