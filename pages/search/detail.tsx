import SearchBoxComponent from "../../src/components/search/common/SearchBoxComponent";
import CategoryComponent from "../../src/components/search/detail/CategoryComponent";
import SearchInitComponent from "../../src/components/search/detail/SearchInitComponent";
import NotFoundComponent from "../../src/components/search/detail/NotFoundComponent";
import SearchResultComponent from "../../src/components/search/detail/SearchResultComponent";
import DetailComponent from "../../src/components/search/detail/DetailComponent";
import Head from "next/head";
import { useState } from "react";

export default function Detail(): JSX.Element {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <>
      <Head>
        <title>검색</title>
      </Head>
      <SearchBoxComponent />
      <CategoryComponent />
      <SearchInitComponent />
      <NotFoundComponent />
      <SearchResultComponent
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      />
      {[0, 1].includes(tabSelected) && <div>책</div>}
      {[0, 2].includes(tabSelected) && <div>스터디</div>}
      <DetailComponent />
    </>
  );
}
