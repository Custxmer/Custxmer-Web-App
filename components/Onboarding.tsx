import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/components/onboarding.module.css';

const Onboarding = ({
  num,
  url,
  text1,
  text2,
  next,
  showSkip,
}: {
  num: number;
  url: string;
  text1: string;
  text2: string;
  next: string;
  showSkip: boolean;
}) => {
  const router = useRouter();
  return (
    <div className={styles.innerDiv}>
      <h1 className={`${styles.heading} heading`}>{num} of 5</h1>
      <div>
        <Image
          className={styles.image}
          // src={"https://i.imgur.com/RCjkqvY.png"}
          src={url}
          alt="Onboarding screen"
          width={300}
          height={300}
        />
      </div>
      <p className={styles.intro}>
        {/* We are living in an ever-complicating world */}
        {text1}
      </p>
      <p className={styles.explanation}>
        {/*  */}
        {text2}
      </p>
      <div className={styles.buttonsContainer}>
        <button
          onClick={() => router.push(next)}
          className={`${styles.continue} button main-blue-shadow`}
        >
          CONTINUE
        </button>
        {showSkip && (
          <button
            onClick={() => router.push('onboarding5')}
            className={`${styles.skip} button`}
          >
            SKIP
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
