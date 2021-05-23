import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  nextStepState,
  currentStepState,
  showEtcTypeState,
} from "../../states/opening";
import { showCompleteState } from "src/components/states";
import { studyFormState } from "../../states/studyForm";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 375px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd262;
  cursor: pointer;
  &.disabled {
    cursor: default;
    background: #dddddd;
  }
  z-index: 100;
`;
const Text = styled.div`
  margin: 0 0 30px 0;
  width: 200px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  cursor: pointer;
  &.disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

export default function FooterComponent(): JSX.Element {
  const [nextStep] = useRecoilState(nextStepState);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);
  const [showEtcType, setShowEtcType] = useRecoilState(showEtcTypeState);
  const [showComplete, setShowComplete] = useRecoilState(showCompleteState);
  const [studyForm] = useRecoilState(studyFormState);

  const currentStepPlus = (event) => {
    event.preventDefault();
    if (currentStep === 2 && studyForm.type === "etc") {
      setShowEtcType(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      {!showEtcType && !showComplete && (
        <>
          {nextStep > currentStep ? (
            <>
              {currentStep !== 4 ? (
                <Footer onClick={(event) => currentStepPlus(event)}>
                  <Text>다음 ({currentStep}/4)</Text>
                </Footer>
              ) : (
                <Footer onClick={() => setShowComplete(true)}>
                  <Text>완료 ({currentStep}/4)</Text>
                </Footer>
              )}
            </>
          ) : (
            <Footer className="disabled">
              {currentStep !== 4 ? (
                <Text className="disabled">다음 ({currentStep}/4)</Text>
              ) : (
                <Text className="disabled">완료 ({currentStep}/4)</Text>
              )}
            </Footer>
          )}
        </>
      )}
    </>
  );
}
