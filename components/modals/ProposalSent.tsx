import React, { useEffect, useRef } from 'react';
import styles from '../../styles/components/ProposalSent.module.css';
import { useRouter } from 'next/router';
import lottie from 'lottie-web';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProposalSent = ({ setShowModal }: Props) => {
  const router = useRouter();
  const animationContainer = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animationContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../utils/balancingFlag.json'),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div
      onClick={() => {
        setShowModal(false);
        router.push('/');
      }}
      className="modal"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.innerDiv} white-shadow2 second-blue`}
      >
        <span>
          <strong
            onClick={() => {
              setShowModal(false);
              router.push('/');
            }}
          >
            &times;
          </strong>
        </span>
        <div className={styles.animationContainer}>
          <div className={styles.animation} ref={animationContainer}></div>
        </div>
        <h4>Proposal Sent!</h4>
        <p>
          Thanks for proposing.
          <br />
          The more people ask for it, the sooner we will add it.
          <br />
          We'll let you know when we do.
        </p>
      </div>
    </div>
  );
};

export default ProposalSent;
