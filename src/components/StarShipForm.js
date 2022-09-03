import React from 'react';
import styled from 'styled-components';
const StarShipForm = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='line'></div>
        <button className='btn'>download user's guide</button>
        <select name='select' id='select'>
          <option value='presentation'>presentation</option>
          <option value='2017 Iac Transcript'>2017 Iac Transcript</option>
          <option value='2017 Iac Presentation'>2017 Iac Presentation</option>
          <option value='2016 Iac Presentation'>2017 Iac Presentation</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  .line {
    height: 10rem;
    width: 1px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  button {
    display: block;
    margin: 0 auto;
    padding: 1.25rem 2rem;
  }
  select {
    display: block;
    width: 90vw;
    max-width: 17rem;
    margin: 0 auto;
    margin-top: 3rem;
    height: 4rem;
    background-color: #1a1a1a;
    outline: none;
    border: transparent;
    padding: 0 3rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
  }
  option {
    display: block;
    text-transform: uppercase;
    text-align: center;
  }
`;

export default StarShipForm;
