import Head from "next/head";
import First from "../../src/components/tabs/First";

export default function FirstPage(): JSX.Element {
  return (
    <main>
      <Head>
        <title>First</title>
      </Head>
      <First />
    </main>
  );
}
