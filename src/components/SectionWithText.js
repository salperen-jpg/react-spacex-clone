import React from 'react';
import styled from 'styled-components';
const SectionWithText = ({ imgUrl, text, exp }) => {
  return (
    <Wrapper style={{ background: `url(${imgUrl})` }}>
      <div className='banner'>
        <span>{text}</span>
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
