import React from 'react';
import styled from 'styled-components';
import CounterComponent from './CounterComponent';
const Counter = () => {
  return (
    <Wrapper>
      <div className='counter-center'>
        <CounterComponent text='total launches' number={3} timeout={400} />
        <CounterComponent text='total landings' number={7} timeout={800} />
        <CounterComponent text='total reflights' number={4} timeout={900} />
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
