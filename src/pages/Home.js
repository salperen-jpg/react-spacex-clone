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
    </>
  );
};

export default Home;
