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
export default function StudyInfoComponent(): JSX.Element {
  return (
    <KindBookWrapper>
      <MainText>
        스터디에 대한 정보를
        <br />
        입력해주세요.
      </MainText>
    </KindBookWrapper>
  );
}
