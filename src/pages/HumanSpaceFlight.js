import React from 'react';
import styled from 'styled-components';
import SectionWithText from '../components/SectionWithText';
import Banners from '../components/Banners';
import SpaceFlightBanner from '../components/SpaceFlightBanner';

const HumanSpaceFlight = () => {
  return (
    <Wrapper>
      <SectionWithText
        imgUrl={require('../assets/human_spaceflight.webp')}
        text='human spaceflight'
        exp={'making life multiplanetary '}
        className='findout'
      />
      <Banners imgUrl='https://www.spacex.com/static/images/backgrounds/human_spaceflight_earth.jpg'>
        <SpaceFlightBanner
          positionText='earth location'
          title='earth orbit'
          exp='experience the blue planet from over 300km up'
        />
      </Banners>
      <Banners imgUrl='https://www.spacex.com/static/images/backgrounds/human_spaceflight_iss.jpg'>
        <SpaceFlightBanner
          positionText='iss location'
          title='space station'
          exp='transporting humans to the orbiting laboratory in the sky'
        />
      </Banners>
      <Banners imgUrl='	https://www.spacex.com/static/images/backgrounds/human_spaceflight_moon.jpg'>
        <SpaceFlightBanner
          positionText='moon location'
          title='moon'
          exp='returning humans to our lunar neighbor'
        />
      </Banners>
      <Banners imgUrl='https://www.spacex.com/static/images/backgrounds/human_spaceflight_mars.jpg'>
        <SpaceFlightBanner
          positionText='mars location'
          title='mars & beyond'
          exp='the road to making humanity multiplanetary'
        />
      </Banners>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .location {
    position: absolute;
  }
  /* EARTH */
  .earth {
    bottom: 20rem;
    left: 5vw;
  }
  @media (min-width: 600px) {
    .earth {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin-left: 6rem;
    }
  }
  @media (min-width: 800px) {
    .earth {
      margin-left: 20rem;
      margin-bottom: -3rem;
    }
    .earth h3 {
      font-size: 5rem;
    }
  }
  /* ISS */
  .iss {
    top: -5rem;
    right: 3vw;
  }
  @media (min-width: 600px) {
    .iss {
      top: 60%;
      left: 5vw;
    }
  }
  @media (min-width: 600px) {
    .iss {
      top: 50%;
      left: 15vw;
    }
  }
  /* MOON */
  .moon {
    top: 0;
    left: 5vw;
  }
  @media (min-width: 600px) {
    .moon {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin-left: 6rem;
    }
  }
  @media (min-width: 800px) {
    .moon {
      margin-left: 17rem;
    }
    .moon h3 {
      font-size: 5rem;
    }
  }
  /* MARS */
  .mars {
    top: -5rem;
    right: 0;
    margin-left: 12rem;
  }
  @media (min-width: 600px) {
    .mars {
      left: 5vw;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 6rem;
    }
  }
  @media (min-width: 600px) {
    .mars {
      margin-left: 13rem;
    }
  }
`;
export default HumanSpaceFlight;
