import React from 'react';
import lunar from '../assets/private_lunar.webp';
import styled from 'styled-components';
const PrivateLunar = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <img src={lunar} alt='lunar' />
        <div className='info'>
          <h3>first private lunar mission</h3>
          <p>
            In 2023, Japanese entrepreneur Yusaku Maezawa and the crew of
            dearMoon will become the first civilian passengers on a lunar
            Starship mission, featuring a fly-by of the Moon during their
            week-long journey. This flight is an important step toward enabling
            access for people who dream of traveling to space.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  .section-center {
    display: grid;
    img {
      margin-bottom: 2rem;
    }
    .info {
      max-width: 25rem;
      h3 {
        text-transform: uppercase;
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      p {
        line-height: 1.5;
      }
    }
  }
  @media (min-width: 800px) {
    .section-center {
      align-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  @media (min-width: 1000px) {
    .section-center {
      gap: 4rem;
      .info {
        max-width: 35rem;
        h3 {
          font-size: 3rem;
        }
        p {
          line-height: 2;
        }
      }
    }
  }
`;

export default PrivateLunar;
