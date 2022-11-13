import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import styles from '../styles/Signup.module.css';

const Signup: React.FC = () => {
  return (
    <main className={`container2 blue-gradient white`}>
      <div>
        <h1 className={`heading white`}>Sign Up</h1>

        <Image
          width={400}
          height={100}
          className={styles.logo}
          src="/world_map.png"
          alt="Logo"
        />
        <h2>First Thing First!</h2>
        <p>
          Currently we are operating in:
          <br />- Ireland, and
          <br />- The US
        </p>
        <Link className={styles.link} href="./signupMain">
          <button className={`button main-blue ${styles.okay}`}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            THAT'S OKAY
          </button>
        </Link>
        <Link href="./proposeACountry">
          <div className={styles.noCountry}>
            <div className={styles.innerDiv}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h4 className={styles.letYouKnow}>DON'T SEE YOUR COUNTRY?</h4>
              <p>
                Tap here to let us know.
                <br />
                We will let you know when we add it.
              </p>
            </div>
          </div>
        </Link>
        <button className={`button transparent`}>ALREADY HAVE AN ACCOUNT?</button>
      </div>
    </main>
  );
};

export default Signup;
