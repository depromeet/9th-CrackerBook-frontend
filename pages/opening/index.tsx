import IndexComponent from "../../src/components/opening/IndexComponent";
import Head from "next/head";

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>스터디 개설하기</title>
      </Head>
      <IndexComponent />
    </>
  );
}
