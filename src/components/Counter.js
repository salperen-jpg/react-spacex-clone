import React from 'react';
import styled from 'styled-components';
import CounterComponent from './CounterComponent';
const Counter = ({ dragon }) => {
  if (dragon) {
    return (
      <Wrapper>
        <div className='counter-center'>
          <CounterComponent text='total launches' number={35} timeout={60} />
          <CounterComponent text='visits to the iss' number={32} timeout={80} />
          <CounterComponent text='reflown missions' number={15} timeout={100} />
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='counter-center'>
        <CounterComponent text='total launches' number={3} timeout={400} />
        <CounterComponent text='total landings' number={7} timeout={300} />
        <CounterComponent text='total reflights' number={4} timeout={500} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  .counter-center {
    width: min(90vw, 1400px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export default Counter;
