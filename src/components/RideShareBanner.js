import React from 'react';
import styled from 'styled-components';

const RideShareBanner = ({ title, exp, buttonText }) => {
  return (
    <Wrapper>
      <div className='dragon-banner-center'>
        <h2>{title}</h2>
        <p>{exp}</p>
        <button className='btn'>{buttonText}</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 2rem;
  display: flex;
  .dragon-banner-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1400px;
    h2 {
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    p {
      line-height: 2;
      color: #ddd;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 300px) {
    h2,
    p {
      max-width: 30rem;
    }
  }
`;
export default RideShareBanner;
