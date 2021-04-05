import Head from "next/head";
import styled from "styled-components";
import Main from "../src/components/Main";
import Footer from "../src/components/common/Footer";

export default function Home() {
  const MainContainer = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.media.desktop`
        background-color: #555555;
    `}
    ${({ theme }) => theme.media.tablet`
        background-color: #777777;
    `}
      ${({ theme }) => theme.media.mobile`
        background-color: #999999;
    `}
  `;

  return (
    <MainContainer>
      <Head>
        <title>Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </MainContainer>
  );
}
