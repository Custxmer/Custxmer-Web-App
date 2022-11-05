import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={`container blue-gradient`}>
      <Head>
        <title>Custxmer App</title>
        <meta
          name="description"
          content="A web application that helps you contact your service providers with ease."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
        ></link>
      </Head>

      <main className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Image
            width={400}
            height={100}
            className={styles.logo}
            src="/logo_slogan.png"
            alt="Logo"
            priority={true}
          />
        </div>
        <div className={styles.loginSignup}>
          <Link href="/signup">
            <button
              className={`second-blue button white white-shadow ${styles.signup}`}
            >
              SIGN UP
            </button>
          </Link>
          <button className={`main-blue button main-blue-shadow`}>
            LOG IN
          </button>
        </div>
      </main>
    </div>
  );
}
