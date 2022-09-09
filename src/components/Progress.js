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
      <div className='texts'>
        <span>place and order</span>
        <span>place and order</span>
        <span>place and order</span>
        <span>place and order</span>
        <span>place and order</span>
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
  .texts {
    display: none;
  }
  @media (min-width: 800px) {
    .section-center {
      .dots {
        display: grid;
        max-width: 1300px;
        margin: 0 auto;
        background-color: blue;
        margin-left: 20%;
        grid-template-columns: repeat(5, 1fr);
      }
      .dots:after {
        content: '';
        position: absolute;
        width: 80%;
        height: 1px;
        top: 50%;
        left: 0;
        background-color: #fff;
      }
    }
    .texts {
      max-width: 1100px;
      background-color: red;
      margin: 0 auto;
      margin-left: 20%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;

      span {
      }
    }
  }
`;
export default Progress;
