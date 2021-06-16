import React from 'react';
import { useGlobalContext } from '../context';
import { CgMenuLeft, CgClose } from 'react-icons/cg';

const Hamburger = () => {
  const { modalOpen, setModalOpen } = useGlobalContext();

  return (
    <div
      className='hamburger-container'
      onClick={() => setModalOpen(!modalOpen)}
    >
      {modalOpen ? (
        <CgClose className='menu-icon' />
      ) : (
        <CgMenuLeft className='menu-icon' />
      )}
    </div>
  );
};

export default Hamburger;
