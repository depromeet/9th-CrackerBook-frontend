import Head from "next/head";
import FirstComponent from "../../src/components/tabs/First";

export default function First(): JSX.Element {
  return (
    <main>
      <Head>
        <title>First</title>
      </Head>
      <FirstComponent />
    </main>
  );
}
