import Head from "next/head";
import ThirdComponent from "../../src/components/tabs/Third";

export default function Third(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Third</title>
      </Head>
      <ThirdComponent />
    </main>
  );
}
