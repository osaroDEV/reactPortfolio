import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding-bottom: 3em;
`;

const Footer = () => {
  return (
    <Foot>
      <p>&copy;2020 Osaro Onaiwu. All rights reserved.</p>
    </Foot>
  );
};

export default Footer;