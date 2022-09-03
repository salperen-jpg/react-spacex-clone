import React from 'react';
import styled from 'styled-components';

const SpaceFlightBanner = ({ title, exp, buttonText, positionText }) => {
  console.log(positionText);
  return (
    <Wrapper className={positionText}>
      <div className='title'>
        <span>mission</span>
        <h3>{title}</h3>
      </div>
      <p>{exp}</p>
      <button className='btn'>explore</button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  text-transform: uppercase;
  .title {
    margin-bottom: 1rem;
  }
  span {
    display: inline-block;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: lighter;
  }
  p {
    max-width: 20rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  button {
    padding: 1.25rem 3rem;
  }
  @media (min-width: 600px) {
    .title {
      span {
        font-size: 1.2rem;
      }
      h3 {
        font-size: 2.25rem;
      }
    }
  }
  @media (min-width: 800px) {
    .title {
      h3 {
        font-size: 2.7rem;
      }
    }
  }
`;
export default SpaceFlightBanner;
