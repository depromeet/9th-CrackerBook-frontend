import styled from "styled-components";
import { useRecoilState } from "recoil";
import { typeState } from "../states";
import DebateComponent from "./DebateComponent";

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
const SvgWrapper = styled.div`
  position: relative;
`;

// 토론, 발표, 글쓰기, 포트폴리오, 기타
// "debate", "announcement", "writing", "portfolio", "etc"
export default function KindTypeComponent(): JSX.Element {
  return (
    <KindBookWrapper>
      <MainText>
        어떤 유형으로
        <br />
        스터디를 하고 싶나요?
      </MainText>

      <SvgWrapper>
        <DebateComponent />
      </SvgWrapper>
    </KindBookWrapper>
  );
}
