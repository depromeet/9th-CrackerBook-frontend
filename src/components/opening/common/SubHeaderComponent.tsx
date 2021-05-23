import styled from "styled-components";
import { useRecoilState } from "recoil";
import { nextStepState } from "../../states/opening";
import { studyFormState } from "../../states/studyForm";

const MainText = styled.div`
  margin: 0 0 10px 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #222222;
  white-space: pre-line;
`;
const SubText = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: #677ac7;
`;
const TitleText = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  float: left;
  margin: 0 0 0 20px;
  font-weight: 500;
  max-width: 250px;
  overflow: hidden;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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

export default function KindBookComponent(): JSX.Element {
  const [studyForm] = useRecoilState(studyFormState);
  const [nextStep] = useRecoilState(nextStepState);

  return (
    <>
      <MainText>
        {`어떤 책으로
        스터디를 하고 싶으세요?`}
      </MainText>
      {nextStep !== 1 && (
        <SubText>
          <TitleText>{studyForm.book.title}</TitleText>
          <Divider />
          <AuthorText>{studyForm.book.author}</AuthorText>
        </SubText>
      )}
    </>
  );
}
