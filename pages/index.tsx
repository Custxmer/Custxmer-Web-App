import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custxmer App</title>
        <meta
          name="description"
          content="A web application that helps you contact your service providers with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Custxmer!</h1>
      </main>

      <footer className={styles.footer}>
        <p>
          <span>{new Date().getFullYear()}</span> by Custxmer Inc. | Terms &
          Conditions - Privacy Policy
        </p>
      </footer>
    </div>
  );
}
