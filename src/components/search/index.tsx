import styled from "styled-components";
import SearchBoxComponent from "./common/SearchBoxComponent";
import KeywordComponent from "./KeywordComponent";
import KindStudyComponent from "./KindStudyComponent";
import SearchInitComponent from "./common/SearchInitComponent";
import { useRecoilState } from "recoil";
import { inputClickState } from "src/components/states/search";

const Divider = styled.div`
  margin: 12px;
  position: relative;
  height: 10px;
  background: #f1f1f3;
`;

export default function SearchComponent(): JSX.Element {
  const [inputClick] = useRecoilState(inputClickState);

  return (
    <>
      <SearchBoxComponent />
      {inputClick ? (
        <SearchInitComponent />
      ) : (
        <>
          <KeywordComponent />
          <Divider />
          <KindStudyComponent />
        </>
      )}
    </>
  );
}
