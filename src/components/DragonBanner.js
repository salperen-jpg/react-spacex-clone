import React from 'react';
import styled from 'styled-components';
const DragonBanner = () => {
  return (
    <Wrapper>
      <div className='dragon-banner-center'>
        <h2>taking humans to space</h2>
        <p>
          In 2020, SpaceX returned America’s ability to fly NASA astronauts to
          and from the International Space Station on American vehicles for the
          first time since 2011. In addition to flying astronauts to space for
          NASA, SpaceX’s Dragon spacecraft can also carry commercial astronauts
          to Earth orbit, the ISS or beyond.
        </p>
        <button className='btn'>learn more</button>
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
    max-width: 1000px;
    margin: 0 auto;
    .dragon-banner-center {
      width: auto;
      margin: 0;
      margin-top: 4rem;
      h2 {
        max-width: 30rem;
      }
      p {
        max-width: 27rem;
        line-height: 1.5;
        color: #ddd;
        margin-bottom: 1rem;
      }
    }
  }
  @media (min-width: 900px) {
    justify-content: flex-end;
    max-width: 1000px;
    margin: 0 auto;
    .dragon-banner-center {
      width: auto;
      margin: 0;
      margin-top: 4rem;
      h2 {
        max-width: 30rem;
      }
      p {
        max-width: 27rem;
        line-height: 1.5;
        color: #ddd;
        margin-bottom: 1rem;
      }
    }
  }
`;
export default DragonBanner;
