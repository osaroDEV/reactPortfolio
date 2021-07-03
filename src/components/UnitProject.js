import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 320px;
  width: 320px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 10px;
  position: relative;
  fontsize: 0.5em;
  margin: 1em;
  // border: 1px solid green;
  transition: all 0.2s ease-out 0s;
  box-shadow: rgb(34 15 108 / 9%) 3px 7px 15px 2px;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(34 15 108 / 9%) 0px 28px 30px 8px;
  }
`;
const UnitProject = ({ id, title, src, url }) => {
  return (
    
    <a style={{textDecoration: 'none', color: 'inherit'}} href={url} target='_blank' rel='noreferrer'><Container>
        <p style={{ textAlign: 'left', fontWeight: 900, fontSize: '1.1rem', textShadow: '2px 2px 2px #ecd672' }}>
          {title}
        </p>
        <img
          style={{
            display: 'block',
            // width: 'calc(100% - 3.6rem)',
            width: '260px',
            height: '126.88px',
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%)',
          }}
          src={src}
          alt={title}
        />
      </Container></a>
    
  );
};

export default UnitProject;
