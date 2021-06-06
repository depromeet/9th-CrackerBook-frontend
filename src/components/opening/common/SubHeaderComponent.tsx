import styled from "styled-components";
import { useRecoilState } from "recoil";
import { currentStepState } from "../../states/opening";
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
  max-width: 200px;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: box;
  font-weight: 300;
  max-width: 100px;
  overflow: hidden;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const mainText = [
  `어떤 책으로
스터디를 하고 싶으세요?`,
  `어떤 유형으로
스터디를 하고 싶으세요?`,
  `스터디에 대한 정보를
입력해주세요.`,
  `스터디 기간과 모집 기간을
선택해주세요.`,
];

export default function SubHeaderComponent(): JSX.Element {
  const [studyForm] = useRecoilState(studyFormState);
  const [currentStep] = useRecoilState(currentStepState);

  return (
    <>
      <MainText>{mainText[currentStep - 1]}</MainText>
      {currentStep !== 1 && (
        <SubText>
          <TitleText>{studyForm.book.name}</TitleText>
          <Divider />
          <AuthorText>{studyForm.book.authors}</AuthorText>
        </SubText>
      )}
    </>
  );
}
