import React from 'react';
import { RiMailSendFill, RiFileCopyLine } from 'react-icons/ri';
import { useGlobalContext } from '../context';

const Contact = () => {
  const { email } = useGlobalContext();

  return (
    <div id='contact' className='contact'>
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
        <section>
          <button className='btn form-btn-margin' type='submit'>
            <div className='flexed'>
              <span>send</span>
              <RiMailSendFill className='sideIcon' />
            </div>
          </button>
          <p
            style={{
              marginTop: '2rem',
              fontSize: '0.8rem',
              textAlign: 'center',
            }}
          >
            or email me at <strong>{email}</strong>{' '}
            <RiFileCopyLine
              className='copy'
              onClick={() => {
                navigator.clipboard.writeText(email);
              }}
            />
          </p>
        </section>
      </form>
    </div>
  );
};

export default Contact;
