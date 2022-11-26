import React from 'react';
import Onboarding from '../components/Onboarding';

const Onboarding2 = () => {
  return (
    <main className="container2  blue-gradient white">
      <Onboarding
        num={2}
        url="https://i.imgur.com/Kuo7vah.png"
        text1="This world needs new approaches and solutions"
        text2="Technology purposefully designed to handle our service providers in a better and simpler way"
        next="onboarding3"
        showSkip={true}
      />
    </main>
  );
};

export default Onboarding2;
