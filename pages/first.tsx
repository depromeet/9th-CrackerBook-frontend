import Head from "next/head";
import First from "../src/components/First";

export default function Component(): JSX.Element {
  return (
    <main>
      <Head>
        <title>First</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <First />
    </main>
  );
}
