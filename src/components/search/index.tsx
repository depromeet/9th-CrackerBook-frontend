import SearchBoxComponent from "./common/SearchBoxComponent";
import KeywordComponent from "./KeywordComponent";
import KindStudyComponent from "./KindStudyComponent";
import SearchInitComponent from "./common/SearchInitComponent";
import { useRecoilState } from "recoil";
import { categoryState, inputClickState } from "src/components/states/search";

export default function SearchComponent(): JSX.Element {
  const [category] = useRecoilState(categoryState);
  const [inputClick] = useRecoilState(inputClickState);

  return (
    <>
      <SearchBoxComponent />
      {inputClick ? (
        <SearchInitComponent />
      ) : (
        <>{category !== 2 ? <KeywordComponent /> : <KindStudyComponent />}</>
      )}
    </>
  );
}
