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
export default function StudyPeriodComponent(): JSX.Element {
  return (
    <KindBookWrapper>
      <MainText>
        스터디 기간과 모집 기간을
        <br />
        선택해주세요.
      </MainText>
    </KindBookWrapper>
  );
}
