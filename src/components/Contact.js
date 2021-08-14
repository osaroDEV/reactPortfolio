import React from 'react';
import { RiMailSendFill } from 'react-icons/ri';
import { useGlobalContext } from '../context';

const Contact = () => {
  const { email } = useGlobalContext();

  return (
    <div id='contact' className='contact'>
      <span className='section-header sm-font'>
        let's build something together
      </span>
      <h2>Contact Me</h2>
      <form name='contact' method='POST' className='formstyle'>
        <input type='hidden' name='form-name' value='contact' />
        <div className='name-email-wrapper'>
          <p className='left'>
            <label for='name'>Your Name:</label>
            <input type='text' id='name' placeholder='John Smith' required />
          </p>
          <p className='right'>
            <label for='email'>Your Email:</label>
            <input
              type='email'
              id='email'
              placeholder='john_smith@osaro.com'
              required
            />
          </p>
        </div>
        <p>
          <label for='message'>Message:</label>
          <textarea
            id='message'
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
            or email me at{' '}
            <a className='link-email' href='mailto: osaronaiwu@yahoo.com'>
              <strong className='email-tooltip'>
                {email}
                <span className='tooltip'>click to redirect to compose box</span>
              </strong>
            </a>
          </p>
        </section>
      </form>
    </div>
  );
};

export default Contact;
