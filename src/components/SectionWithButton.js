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
            <button className='btn'>{buttonText}</button>
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
