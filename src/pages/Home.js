import React from 'react';
import { SectionWithButton } from '../components';
const Home = () => {
  return (
    <>
      <SectionWithButton
        img='https://www.spacex.com/static/images/backgrounds-2022/sl3-3/post-launch/Homepage_Desktop.webp'
        recentLaunch='recent launch'
        text='starlink mission'
        buttonText='rewatch'
      />
      <SectionWithButton
        img='https://www.spacex.com/static/images/backgrounds-2022/kplo/post-launch/Homepage_Desktop.webp'
        text='kplo mission'
        recentLaunch='recent launch'
        buttonText='rewatch'
      />
      <SectionWithButton
        img='https://www.spacex.com/static/images/backgrounds-2022/starship-update/S20_Chopstick_Stack_Desktop.webp'
        text='starship update'
        buttonText='learn more'
      />
      <SectionWithButton
        img='https://www.spacex.com/static/images/backgrounds-2021/hls-resized-2.webp'
        text='Starship to Land NASA Astronauts on the Moon'
        buttonText='learn more'
      />
    </>
  );
};

export default Home;
