import React from 'react';
// import {BiMailSend} from 'react-icons/bi'
import { RiMailSendFill } from 'react-icons/ri';

const Contact = () => {
  return (
    <div id='contact' className='contact' netlify>
      <div className='section-header sm-font'>wanna reach me?</div>
      <h2>Contact Me</h2>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        className='formstyle'
      >
        <div className='name-email-wrapper'>
          <p className='left'>
            <label>Your Name:</label>
            <input type='text' name='name' placeholder='John Smith' required />
          </p>
          <p className='right'>
            <label>Your Email:</label>
            <input
              type='email'
              name='email'
              placeholder='john_smith@osaro.com'
              required
            />
          </p>
        </div>
        <p>
          <label>Message:</label>
          <textarea
            name='message'
            rows='4'
            placeholder='Guten Tag!'
            required
          ></textarea>
        </p>
        <p>
          <button className='btn form-btn-margin' type='submit'>
            <div className='flexed'>
              <span>send</span>
              <RiMailSendFill className='sideIcon' />
            </div>
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
