import React from 'react';
import styled from 'styled-components';
const HumanFooter = () => {
  return (
    <Wrapper>
      <div className='line'></div>
      <span className='inqury'>
        For inquiries about our private passenger program, contact
        <span className='fade-white'> sales@spacex.com</span>
      </span>
      <button className='btn'>contact us</button>
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
  .fade-white {
    color: white;
  }
  .inqury {
    text-align: center;
    color: #a1a1a1;
    display: block;
    max-width: 25rem;
    margin: 0 auto;
    font-size: 0.875rem;
    line-height: 1.5;
  }
  .btn {
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;
export default HumanFooter;
