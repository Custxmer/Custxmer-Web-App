import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/SignupMain.module.css";

const signupMain = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordStrength: "Weak",
  });
  const checkPasswordStrength = (input: string) => {
    const isCapital = (capital: string) =>
      capital.charCodeAt(0) > 64 && capital.charCodeAt(0) < 91;

    const isSmall = (small: string) =>
      small.charCodeAt(0) > 96 && small.charCodeAt(0) < 123;

    const isNumber = (number: string) =>
      number.charCodeAt(0) > 47 && number.charCodeAt(0) < 58;

    if (input.length < 8) return "Weak";
    if (
      input.length >= 8 &&
      input.split("").some((el) => isCapital(el)) &&
      input.split("").some((el) => isSmall(el)) &&
      input.split("").some((el) => isNumber(el)) &&
      input
        .split("")
        .some((el) => !isSmall(el) && !isCapital(el) && !isNumber(el))
    )
      return "Strong";
    if (
      input.length >= 8 &&
      input.split("").some((el) => isSmall(el)) &&
      input.split("").some((el) => isCapital(el)) &&
      input.split("").some((el) => isNumber(el))
    )
      return "Medium";
    return "Weak";
  };

  const emailIsValid = (email: string) =>
    !email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

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
          </label>
          <label className={styles.label} htmlFor="password">
            <br />
            <span className={styles.password}>
              Password <span className="star">*</span>
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
          <p className={styles.passStrength}>
            Password Strength:{" "}
            <span
              style={{
                color: `${
                  inputs.passwordStrength === "Weak"
                    ? "red"
                    : inputs.passwordStrength === "Medium"
                    ? "orange"
                    : "#77ff77"
                }`,
                fontWeight: "bolder",
                fontSize: "1.2rem",
              }}
            >
              {inputs.passwordStrength}
            </span>
          </p>

          {/* <div style={{ opacity: 1}}> */}
          <input
            style={{
              opacity:
                (inputs.passwordStrength === "Weak" || emailIsValid(inputs.email))
                  ? 0.5
                  : 1,
                  cursor: (inputs.passwordStrength === "Weak" || emailIsValid(inputs.email))
                  ? ''
                  : 'pointer',
            }}
            type="submit"
            value="SIGN UP"
            className={`button main-blue ${styles.with}`}
            disabled={
              inputs.passwordStrength === "Weak" || emailIsValid(inputs.email)
            }
          />
          {/* </div> */}
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
