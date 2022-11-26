import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import lottie from 'lottie-web';
import styles from '../styles/SignupMain.module.css';
import styles2 from '../styles/reset.module.css';
import checkPasswordStrength from '@utils/passwordStrength';
import PasswordRequirements from '../components/modals/PasswordRequirements';

const ResetPassword: React.FC = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [inputs, setInputs] = useState({
    password: '',
    passwordStrength: 'Weak',
  });

  const animationContainer = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animationContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('/utils/reset.json'),
    });
    return () => instance.destroy();
  }, []);

  return (
    <main className="container2  blue-gradient white">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
        ></link>
      </Head>
      <div className={styles.innerDiv}>
        <h1 className={`heading white ${styles2.heading}`}>Password Reset</h1>
        <div
          className={`${styles.animation} ${styles2.animation}`}
          ref={animationContainer}
        ></div>
        {showPwdModal && (
          <PasswordRequirements setShowPwdModal={setShowPwdModal} />
        )}
        <form
          onSubmit={(e) => e.preventDefault()}
          className={`${styles.form} ${styles2.form}`}
          action=""
        >
          <label className={styles.label} htmlFor="password">
            <br />
            <span className={styles.password}>
              Password{' '}
              <sup onClick={() => setShowPwdModal(true)}>
                <Image
                  className={styles.pointer}
                  width={15}
                  height={15}
                  src="/info.png"
                  alt="info"
                />
              </sup>
            </span>
            <div className={styles.pswContainer}>
              <input
                onChange={(e) => {
                  setInputs((prev) => ({
                    ...prev,
                    password: e.target.value,
                    passwordStrength: checkPasswordStrength(e.target.value),
                  }));
                }}
                value={inputs.password}
                required
                id="password"
                className={styles.input}
                type={showPwd ? 'text' : 'password'}
              />
              {showPwd ? (
                <i
                  onClick={() => setShowPwd((prev) => !prev)}
                  className="fas fa-eye-slash"
                ></i>
              ) : (
                <i
                  onClick={() => setShowPwd((prev) => !prev)}
                  className="far fa-eye"
                ></i>
              )}
            </div>
          </label>
          <p className={styles.passStrength}>
            Password Strength:{' '}
            {inputs.password && (
              <span
                style={{
                  color: `${
                    inputs.passwordStrength === 'Weak'
                      ? '#ff4444'
                      : inputs.passwordStrength === 'Medium'
                      ? 'orange'
                      : '#77ff77'
                  }`,
                }}
              >
                {inputs.passwordStrength}
              </span>
            )}
          </p>

          {/* <div style={{ opacity: 1}}> */}
          <input
            type="submit"
            value="RESET PASSWORD"
            className={`button main-blue ${styles.with}`}
            disabled={inputs.passwordStrength === 'Weak'}
          />
        </form>
      </div>
    </main>
  );
};

export default ResetPassword;
