import React from 'react';
import styled from 'styled-components';
import { rideShareFeatures } from '../utils';
const RideShareFeatures = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        {rideShareFeatures.map((feature) => {
          const { id, text, title, img } = feature;
          return (
            <article key={id} className='single-feature'>
              <div>
                <img src={img} alt='' />
                <h2>{title}</h2>
              </div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;

  .section-center {
    display: grid;
  }
  .single-feature {
    margin-bottom: 2rem;
    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    h2 {
      font-size: 30px;
    }
    img {
      width: 75px;
    }
    p {
      line-height: 1.5;
    }
  }
  @media (min-width: 900px) {
    .section-center {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }
  @media (min-width: 1200px) {
    .section-center {
      gap: 5rem;
    }
    h2 {
      max-width: 15rem;
    }
    p {
      max-width: 19rem;
    }
  }
`;
export default RideShareFeatures;
