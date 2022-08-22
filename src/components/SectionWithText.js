import React from 'react';
import styled from 'styled-components';
const SectionWithText = ({ imgUrl, text, exp }) => {
  return (
    <Wrapper style={{ background: `url(${imgUrl})` }}>
      <div className='banner'>
        <h1>{text}</h1>
        <p>{exp}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
  h1 {
    text-transform: uppercase;
    font-size: 5rem;
  }
  p {
    text-align: center;
    text-transform: uppercase;
  }
`;

export default SectionWithText;
