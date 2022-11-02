import React from "react";
import Link from "next/link";
import styles from "../styles/SignupMain.module.css";

const signupMain = () => {
  return (
    <main className="container  blue-gradient white">
      <div className={styles.innerDiv}>
        <h1 className={`heading white`}>Sign Up</h1>
        <button className={`button main-blue ${styles.with}`}>
          Sign up with Goggle
        </button>
        <button className={`button main-blue ${styles.with}`}>
          Sign up with Apple
        </button>
        <h2>OR</h2>
        <label htmlFor="password">
          <span>password *</span>
          <br />
          <input className="button" type="password" />
        </label>
        <p className={styles.passStrength}>Password Strength:</p>

        <button className={`button main-blue ${styles.with}`}>SIGN UP</button>
        <p>
          By continuing you agree to <br />{" "}
          <span className={styles.policy}>
            <Link href="https://www.custxmer.com/terms">
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
