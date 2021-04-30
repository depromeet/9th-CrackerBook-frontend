import SearchBoxComponent from "../../src/components/search/common/SearchBoxComponent";
import CategoryComponent from "../../src/components/search/detail/CategoryComponent";
import SearchInitComponent from "../../src/components/search/detail/SearchInitComponent";
import NotFoundComponent from "../../src/components/search/detail/NotFoundComponent";
import SearchResultComponent from "../../src/components/search/detail/SearchResultComponent";
import Head from "next/head";
import { useState } from "react";
import ListBookComponent from "src/components/search/detail/ListBookComponent";
import ListStudyComponent from "src/components/search/detail/ListStudyComponent";

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
      {[0, 1].includes(tabSelected) && <ListBookComponent />}
      {[0, 2].includes(tabSelected) && <ListStudyComponent />}
    </>
  );
}
