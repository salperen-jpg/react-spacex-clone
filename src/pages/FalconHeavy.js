import React from 'react';
import Counter from '../components/Counter';
import SectionWithText from '../components/SectionWithText';

const FalconHeavy = () => {
  return (
    <>
      <SectionWithText
        imgUrl={require('../assets/falcon-heavy.webp')}
        text='falcon heavy'
        exp={"the world's most powerful rocket"}
      />
      <Counter />
    </>
  );
};

export default FalconHeavy;
