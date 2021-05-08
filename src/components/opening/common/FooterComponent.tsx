import styled from "styled-components";
import { useRecoilState } from "recoil";
import { nextStepState, currentStepState } from "../states";

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
  }
`;
const TextDiv = styled.div`
  margin: 0 0 30px 0;
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
  return (
    <>
      {nextStep ? (
        <>
          {currentStep !== 4 ? (
            <Footer onClick={() => setCurrentStep(currentStep + 1)}>
              <TextDiv>다음 ({currentStep}/4)</TextDiv>
            </Footer>
          ) : (
            <Footer onClick={() => alert(`완료`)}>
              <TextDiv>완료 ({currentStep}/4)</TextDiv>
            </Footer>
          )}
        </>
      ) : (
        <Footer className="disabled">
          {currentStep !== 4 ? (
            <TextDiv className="disabled">다음 ({currentStep}/4)</TextDiv>
          ) : (
            <TextDiv className="disabled">완료 ({currentStep}/4)</TextDiv>
          )}
        </Footer>
      )}
    </>
  );
}
