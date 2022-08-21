import React from 'react';
import styled from 'styled-components';
const SectionWithButton = ({ img, recentLaunch, buttonText, text }) => {
  return (
    <Wrapper>
      <section
        className='page-100'
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className='section-center'>
          <div className='banner'>
            {recentLaunch && <h4>{recentLaunch}</h4>}
            <h2>{text}</h2>
            <button>{buttonText}</button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default SectionWithButton;

const Wrapper = styled.section`
  .page-100 {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  .section-center {
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 10rem;
  }
  .banner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    h4,
    h2 {
      text-transform: uppercase;
    }
    h2 {
      max-width: 30rem;
      animation: fadeUp 0.6s ease-in-out 0.2s;
    }
    h4 {
      font-weight: 400;
      animation: fadeUp 0.6s ease-in-out;
    }
  }
  button {
    display: inline-block;
    padding: 1.25rem 2rem;
    background-color: transparent;
    color: var(--clr-white);
    border: 2px solid var(--clr-white);
    font-size: 0.775rem;
    text-transform: uppercase;
    font-weight: 800;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    z-index: 2;
    transition: var(--transition);
    animation: fadeUp 0.6s ease-in-out 0.4s;
  }
  button:hover {
    color: var(--clr-black);
  }
  button::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateY(100%);
    background-color: var(--clr-white);
    transition: var(--transition);
    z-index: -1;
  }
  button:hover::after {
    transform: translateY(0);
  }
  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
