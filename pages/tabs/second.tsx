import Head from "next/head";
import SecondComponent from "../../src/components/tabs/Second";

export default function Second(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Second</title>
      </Head>
      <SecondComponent />
    </main>
  );
}
