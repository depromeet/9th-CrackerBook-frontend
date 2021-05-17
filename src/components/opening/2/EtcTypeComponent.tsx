import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currentStepState, showEtcTypeState } from "../../states/opening";
import { typeEtcStringState } from "../../states/form";

const BlackBackground = styled.div`
  background-color: rgba(0, 0, 0, 80%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
`;
const ContentWrapper = styled.div`
  margin: 110px 0 0 20px;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
`;
const Input = styled.input`
  width: 262px;
  height: 64px;
  border: 1px solid #f1f1f3;
  box-sizing: border-box;
  box-shadow: 3px 4px 14px -2px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 0 0 0 20px;
  margin: 11px 10px 11px 0;
  font-size: 24px;
  line-height: 35px;
  color: #222222;
  ::placeholder {
    color: #999999;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  left: 275px;
  top: 309px;
`;
const IconInnerWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;
const IconText = styled.div`
  position: absolute;
  left: 27px;
  top: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
`;

export default function EtcTypeComponent(): JSX.Element {
  const setCurrentStep = useSetRecoilState(currentStepState);
  const setShowEtcType = useSetRecoilState(showEtcTypeState);
  const setTypeEtcStringState = useSetRecoilState(typeEtcStringState);
  const inputRef = useRef<HTMLInputElement>(null);

  const nextStep = (event) => {
    event.preventDefault();
    const node = inputRef.current;

    if (node.value) {
      setTypeEtcStringState(node.value);
      setShowEtcType(false);
      setCurrentStep(3);
    } else {
      alert("스터디 유형을 입력해주세요.");
    }
  };

  return (
    <BlackBackground>
      <ContentWrapper>
        저는 스터디 유형을 <Input placeholder="야간독서" ref={inputRef} />로
        {"\n"}
        만들고 싶어요.
      </ContentWrapper>
      <IconWrapper onClick={(event) => nextStep(event)}>
        <IconInnerWrapper>
          <IconText>확인</IconText>
          <img src="/assets/opening/confirm.svg" />
        </IconInnerWrapper>
      </IconWrapper>
    </BlackBackground>
  );
}
