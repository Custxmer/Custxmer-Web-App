import React from 'react';
import Onboarding from '../components/Onboarding';

const Onboarding1 = () => {
  return (
    <main className="container2  blue-gradient white">
      <Onboarding
        num={3}
        url="https://i.imgur.com/LY5zXz4.png"
        text1="So we did something about it, and we made Custxmer"
        text2="A powerful assistant to a complicated world, inspired by and designed for our use"
        next="onboarding4"
        showSkip={true}
      />
    </main>
  );
};

export default Onboarding1;
