import React from 'react';
import Onboarding from '../components/Onboarding';

const Onboarding1 = () => {
  return (
    <main className="container2  blue-gradient white">
      <Onboarding
        num={5}
        url="/logo_slogan.png"
        text1="Welcome to easier and simpler life"
        text2="Welcome to Custxmer"
        next="onboarding1"
        showSkip={false}
      />
    </main>
  );
};

export default Onboarding1;
