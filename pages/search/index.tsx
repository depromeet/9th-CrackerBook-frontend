import SearchBoxComponent from "../../src/components/search/common/SearchBoxComponent";
import KeywordComponent from "../../src/components/search/index/KeywordComponent";
import Head from "next/head";

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>검색</title>
      </Head>
      <SearchBoxComponent />
      <KeywordComponent />
    </>
  );
}
