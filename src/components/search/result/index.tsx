import SearchBoxComponent from "src/components/search/common/SearchBoxComponent";
import FilterKindComponent from "src/components/search/result/FilterKindComponent";
import ResultBookComponent from "src/components/search/result/ResultTitleComponent";
import ResultAuthorComponent from "src/components/search/result/ResultAuthorComponent";
import ResultStudyComponent from "src/components/search/result/ResultStudyComponent";
import SearchInitComponent from "src/components/search/common/SearchInitComponent";
import { useRecoilState } from "recoil";
import { categoryState, inputClickState } from "src/components/states/search";

export default function Detail(): JSX.Element {
  const [category] = useRecoilState(categoryState);
  const [inputClick] = useRecoilState(inputClickState);
  const components = [
    <ResultBookComponent key="ResultBook" />,
    <ResultAuthorComponent key="ResultAuthor" />,
    <ResultStudyComponent key="ResultStudy" />,
  ];

  return (
    <>
      <SearchBoxComponent />
      {inputClick ? (
        <SearchInitComponent />
      ) : (
        <>
          <FilterKindComponent />
          {components[category]}
        </>
      )}
    </>
  );
}
