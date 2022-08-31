import React from 'react';
import styled from 'styled-components';
const Draco = ({ title, exp, underline, draco, raptor }) => {
  return (
    <Wrapper>
      <div className='draco-center'>
        <div className='banner'>
          <div className='titles'>
            <span>engines</span>
            <h3>{title}</h3>
          </div>
          {underline && (
            <div className='secondary-title'>
              <span>
                draco <span className='fade-text'> | superdraco</span>
              </span>
            </div>
          )}
          <p>{exp}</p>
          <div className='table'>
            {draco && (
              <>
                <p>
                  <span>number of engines</span>
                  <span>16</span>
                </p>
                <p>
                  <span>thrust in vacuum</span>
                  <span>
                    400N / <span className='fade-text'> 90 lbf</span>
                  </span>
                </p>
              </>
            )}
            {raptor && (
              <>
                <p>
                  <span>DIAMETER</span>
                  <span>
                    1.3 m <span className='fade-text'>/ 4 ft</span>
                  </span>
                </p>
                <p>
                  <span>HEIGHT</span>
                  <span>
                    3.1 m <span className='fade-text'> / 10.2 ft</span>
                  </span>
                </p>
                <p>
                  <span>THRUST</span>
                  <span>
                    230 tf <span className='fade-text'> / 500 klbf </span>
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 33rem;
  span {
    font-size: 0.9rem;
  }
  .draco-center {
    width: 90vw;
    max-width: 1400px;
    margin: 0 auto;
  }
  .banner {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .titles {
    text-transform: uppercase;
  }
  .secondary-title {
    text-transform: uppercase;
    .fade-text {
      color: #bbb;
    }
  }
  p {
    line-height: 1.75;
    font-size: 0.95rem;
  }
  .table {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #bbb;
      padding: 0.5rem 0;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.9rem;

      .fade-text {
        text-transform: lowercase;
        color: #bbb;
      }
    }
  }
  @media (min-width: 700px) {
    margin: 0;
    .banner {
      max-width: 25rem;
      margin-top: 10rem;
      gap: 1.25rem;
    }
  }
  @media (min-width: 1000px) {
    margin: 0;
    .banner {
      max-width: 35rem;
      margin-top: 10rem;
      gap: 1.5rem;
    }
  }
`;

export default Draco;
