import SearchBoxComponent from "../../src/components/search/common/SearchBoxComponent";
import KeywordComponent from "../../src/components/search/index/KeywordComponent";
import KindStudyComponent from "../../src/components/search/index/KindStudyComponent";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { categoryState } from "src/components/search/states";

export default function Index(): JSX.Element {
  const [category] = useRecoilState(categoryState);

  return (
    <>
      <Head>
        <title>검색</title>
      </Head>
      <SearchBoxComponent />
      {category !== 2 ? <KeywordComponent /> : <KindStudyComponent />}
    </>
  );
}
