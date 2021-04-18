import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head>
          <meta property="custom" content="123123" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
