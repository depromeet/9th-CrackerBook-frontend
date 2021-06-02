import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { showCompleteState } from "src/components/states";
import { nextStepState } from "src/components/states/opening";
import { studyFormState } from "src/components/states/studyForm";
import PeriodStudyComponent from "./PeriodStudyComponent";
import PeriodRecruitmentComponent from "./PeriodRecruitmentComponent";
import RepeatComponent from "./RepeatComponent";
import CompleteComponent from "src/components/common/CompleteComponent";

const FormWrapper = styled.div`
  padding: 0;
`;

export default function StudyPeriodComponent(): JSX.Element {
  const setNextStep = useSetRecoilState(nextStepState);
  const [showComplete] = useRecoilState(showCompleteState);
  const [studyForm] = useRecoilState(studyFormState);
  useEffect(() => {
    studyForm.repeat === "" ||
    studyForm.studyStartDate >= studyForm.studyEndDate ||
    studyForm.recruitStartAt >= studyForm.recruitEndAt
      ? setNextStep(4)
      : setNextStep(5);
  });
  return (
    <>
      <FormWrapper>
        <PeriodStudyComponent />
        <RepeatComponent />
        <PeriodRecruitmentComponent />
      </FormWrapper>
      {showComplete && (
        <CompleteComponent
          route={"/main/books"}
          header={"스터디 주최 완료"}
          content={`축하합니다! 스터디가 개설되었습니다.
          성공적인 스터디 운영을 응원합니다.`}
        />
      )}
    </>
  );
}
