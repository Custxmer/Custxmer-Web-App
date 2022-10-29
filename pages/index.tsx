import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={`${styles.container} blue-gradient`}>
      <Head>
        <title>Custxmer App</title>
        <meta
          name="description"
          content="A web application that helps you contact your service providers with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.innerContainer}>
          <div className={styles.logoContainer}>
            <Image
              width={400}
              height={100}
              className={styles.logo}
              src="/logo_slogan.png"
              alt="Logo"
            />
          </div>
          <div className={styles.loginSignup}>
            <button
              className={`second-blue ${styles.button} white white-shadow`}
            >
              SIGN UP
            </button>
            <button
              className={`main-blue ${styles.button} main-blue-shadow`}
            >
              LOG IN
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
