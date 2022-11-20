import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/ProposalSent.module.css';
import styles2 from '../../styles/components/help.module.css';
import lottie from 'lottie-web';

interface Props {
  setHelp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Help = ({ setHelp }: Props) => {
  const animationContainer = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animationContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../utils/help.json'),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div
      onClick={() => {
        setHelp(false);
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
              setHelp(false);
            }}
          >
            &times;
          </strong>
        </span>
        <div className={styles.animationContainer}>
          <div className={styles.animation} ref={animationContainer}></div>
        </div>
        <h4>We'll be happy to help</h4>
        <p>Send us an email and we'll get back to you within 24 hours</p>
        <Link href="mailto:support@custxmer.com">
          <button className={`button second-blue-text ${styles2.marginAuto}`}>
            <i className={`far fa-envelope ${styles.envelop}`}></i>
            &nbsp;&nbsp;SUPPORT@CUSTXMER.COM
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Help;
