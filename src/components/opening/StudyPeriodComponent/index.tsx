import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import CompleteComponent from "src/components/common/CompleteComponent";
import FormComponent from "./FormComponent";
import { showCompleteState } from "src/components/states";
import { nextStepState } from "src/components/states/opening";
import { studyFormState } from "src/components/states/studyForm";

const KindBookWrapper = styled.div`
  padding: 18px 0;
  overflow: hidden;
`;
const MainText = styled.div`
  margin: 0 20px 10px 20px;
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
export default function StudyPeriodComponent(): JSX.Element {
  const setNextStep = useSetRecoilState(nextStepState);
  const [showComplete] = useRecoilState(showCompleteState);
  const [studyForm] = useRecoilState(studyFormState);
  useEffect(() => {
    studyForm.repeat === "" ||
    studyForm.periodStudyStart >= studyForm.periodStudyEnd ||
    studyForm.periodRecruitmentStart >= studyForm.periodRecruitmentEnd
      ? setNextStep(4)
      : setNextStep(5);
  });
  return (
    <KindBookWrapper>
      <MainText>
        {`스터디 기간과 모집 기간을
        선택해주세요.`}
      </MainText>
      <SubText>
        <TitleText>{studyForm.book.title}</TitleText>
        <Divider />
        <AuthorText>{studyForm.book.author}</AuthorText>
      </SubText>
      <FormComponent />
      {showComplete && (
        <CompleteComponent
          route={"/main/books"}
          header={"스터디 주최 완료"}
          content={`축하합니다! 스터디가 개설되었습니다.
          성공적인 스터디 운영을 응원합니다.`}
        />
      )}
    </KindBookWrapper>
  );
}
