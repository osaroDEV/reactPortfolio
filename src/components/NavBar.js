import React from 'react';
import { links } from './links';
import { useGlobalContext } from '../context';

const NavBar = () => {
  const { modalOpen, setModalOpen } = useGlobalContext();

  return (
    <section
      className={`modal-container ${modalOpen ? '' : 'no-links'}`}
    >
      <ul className='modal-content'>
        {links.map((link) => {
          const { id, name, url } = link;
          return (
            <a href={url} key={id} onClick={()=>setModalOpen(!modalOpen)}>
              {name}
            </a>
          );
        })}
      </ul>
    </section>
  );
};

export default NavBar;
