import { useEffect } from "react";
import FormComponent from "./FormComponent";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nextStepState } from "src/components/states/opening";
import { studyFormState } from "src/components/states/studyForm";

export default function StudyInfoComponent(): JSX.Element {
  const setNextStep = useSetRecoilState(nextStepState);
  const [studyForm] = useRecoilState(studyFormState);
  useEffect(() => {
    studyForm.name === "" ||
    studyForm.difficulty === "" ||
    studyForm.place === ""
      ? setNextStep(3)
      : setNextStep(4);
  });

  return (
    <>
      <FormComponent />
    </>
  );
}
