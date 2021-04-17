import Head from "next/head";
import Index from "../src/components/Index";

export default function Component(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Cracker Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Index />
    </main>
  );
}
