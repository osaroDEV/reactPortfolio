import React from 'react';
import loaderlogo from './loaderlogo.png';

const Loader = () => {
  return (
    <div className='loader-container'>
      <section className='animate-loader'>
        <img className='centerer' src={loaderlogo} alt='osarodev-logo' />
      </section>
    </div>
  );
};

export default Loader;
