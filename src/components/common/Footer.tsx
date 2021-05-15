import styled, {keyframes} from "styled-components";
import {useState} from "react";
import {Link} from "@material-ui/core";


export default function FooterComponent(): JSX.Element {
    return (
        <FooterWrapper>
            <HomeComponent/>
            <CreateStudy/>
            <MyPageComponent/>
        </FooterWrapper>
    );
}

const HomeComponent = (): JSX.Element => {

    return (
        <Link href='/main'>
            <ButtomWrapper>
                <ButttomImg src='/assets/main/home.svg'/>
                <Text>
                    홈
                </Text>
            </ButtomWrapper>
        </Link>
    )
};

const CreateStudy = (): JSX.Element => {
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
const MyPageComponent = (): JSX.Element => {

    return (
        <ButtomWrapper>
            <ButttomImg src='/assets/main/myPage.svg'/>
            <Text>
                마이페이지
            </Text>
        </ButtomWrapper>
    )
};

const FooterWrapper = styled.div`
  padding: 0 40px;
  width: 296px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 93px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -2px 6px #e0e0e0;
`;

const ButtomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  cursor: pointer;
`;

const ButttomImg = styled.img`
  width: 32px;
  height: 32px;
`;

const StudyCreateWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 44px;
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;

const CookieIcon = styled.img`
  position: absolute;
  top: -49px;
  left: 0;
  cursor: pointer;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const BubbleImg = styled.img`
  position: absolute;
  top: -89px;
  left: -46px;
  animation: ${boxFade} 1s 1s 1 linear forwards;
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

`;

const BubblePoint = styled.div`
  position: absolute;
  top: -58px;
  border-top: 7px solid #FFD262;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

const BubblePointBackground = styled.div`
  position: absolute;
  top: -58px;
  left: 32px;
  border-top: 8px solid black;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
`;

const Text = styled.div`
  font-size: 12px;
`;


