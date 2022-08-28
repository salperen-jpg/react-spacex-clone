import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styled from 'styled-components';
const ScrollDown = () => {
  return (
    <Wrapper>
      <BsChevronDown className='scroll-down-icon'></BsChevronDown>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .scroll-down-icon {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 80;
    font-size: 2rem;
    transform: translateX(-50%);
    animation: down 5s infinite;

    @keyframes down {
      0%,
      20%,
      50%,
      80%,
      100% {
        opacity: 0;
        transform: translateY(-20px);
      }

      40% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
export default ScrollDown;
