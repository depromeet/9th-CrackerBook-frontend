import styled from "styled-components";
import SearchBoxComponent from "./SearchBoxComponent";
import FavoriteBookComponent from "./FavoriteBookComponent";
import SearchResultComponent from "./SearchResultComponent";
import { useRecoilState } from "recoil";
import { categoryState } from "../states";

const KindBookWrapper = styled.div`
  padding: 18px 0;
`;
const MainText = styled.div`
  margin: 0 20px;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #222222;
`;

export default function KindBookComponent(): JSX.Element {
  const [category] = useRecoilState(categoryState);

  return (
    <KindBookWrapper>
      <MainText>
        어떤 책으로
        <br />
        스터디를 하고 싶으세요?
      </MainText>
      <SearchBoxComponent />
      {category !== 2 ? <SearchResultComponent /> : <FavoriteBookComponent />}
    </KindBookWrapper>
  );
}
