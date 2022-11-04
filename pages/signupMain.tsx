import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/SignupMain.module.css";

const signupMain = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  return (
    <main className="container  blue-gradient white">
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
        <h2>OR</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.form}
          action=""
        >
          <label className={styles.label} htmlFor="email">
            <p className={styles.password}>
              Email <span className="star">*</span>
            </p>
            <input
              required
              id="email"
              className="button email"
              type="email"
            />
          </label>
          <label className={styles.label} htmlFor="password">
            <br />
            <span className={styles.password}>
              Password <span className="star">*</span>
            </span>
            <div className={styles.pswContainer}>
              <input
                required
                id="password"
                className={styles.input}
                type={showPwd ? "text" : "password"}
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
          <p className={styles.passStrength}>Password Strength:</p>

          <input
            type="submit"
            value="SIGN UP"
            className={`button main-blue ${styles.with}`}
          />
        </form>
        <p>
          By continuing you agree to <br />{" "}
          <span className={styles.policy}>
            <Link href="https://www.custxmer.com/terms">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Custxmer's Terms & Conditions
            </Link>
          </span>
          &nbsp;&&nbsp;
          <span className={styles.policy}>
            <Link href="https://www.custxmer.com/privacy">Privacy Policy</Link>
          </span>
        </p>
        <button className={`button main-blue already`}>
          ALREADY HAVE AN ACCOUNT?
        </button>
      </div>
    </main>
  );
};

export default signupMain;
