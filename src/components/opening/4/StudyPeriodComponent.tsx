import styled from "styled-components";
import FormComponent from "./FormComponent";

const KindBookWrapper = styled.div`
  padding: 18px 0;
`;
const MainText = styled.div`
  margin: 0 0 10px 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #222222;
`;
const SubText = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: #677ac7;
`;
const TitleText = styled.div`
  float: left;
  margin: 0 0 0 20px;
  font-weight: 500;
`;
const Divider = styled.div`
  float: left;
  margin: 6px 10px;
  width: 2px;
  height: 12px;
  background: #677ac7;
`;
const AuthorText = styled.div`
  font-weight: 300;
`;
export default function StudyPeriodComponent(): JSX.Element {
  return (
    <KindBookWrapper>
      <MainText>
        스터디 기간과 모집 기간을
        <br />
        선택해주세요.
      </MainText>
      <SubText>
        <TitleText>책 제목입니다</TitleText>
        <Divider />
        <AuthorText>책 저자</AuthorText>
      </SubText>
      <FormComponent />
    </KindBookWrapper>
  );
}
