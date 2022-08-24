import React, { useEffect } from 'react';
import styled from 'styled-components';

const CounterComponent = ({ text, number, timeout }) => {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (counter < number) {
        setCounter((prevState) => {
          return prevState + 1;
        });
      }
    }, timeout);
  }, [counter]);
  return (
    <Wrapper>
      <span>{counter}</span>
      <span>{text}</span>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:nth-child(1) {
    font-size: 3rem;
  }
  span:nth-child(2) {
    display: block;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  @media (min-width: 600px) {
    span:nth-child(1) {
      font-size: 8rem;
    }
    span:nth-child(2) {
      display: block;
      font-size: 1rem;
    }
  }

  @media (min-width: 1000px) {
    span:nth-child(1) {
      font-size: 8rem;
      padding: 0;
    }
    span:nth-child(2) {
      display: block;
      font-size: 1.5rem;

      padding: 0;
    }
  }
`;

export default CounterComponent;
