import React from "react";
import Image from "next/image";

import Link from "next/link";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  return (
    <main className={`container blue-gradient white`}>
      
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
        <Link href="./signupMain">
          <button className={`button main-blue ${styles.okay}`}>
            THAT'S OKAY
          </button>
        </Link>
        <div className={styles.noCountry}>
          <div className={styles.innerDiv}>
            <h4 className={styles.letYouKnow}>DON'T SEE YOUR COUNTRY?</h4>
            <p>
              Tap here to let us know.
              <br />
              We will let you know when we add it.
            </p>
          </div>
        </div>
        <button className={`button already`}>ALREADY HAVE AN ACCOUNT?</button>
      </div>
    </main>
  );
};

export default Signup;
