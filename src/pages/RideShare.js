import React from 'react';
import { RideShareFeatures } from '../components';
import Banners from '../components/Banners';
import Progress from '../components/Progress';
import RideShareBanner from '../components/RideShareBanner';

const RideShare = () => {
  return (
    <>
      <Banners imgUrl={require('../assets/rideshare0.webp')}>
        {/* coming up */}
      </Banners>
      <RideShareFeatures />

      <Banners imgUrl={require('../assets/rideshare.webp')}>
        <RideShareBanner
          title='RESERVE YOUR RIDE ONLINE'
          exp={`Find all the information you need to make a reservation online, everything from port size to technical specifications to licensing information. Once your reservation request is approved, SpaceX will provide you with a welcome package outlining next steps for launch
Payloads are received at the launch site around L-30 and processed in a SpaceX facility. More details can be found in the Rideshare User’s Guide.`}
          buttonText="view user's guide"
        />
        <Progress />
      </Banners>
    </>
  );
};

export default RideShare;
