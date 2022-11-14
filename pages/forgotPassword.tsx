import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from '../styles/ForgotPassword.module.css';
import lottie from 'lottie-web';

const ForgotPassword = () => {
  const route = useRouter();
  const [emailCheck, setEmailCheck] = useState({
    value: '',
    exists: false,
    isValid: false,
  });
  const animationContainer = useRef(null);

  console.log('email=>', emailCheck);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animationContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../utils/forgotPassword.json'),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div className={`${styles.parent} blue-gradient`}>
      <div className={styles.innerDiv}>
        <h1>Password Reset</h1>
        <div className={styles.animationContainer}>
          <div ref={animationContainer}></div>
        </div>
        <p>Enter your email, and we'll send you a new password</p>
        <div className={styles.inputBox}>
          <span>Email</span>
          <br />
          <input
            onChange={(e) => {
              setEmailCheck((prev) => ({
                ...prev,
                value: e.target.value,
                isValid: !!e.target.value.match(
                  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                ),
              }));
            }}
            value={emailCheck.value}
            className={`input`}
            type="email"
          />
        </div>

        <div className={styles.buttonsContainer}>
          <button
            onClick={() => route.push('/login')}
            className={`input ${styles.button} second-blue-text transparent`}
          >
            CANCEL
          </button>
          {emailCheck.isValid && (
            <button
              onClick={() => route.push('/emailVerification')}
              className={`input ${styles.button} second-blue-text`}
            >
              CONTINUE
            </button>
          )}
        </div>

        <br />
        <span className={styles.buttonAppear}>
          <Image
            className={styles.pointer}
            width={15}
            height={15}
            src="/info.png"
            alt="info"
          />
          The button to continue is presented if the email entered is from an
          existing user.
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
