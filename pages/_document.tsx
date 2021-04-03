import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta property="custom" content="123123" />
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}
