import React from 'react';
import { SectionWithButton } from '../components';
import StarShipText from '../components/StarShipText';

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
    </>
  );
};

export default StarShip;
