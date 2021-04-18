import Head from "next/head";
import Second from "../src/components/Second";

export default function Component() {
  return (
    <main>
      <Head>
        <title>Second</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Second />
    </main>
  );
}
