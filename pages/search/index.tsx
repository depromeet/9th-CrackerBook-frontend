import SearchBoxComponent from "../../src/components/search/common/SearchBoxComponent";
import KeywordComponent from "../../src/components/search/index/KeywordComponent";
import KindStudyComponent from "../../src/components/search/index/KindStudyComponent";
import SearchInitComponent from "../../src/components/search/common/SearchInitComponent";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { categoryState, inputClickState } from "src/components/states/search";

export default function Index(): JSX.Element {
  const [category] = useRecoilState(categoryState);
  const [inputClick] = useRecoilState(inputClickState);

  return (
    <>
      <Head>
        <title>검색</title>
      </Head>
      <SearchBoxComponent />
      {inputClick ? (
        <SearchInitComponent />
      ) : (
        <>{category !== 2 ? <KeywordComponent /> : <KindStudyComponent />}</>
      )}
    </>
  );
}
