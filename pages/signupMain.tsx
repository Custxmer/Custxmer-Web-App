import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/SignupMain.module.css';
import checkPasswordStrength from '@utils/passwordStrength';
import PasswordRequirements from '../components/modals/PasswordRequirements';

const signupMain: React.FC = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordStrength: 'Weak',
  });

  const emailIsValid = (email: string) =>
    !email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

  return (
    <main className="container2  blue-gradient white">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
        ></link>
      </Head>
      <div className={styles.innerDiv}>
        <h1 className={`heading white`}>Sign Up</h1>
        <button className={`button main-blue ${styles.with}`}>
          <i className="fab fa-google fa-3x"></i> Sign up with Goggle
        </button>
        <button className={`button main-blue ${styles.with}`}>
          <i className="fab fa-apple fa-2x"></i> <span>Sign up with Apple</span>
        </button>
        <h2>
          OR<i className="fab fa-circle-info"></i>
        </h2>
        {showPwdModal && (
          <PasswordRequirements setShowPwdModal={setShowPwdModal} />
        )}
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.form}
          action=""
        >
          <label className={styles.label} htmlFor="email">
            <p className={styles.password}>Email</p>
            <input
              onChange={(e) => {
                setInputs((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              value={inputs.email}
              required
              id="email"
              className="button email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <p>
              Email validity:{' '}
              {inputs.email && (
                <span
                  style={{
                    color: emailIsValid(inputs.email) ? '#ff4444' : '#77ff77',
                  }}
                >
                  {emailIsValid(inputs.email) ? 'Invalid' : 'Valid'}
                </span>
              )}
            </p>
          </label>
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
          <Link
            href={{
              pathname: '/emailVerification',
              query: { email: inputs.email }, // the data
            }}
          >
            <input
              style={{
                opacity:
                  inputs.passwordStrength === 'Weak' ||
                  emailIsValid(inputs.email)
                    ? 0.5
                    : 1,
                cursor:
                  inputs.passwordStrength === 'Weak' ||
                  emailIsValid(inputs.email)
                    ? ''
                    : 'pointer',
              }}
              type="submit"
              value="SIGN UP"
              className={`button main-blue ${styles.with}`}
              disabled={
                inputs.passwordStrength === 'Weak' || emailIsValid(inputs.email)
              }
            />
          </Link>
        </form>
        <p>
          By continuing you agree to <br />{' '}
          <span className={styles.policy}>
            <Link className="link" href="https://www.custxmer.com/terms">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Custxmer's Terms & Conditions
            </Link>
          </span>
          &nbsp;&&nbsp;
          <span className={styles.policy}>
            <Link className="link" href="https://www.custxmer.com/privacy">Privacy Policy</Link>
          </span>
        </p>
        <Link href="/login">
          <button className={`button main-blue transparent`}>
            ALREADY HAVE AN ACCOUNT?
          </button>
        </Link>
      </div>
    </main>
  );
};

export default signupMain;
