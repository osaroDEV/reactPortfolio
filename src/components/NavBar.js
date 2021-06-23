import React from 'react';
import { links } from './links';
import { useGlobalContext } from '../context';

const NavBar = () => {
  const {darkMode, modalOpen, setModalOpen } = useGlobalContext();

  return (
    <section
      className={`modal-container ${modalOpen ? 'full-modal-container' : ''} ${darkMode && modalOpen?'dark':'bright'}`}
    >
      <ul className={`modal-content ${modalOpen ? 'full-modal-content' : ''}`}>
        {links.map((link) => {
          const { id, name, url } = link;
          return (
            <a href={url} key={id} className={`${darkMode && modalOpen ? 'darkTrans' : 'brightTrans'}`} onClick={() => setModalOpen(!modalOpen)}>
              {name}
            </a>
          );
        })}
      </ul>
    </section>
  );
};

export default NavBar;
