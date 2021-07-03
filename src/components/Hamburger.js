import React from 'react';
import { useGlobalContext } from '../context';
import { CgMenuLeft, CgClose } from 'react-icons/cg';

const Hamburger = () => {
  const { modalOpen, setModalOpen } = useGlobalContext();

  return (
    <a href='#menu'
      className='hamburger-container'
    >
      {modalOpen ? (
        <CgClose className='menu-icon' onClick={() => setModalOpen(false)} />
      ) : (
          <CgMenuLeft className='menu-icon' onClick={() => setModalOpen(true)} />
      )}
    </a>
  );
};

export default Hamburger;
