import React from 'react';
import styled from 'styled-components';
import { socialLinks } from '../utils';
const Footer = () => {
  return (
    <Wrapper>
      <span>spacex &copy; 2022</span>
      <ul>
        {socialLinks.map((link) => {
          const { id, text } = link;
          return <li key={id}>{text}</li>;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem 0;
  span {
    display: block;
    text-align: center;
    color: #bbb;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }
  ul {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    li {
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    ul {
      margin: 0;
    }
    span {
      margin: 0;
    }
  }
`;

export default Footer;
