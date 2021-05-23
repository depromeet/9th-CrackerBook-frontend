import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import SearchBoxComponent from "src/components/search/common/SearchBoxComponent";
import FilterCategoryComponent from "src/components/search/result/FilterCategoryComponent";
import FilterResultComponent from "src/components/search/result/FilterResultComponent";
import NotFoundComponent from "src/components/common/NotFoundComponent";
import FilterKindComponent from "src/components/search/result/FilterKindComponent";
import ListBookComponent from "src/components/search/result/ListBookComponent";
import ListAuthorComponent from "src/components/search/result/ListAuthorComponent";
import ListStudyComponent from "src/components/search/result/ListStudyComponent";
import SearchInitComponent from "src/components/search/common/SearchInitComponent";
import { useRecoilState } from "recoil";
import { inputClickState } from "src/components/states/search";

export default function Detail(): JSX.Element {
  const [tabSelected, setTabSelected] = useState(0);
  const [inputClick] = useRecoilState(inputClickState);
  const Router = useRouter();
  const components = [
    <ListBookComponent key="ListBook" />,
    <ListAuthorComponent key="ListAuthor" />,
    <ListStudyComponent key="ListStudy" />,
  ];

  return (
    <>
      <Head>
        <title>검색 결과 : {Router.query.name}</title>
      </Head>
      <SearchBoxComponent />
      {inputClick ? (
        <SearchInitComponent />
      ) : (
        <>
          <FilterKindComponent
            tabSelected={tabSelected}
            setTabSelected={setTabSelected}
          />
          {tabSelected === 2 && <FilterCategoryComponent />}
          <FilterResultComponent />
          {components[tabSelected]}
          <NotFoundComponent />
        </>
      )}
    </>
  );
}
