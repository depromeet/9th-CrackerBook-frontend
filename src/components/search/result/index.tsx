import SearchBoxComponent from "src/components/search/common/SearchBoxComponent";
import FilterKindComponent from "src/components/common/TabViewComponent";
import ResultBookComponent from "src/components/search/result/ResultNameComponent";
import ResultAuthorComponent from "src/components/search/result/ResultAuthorComponent";
import ResultStudyComponent from "src/components/search/result/ResultStudyComponent";
import SearchInitComponent from "src/components/search/common/SearchInitComponent";
import FooterComponent from "src/components/common/Footer/FooterIndex";
import { useRecoilState } from "recoil";
import {
  categoryState,
  categoryListState,
  inputClickState,
} from "src/components/states/search";

export default function ResultComponent(): JSX.Element {
  const [categoryList] = useRecoilState(categoryListState);
  const [category, setCategory] = useRecoilState(categoryState);
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
          <FilterKindComponent
            itemlistState={categoryList}
            itemState={category}
            setItemState={setCategory}
          />
          {components[category]}
        </>
      )}
      <FooterComponent />
    </>
  );
}
