import React from 'react';
import { useGlobalContext } from '../context';
import { CgMenuLeft, CgClose } from 'react-icons/cg';

const Hamburger = () => {
  const { modalOpen, setModalOpen } = useGlobalContext();

  return (
    <div
      className='hamburger-container'
    >
      {modalOpen ? (
        <CgClose className='menu-icon' onClick={() => setModalOpen(false)} />
      ) : (
          <CgMenuLeft className='menu-icon' onClick={() => setModalOpen(true)} />
      )}
    </div>
  );
};

export default Hamburger;
