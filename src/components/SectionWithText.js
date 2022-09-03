import React from 'react';
import styled from 'styled-components';
import ScrollDown from './ScrollDown';
const SectionWithText = ({ imgUrl, text, exp }) => {
  return (
    <Wrapper style={{ background: `url(${imgUrl})` }}>
      <div className='banner'>
        <span>{text}</span>
        <p>{exp}</p>
      </div>
      <ScrollDown />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .banner {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
  }
  span {
    font-size: 3rem;
  }
  p {
    max-width: 15rem;
    margin-inline: auto;
  }
  @media (min-width: 800px) {
    span {
      font-size: 4rem;
    }
    p {
      max-width: max-content;
    }
  }
  @media (min-width: 800px) {
    span {
      font-size: 6rem;
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

export default SectionWithText;
