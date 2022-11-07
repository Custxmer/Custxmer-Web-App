import React from 'react';
import styles from '../styles/components/PasswordRequirements.module.css';

interface Props {
  setShowPwdModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordRequirements = ({ setShowPwdModal }: Props) => {
  return (
    <div
      onClick={(e) => {
        setShowPwdModal(false);
      }}
      className={styles.parent}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.innerDiv}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => setShowPwdModal(false)}>&times;</button>
        </div>
        <div>
          <h1 className={`main-blue ${styles.mainBlue}`}>Password Requirements</h1>
          <h4 className={styles.darkGreyText}>Stronger passwords are safer.</h4>
          <p className={styles.firstP}>Password minimum requirements:</p>
          <p>- 8 characters long</p>
          <p>- 1 Uppercase letter</p>
          <p>- 1 Number</p>
          <p>A strong password would include at lease one special character.</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordRequirements;
