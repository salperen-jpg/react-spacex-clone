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
        <DragonBanner
          title='taking humans to space'
          exp=' In 2020, SpaceX returned America’s ability to fly NASA astronauts to
          and from the International Space Station on American vehicles for the
          first time since 2011. In addition to flying astronauts to space for
          NASA, SpaceX’s Dragon spacecraft can also carry commercial astronauts
          to Earth orbit, the ISS or beyond.'
          buttonText='learn more'
        />
      </Banners>
      <div className='draco-container'>
        <Banners draco imgUrl={require('../assets/Draco.webp')}>
          <Draco
            title='draco'
            exp='The Dragon spacecraft is equipped with 16 Draco thrusters used to
            orient the spacecraft during the mission, including apogee/perigee
            maneuvers, orbit adjustment and attitude control. Each Draco
            thruster is capable of generating 90 pounds of force in the vacuum
            of space.'
            underline
          />
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
