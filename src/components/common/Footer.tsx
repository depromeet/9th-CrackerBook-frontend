import styled, {keyframes} from "styled-components";
import {useState} from "react";


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
        <ButtomWrapper>
            <ButttomImg src='/assets/main/home.svg'/>
            <Text>
                홈
            </Text>
        </ButtomWrapper>
    )
};

const CreateStudy = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    setTimeout(() => {
        setIsOpen(false);
    }, 3000);
    return (
        <StudyCreateWrapper>
            <BubbleImg src='/assets/main/bubble.png'/>
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
  width: 298px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 93px;
  position: fixed;
  bottom: 0;
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

const Text = styled.div`
  font-size: 12px;
`;


