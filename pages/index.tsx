import Head from "next/head";
import IndexComponent from "../src/components/Index";

export default function Index(): JSX.Element {
  return (
    <main>
      <Head>
        <title>Cracker Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexComponent />
    </main>
  );
}
