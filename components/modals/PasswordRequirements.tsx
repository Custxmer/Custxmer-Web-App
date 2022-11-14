import React from 'react';
import styles from '../../styles/components/PasswordRequirements.module.css';

interface Props {
  setShowPwdModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordRequirements = ({ setShowPwdModal }: Props) => {
  return (
    <div
      onClick={() => {
        setShowPwdModal(false);
      }}
      className={styles.parent}
    >
      <div onClick={(e) => e.stopPropagation()} className={`${styles.innerDiv} white-shadow2`}>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => setShowPwdModal(false)}
          >
            &times;
          </button>
        </div>
        <h3 className={`main-blue ${styles.mainBlue}`}>
          Password Requirements
        </h3>
        <div>
          <p className={styles.darkGreyText}>Stronger passwords are safer.</p>
          <p className={styles.firstP}>Password minimum requirements:</p>
        </div>
        <div className={styles.req}>
          <p><i className="fa-sharp fas fa-keyboard"></i> 8 characters long</p>
          <p><i className="fas fa-font"></i>&nbsp; 1 Uppercase letter</p>
          <p><i className="fas fa-hashtag"></i> &nbsp;1 Number</p>
        </div>
        <p>A strong password would include at lease one special character.</p>
      </div>
    </div>
  );
};

export default PasswordRequirements;
