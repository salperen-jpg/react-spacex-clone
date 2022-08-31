import React from 'react';
import styled from 'styled-components';
const DragonBanner = ({ title, exp, buttonText }) => {
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
    h2 {
      text-transform: uppercase;
      margin-bottom: 1rem;
      max-width: 20rem;
    }
    p {
      line-height: 2;
      color: #ddd;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 900px) {
    justify-content: flex-end;
    max-width: 1200px;
    margin: 0 auto;

    .dragon-banner-center {
      width: auto;
      margin: 0;
      margin-top: 6rem;

      h2 {
        max-width: 30rem;
        font-size: 3.4rem;
        margin-bottom: 2rem;
      }
      p {
        max-width: 32rem;
        line-height: 2;
        color: #ddd;
        margin-bottom: 2rem;
      }
    }
  }
`;
export default DragonBanner;
