import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/ProposalSent.module.css';
import styles2 from '../../styles/components/help.module.css';
import lottie from 'lottie-web';

interface Props {
  setEmailVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailVerified = ({ setEmailVerified }: Props) => {
  const animationContainer = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animationContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../utils/emailVerified.json'),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div
      onClick={() => {
        setEmailVerified(false);
      }}
      className="modal"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.innerDiv} second-blue white-shadow2`}
      >
        <span>
          <strong
            onClick={() => {
              setEmailVerified(false);
            }}
          >
            &times;
          </strong>
        </span>
        <div className={styles.animationContainer}>
          <div className={styles.animation} ref={animationContainer}></div>
        </div>
        <h4>Email Verified!</h4>
          <button className={`button second-blue-text ${styles2.marginAuto}`}>
            <i className={`far fa-thumbs-up ${styles.envelop}`}></i>
            &nbsp;&nbsp;CONTINUE
          </button>
      </div>
    </div>
  );
};

export default EmailVerified;
