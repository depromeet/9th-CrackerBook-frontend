import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import styles from "../src/styles/Home.module.css";
import Footer from "../src/components/common/Footer";

export default function Home() {
  const [text, setText] = useState<string>("TEST PAGE");
  const MainContainer = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.media.desktop`
        background-color: red;
      `}
    ${({ theme }) => theme.media.tablet`
        background-color: black;
      `}
      ${({ theme }) => theme.media.mobile`
        background-color: blue;
      `}
  `;

  return (
    <MainContainer>
      <Head>
        <title>HelloWorld</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{text}</h1>

        <p className={styles.description}>
          feature/SYL-001 <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/sub">
            <a className={styles.card}>
              <h3>Sub &rarr;</h3>
              <p>서브 페이지로 이동</p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </MainContainer>
  );
}
