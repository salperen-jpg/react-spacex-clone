import React from 'react';
import Banners from '../components/Banners';
import Counter from '../components/Counter';
import Draco from '../components/Draco';
import DragonBanner from '../components/DragonBanner';
import SectionWithText from '../components/SectionWithText';
import styled from 'styled-components';
const Dragon = () => {
  return (
    <Wrapper>
      <SectionWithText
        imgUrl={require('../assets/dragon.webp')}
        text='dragon'
        exp={'sending humans and cargo into space'}
      />
      <Counter dragon />
      <Banners imgUrl={require('../assets/dragon_humans.webp')}>
        <DragonBanner />
      </Banners>
      <div className='draco-container'>
        <Banners draco imgUrl={require('../assets/Draco.webp')}>
          <Draco />
        </Banners>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .draco-container {
    min-height: 100vh;
    padding: 1rem 0;
  }
  .draco {
    height: 65vh;
  }
  @media (min-width: 700px) {
    .draco {
      height: 80vh;
    }
  }
  @media (min-width: 1000px) {
    .draco {
      height: 100vh;
    }
  }
`;
export default Dragon;
