import React from 'react';
import Onboarding from '../components/Onboarding';

const Onboarding1 = () => {
  return (
    <main className="container2  blue-gradient white">
      <Onboarding
        num={4}
        url="https://i.imgur.com/Ig1F1Y4.png"
        text1="Have your service providers at your fingertips"
        text2="You're in control! All their contact points, subscriptions and payment info at your fingertips"
        next="onboarding5"
        showSkip={false}
      />
    </main>
  );
};

export default Onboarding1;
