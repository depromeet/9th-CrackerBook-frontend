import styled from "styled-components";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { currentStepState } from "../../states/opening";

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 39px;
  height: 51px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const ArrowLeft = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  line-height: 45px;
  left: 20px;
  cursor: pointer;
`;
const Progress = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 375px;
  height: 2px;
  color: black;
  ::-webkit-progress-bar {
    background: #f1f1f3;
  }
  ::-webkit-progress-value {
    background: #ffd262;
    transition: all 2.5s ease-in-out;
  }
`;

export default function HeaderComponent(): JSX.Element {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useRecoilState(currentStepState);

  const resetState = (event) => {
    event.preventDefault();
    if (confirm("메인으로 이동하시겠습니까?")) {
      router.push("/main/books");
    }
  };

  return (
    <>
      <HeaderWrapper>
        {currentStep !== 1 ? (
          <ArrowLeft onClick={() => setCurrentStep(currentStep - 1)}>
            <img src="/assets/search/arrowleft.svg" />
          </ArrowLeft>
        ) : (
          <ArrowLeft onClick={(event) => resetState(event)}>
            <img src="/assets/search/arrowleft.svg" />
          </ArrowLeft>
        )}
        <div>스터디 주최</div>
      </HeaderWrapper>
      <Progress value={20 * currentStep} max="100" />
    </>
  );
}
