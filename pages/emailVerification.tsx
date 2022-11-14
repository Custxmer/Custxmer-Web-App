import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Help from '../components/modals/Help';
import EmailVerified from '../components/modals/EmailVerified';
import styles from '../styles/EmailVerification.module.css';
import lottie from 'lottie-web';

const emailVerification: React.FC = () => {
  const router = useRouter();
  const [help, setHelp] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const data = router.query;
  console.log('data', data);
  const emailContainer = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: emailContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('/utils/emailVerificationAnimation.json'),
    });
    return () => instance.destroy();
  }, []);

  return (
    <main className={`${styles.main} blue-gradient`}>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
        ></link>
      </Head>
      <div className={styles.innerDiv}>
        <h1>Email Verification</h1>
        <div className={styles.animation} ref={emailContainer}></div>
        <div>
          <h3>Check your inbox!</h3>
          <p className={styles.just}>And your spam folder, just in case 🤷</p>
        </div>
        <p>We've just sent you a verification code to {data.email}.</p>
        <div className={styles.buttons}>
          <input
            className="input"
            type="text"
            placeholder="Enter your verification code..."
          />
          <button onClick={() => setEmailVerified(true)} className="input second-blue-text">
            <i className="fa fa-unlock"></i>&nbsp;VERIFY!
          </button>
          <button className="button transparent">
            <i className="white fas fa-paper-plane"></i>&nbsp;&nbsp;RESEND
            VERIFICATION EMAIL!
          </button>
        </div>
      </div>
      <button onClick={() => setHelp(true)} className={styles.helpButton}>
        <i className="fas fa-question"></i>
      </button>
      {help && <Help setHelp={setHelp} />}
      {emailVerified && <EmailVerified setEmailVerified={setEmailVerified} />}
    </main>
  );
};

export default emailVerification;
