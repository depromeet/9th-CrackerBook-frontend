import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import SearchBoxComponent from "../../../src/components/search/common/SearchBoxComponent";
import FilterCategoryComponent from "../../../src/components/search/result/FilterCategoryComponent";
import FilterResultComponent from "../../../src/components/search/result/FilterResultComponent";
import SearchInitComponent from "../../../src/components/search/result/SearchInitComponent";
import NotFoundComponent from "../../../src/components/search/result/NotFoundComponent";
import FilterKindComponent from "../../../src/components/search/result/FilterKindComponent";
import ListBookComponent from "src/components/search/result/ListBookComponent";
import ListStudyComponent from "src/components/search/result/ListStudyComponent";

export default function Detail(): JSX.Element {
  const [tabSelected, setTabSelected] = useState(0);
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>검색 결과 : {Router.query.name}</title>
      </Head>
      <SearchBoxComponent />
      <FilterKindComponent
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      />
      <FilterCategoryComponent />
      <FilterResultComponent />
      <SearchInitComponent />
      <NotFoundComponent />
      {[0, 1].includes(tabSelected) && <ListBookComponent />}
      {[0, 2].includes(tabSelected) && <ListStudyComponent />}
    </>
  );
}
