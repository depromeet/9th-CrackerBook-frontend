import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nextStepState } from "src/components/states/opening";
import { studyFormState } from "src/components/states/studyForm";
import NameComponent from "./NameComponent";
import IntroductionComponent from "./IntroductionComponent";
import PersonnelComponent from "./PersonnelComponent";
import DifficultComponent from "./DifficultComponent";
import LocationComponent from "./LocationComponent";

const FormWrapper = styled.div`
  padding: 0 20px 80px 20px;
`;

export default function StudyInfoComponent(): JSX.Element {
  const setNextStep = useSetRecoilState(nextStepState);
  const [studyForm] = useRecoilState(studyFormState);
  useEffect(() => {
    studyForm.name === "" ||
    studyForm.Difficult === "" ||
    studyForm.place === ""
      ? setNextStep(3)
      : setNextStep(4);
  });

  return (
    <FormWrapper>
      <NameComponent />
      <IntroductionComponent />
      <PersonnelComponent />
      <DifficultComponent />
      <LocationComponent />
    </FormWrapper>
  );
}
