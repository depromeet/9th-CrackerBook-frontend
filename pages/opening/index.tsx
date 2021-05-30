import Head from "next/head";
import OpeningComponent from "src/components/opening";

export default function Opening(): JSX.Element {
  return (
    <>
      <Head>
        <title>스터디 개설하기</title>
      </Head>
      <OpeningComponent />
    </>
  );
}
