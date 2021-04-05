import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  const [text, setText] = useState<string>("GIT FLOW TEST");

  return (
    <div className={styles.container}>
      <Head>
        <title>타입스크립트</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{text}</h1>

        <p className={styles.description}>
          feature/SYL-001 <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h3>Main &rarr;</h3>
              <p>Main 페이지로 이동</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
