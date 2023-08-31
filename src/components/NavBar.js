import React from 'react';
import { links } from './links';
import { useGlobalContext } from '../context';

const NavBar = () => {
  const { themeMode, modalOpen, setModalOpen } = useGlobalContext();

  return (
    <section
      className={`modal-container ${modalOpen ? 'full-modal-container' : ''} ${
        themeMode && modalOpen ? 'modal-dark' : 'modal-bright'
      }`}
    >
      <ul className={`modal-content ${modalOpen ? 'full-modal-content' : ''}`}>
        {links.map((link) => {
          const { id, name, url } = link;
          return (
            <a
              href={url}
              key={id}
              className={`link ${
                themeMode && modalOpen ? 'li-dark-color' : 'li-bright-color'
              }`}
              onClick={() => setModalOpen(false)}
            >
              {name}
            </a>
          );
        })}
      </ul>
    </section>
  );
};

export default NavBar;
