import React from 'react';
import styled from 'styled-components';
const Progress = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 10rem;
  .section-center {
    overflow: hidden;
    .dots {
      display: none;
      position: relative;
    }
  }
  .dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: #fff;
  }
  @media (min-width: 800px) {
    .section-center {
      .dots {
        display: grid;
        max-width: 1120px;
        margin: 0 auto;
        grid-template-columns: repeat(5, 1fr);
      }
      .dots:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        top: 50%;
        left: 0;
        background-color: #fff;
      }
    }
  }
`;
export default Progress;
