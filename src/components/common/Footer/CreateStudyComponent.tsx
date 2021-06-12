import styled, { keyframes } from "styled-components";
import { Text } from "./FooterIndex";
import { LoginConfirm } from "../../detail/confirmStudy/ConfirmStudy";
import { useState } from "react";
import { loginCheck } from "../../../service/loginService";

export default function CreateStudyComponent(): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <StudyCreateWrapper>
      <CreateStudyBubble>직접 스터디를 주최해보세요!</CreateStudyBubble>
      <BubblePointBackground />
      <BubblePoint />
      <CookieIcon
        src="/assets/main/cookie.png"
        onClick={() => loginCheck(setOpenModal, "opening")}
      />
      {openModal && <LoginConfirm setOpenModal={setOpenModal} />}
      <Text>스터디 만들기</Text>
    </StudyCreateWrapper>
  );
}

const StudyCreateWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 44px;
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const CreateStudyBubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd262;
  position: absolute;
  border: 1px solid #757575;
  width: 167px;
  height: 30px;
  top: -89px;
  left: -47px;
  font-size: 12px;
  border-radius: 10px;
  animation: ${boxFade} 1s 1s 1 linear forwards;
`;

const BubblePoint = styled.div`
  position: absolute;
  top: -58px;
  border-top: 7px solid #ffd262;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  animation: ${boxFade} 1s 1.1s 1 linear forwards;
`;

const BubblePointBackground = styled.div`
  position: absolute;
  top: -58px;
  left: 32px;
  border-top: 8px solid #757575;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  animation: ${boxFade} 0.9s 0.9s 1 linear forwards;
`;

const CookieIcon = styled.img`
  position: absolute;
  top: -49px;
  left: 0;
  cursor: pointer;
`;
