import React from 'react';
import SectionWithText from '../components/SectionWithText';

const FalconHeavy = () => {
  return (
    <div>
      <SectionWithText
        imgUrl={require('../assets/falcon-heavy.webp')}
        text='falcon heavy'
        exp={"the world's most powerful rocket"}
      />
    </div>
  );
};

export default FalconHeavy;
