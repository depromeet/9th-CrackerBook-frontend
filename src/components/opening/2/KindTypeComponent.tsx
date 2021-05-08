import styled from "styled-components";

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
export default function KindTypeComponent(): JSX.Element {
  return (
    <KindBookWrapper>
      <MainText>
        어떤 유형으로
        <br />
        스터디를 하고 싶나요?
      </MainText>
    </KindBookWrapper>
  );
}
