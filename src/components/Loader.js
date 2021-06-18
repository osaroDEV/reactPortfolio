import React from 'react'
import loadlogo from './lightlogo.png';

const Loader = () => {
  return (
    <div className='loader-container'>
      <section className='loader-logo-container'>
        <img
          className='centerer'
          src={loadlogo}
          alt='osaro-logo'
        />
      </section>
    </div>
  );
}

export default Loader
