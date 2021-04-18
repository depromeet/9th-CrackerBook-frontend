import Head from "next/head";
import Second from "../../src/components/tabs/Second";

export default function Component(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Second</title>
      </Head>
      <Second />
    </main>
  );
}
