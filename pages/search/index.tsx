import SearchComponent from "src/components/search";
import Head from "next/head";

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>검색</title>
      </Head>
      <SearchComponent />
    </>
  );
}
