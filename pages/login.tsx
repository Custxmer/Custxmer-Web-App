import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/SignupMain.module.css';
import styles2 from '../styles/Login.module.css';
import PasswordRequirements from '../components/modals/PasswordRequirements';

const Login: React.FC = () => {
  const router = useRouter();
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [emailPwdValidity, setEmailPwdValidity] = useState({
    email: false,
    password: false,
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
        <h1 className={`heading white`}>Log in</h1>
        <button className={`button main-blue ${styles.with}`}>
          <i className="fab fa-google fa-3x"></i>Log in with Goggle
        </button>
        <button className={`button main-blue ${styles.with}`}>
          <i className="fab fa-apple fa-2x"></i> <span>Log in with Apple</span>
        </button>
        <h2>
          OR<i className="fab fa-circle-info"></i>
        </h2>
        {showPwdModal && (
          <PasswordRequirements setShowPwdModal={setShowPwdModal} />
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={styles.form}
          action=""
        >
          <label className={styles.label} htmlFor="email">
            <p className={styles.password}>Email</p>
            <input
              onChange={(e) => {
                setEmailPwdValidity((prev) => ({
                  ...prev,
                  email: !emailIsValid(e.target.value),
                }));
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
                  setEmailPwdValidity((prev) => ({
                    ...prev,
                    password: !!e.target.value,
                  }));
                  setInputs((prev) => ({
                    ...prev,
                    password: e.target.value,
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
          <input
            onClick={() => {
              if (emailPwdValidity.email && emailPwdValidity.password) {
                router.push('/onboarding1');
              }
            }}
            type="submit"
            value="LOG IN"
            className={`button main-blue ${styles.with} ${styles2.loginButton}`}
          />
        </form>
        <Link className="link" href="/forgotPassword">
          <p className={styles2.forgot}>FORGOT PASSWORD?</p>
        </Link>
        <Link href="/signupMain">
          {' '}
          <button className={`button main-blue transparent`}>SIGN UP</button>
        </Link>
      </div>
    </main>
  );
};

export default Login;
