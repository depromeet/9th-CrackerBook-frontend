import Head from "next/head";
import Third from "../src/components/Third";

export default function Component() {
  return (
    <main>
      <Head>
        <title>Third</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Third />
    </main>
  );
}
