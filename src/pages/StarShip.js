import React from 'react';
import { SectionWithButton } from '../components';
import StarShipText from '../components/StarShipText';
import Banners from '../components/Banners';
import DragonBanner from '../components/DragonBanner';
import Draco from '../components/Draco';
const StarShip = () => {
  return (
    <>
      <SectionWithButton
        img={require('../assets/start.webp')}
        recentLaunch='flight test'
        text='starship sn15'
        buttonText='rewatch'
      />
      <StarShipText />
      <Banners imgUrl={require('../assets/mars_landing.webp')}>
        <DragonBanner
          title='LANDING ON MARS'
          exp="Starship will enter Mars’ atmosphere at 7.5 kilometers per second and decelerate aerodynamically. The vehicle’s heat shield is designed to withstand multiple entries, but given that the vehicle is coming into Mars' atmosphere so hot, we still expect to see some ablation of the heat shield (similar to wear and tear on a brake pad). The engineering video below simulates the physics of Mars entry for Starship."
          buttonText='watch simulation'
        />
      </Banners>
      <Banners draco imgUrl={require('../assets/Raptor.webp')}>
        <Draco />
      </Banners>
    </>
  );
};

export default StarShip;
