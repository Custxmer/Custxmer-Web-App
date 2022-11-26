import React from 'react';
import Onboarding from '../components/Onboarding';

const Onboarding1 = () => {
  return (
    <main className="container2  blue-gradient white">
      <Onboarding
        num={1}
        url="https://i.imgur.com/RCjkqvY.png"
        text1="We are living in an ever-complicating world"
        text2="The number of service providers and amount of subscriptions we have are
        constantly increasing."
        next="onboarding2"
        showSkip={true}
      />
    </main>
  );
};

export default Onboarding1;
