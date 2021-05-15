import {useState} from "react";
import styled, {keyframes} from "styled-components";
import {Text} from "./FooterIndex";

export default function CreateStudyComponent(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    setTimeout(() => {
        setIsOpen(false);
    }, 3000);
    return (
        <StudyCreateWrapper>
            <CreateStudyBubble>
                직접 스터디를 주최해보세요!
            </CreateStudyBubble>
            <BubblePointBackground/>
            <BubblePoint/>
            <CookieIcon src='/assets/main/cookie.png'/>
            <Text>
                스터디 만들기
            </Text>
        </StudyCreateWrapper>
    )
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
  background-color: #FFD262;
  position: absolute;
  border: 1px solid black;
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
  border-top: 7px solid #FFD262;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  animation: ${boxFade} 1s 1s 1 linear forwards;
`;

const BubblePointBackground = styled.div`
  position: absolute;
  top: -58px;
  left: 32px;
  border-top: 8px solid black;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  animation: ${boxFade} 1s 1s 1 linear forwards;
`;

const CookieIcon = styled.img`
  position: absolute;
  top: -49px;
  left: 0;
  cursor: pointer;
`;
