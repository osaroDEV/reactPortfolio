import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 4rem 0;
`;

const Footer = () => {
  return (
    <Foot>
      <p>&copy;{new Date().getFullYear()} Osaro Onaiwu. All rights reserved.</p>
    </Foot>
  );
};

export default Footer;
