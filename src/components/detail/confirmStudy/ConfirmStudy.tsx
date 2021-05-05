import styled from "styled-components";
import {BlackBackground} from "../../../styles/detail/common/commonStyle";
import {useState} from "react";
import {CompleteEnroll} from "../completeEnroll/CompleteEnroll";
import {GoLogin} from "../../common/goLogin/GoLogin";

// const [isPossibleStudy, setIsPossibleStudy] = useState<boolean>(false);
// const [showConfirmBox, setShowConfirmBox] = useState<boolean>(true);
// {
//     showConfirmBox ? ConfirmComponent() : ''
// }
// {
//     isPossibleStudy ? enrollCompleteStudy() : goLoginModal()
// }
export function ConfirmStudy(): JSX.Element {

    return (
        <>
            <BlackBackground>
                <GoLogin/>
            </BlackBackground>
        </>
    )
}

function ConfirmComponent(): JSX.Element {
    // <CompleteEnroll/>

    return (
        <ConfirmWrapper>
            <ConfirmBox>
                <Close src='/assets/detail/close.svg'/>
                <InnerBox>
                    <ContentBox>
                        <StudyName>
                            '일센스'가 있는 살미이 되기 위해서는?
                        </StudyName>
                        <Date>
                            2021.04.26 ~ 05.21 토 14:00
                        </Date>
                    </ContentBox>
                </InnerBox>
            </ConfirmBox>
            <ApplyButtom>스터디 신청하기</ApplyButtom>
        </ConfirmWrapper>
    )
}

// 완료창
const enrollCompleteStudy = (): JSX.Element => {
    return (
        <>
            <CompleteEnroll/>
        </>
    )
}

// 로그인창
const goLoginModal = (): JSX.Element => {

    return (
        <>
            로그인 하세요
        </>
    )
}
// login cehck
// const loginCheck = () => {
//     const [checkLogin] = useState<boolean>(true);
//     setShowConfirmBox(false);
//
//     checkLogin ? setIsPossibleStudy(true) : setIsPossibleStudy(false);
// }

const ConfirmWrapper = styled.div`
  position: fixed;
  bottom: 0;
`;

const ApplyButtom = styled.div`
  background-color: #FFD262;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  cursor: pointer;
`;

const ConfirmBox = styled.div`
  border-radius: 15px 15px 0 0;
  background-color: white;
  min-height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3px;
  padding-left: 3px
`;

const Close = styled.img`
  width: 35px;
  height: 10px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
`;

const InnerBox = styled.div`
  border-radius: 15px;
  margin: 0 20px 32px 20px;
  border: 1px solid #FFD262;
  box-shadow: 1px 3px 9px 7px #f4f4f4;
`;

const ContentBox = styled.div`
  padding: 20px 52px 20px 20px;
  display: flex;
  flex-direction: column;
`;

const StudyName = styled.div`
  color: #222222;
  padding-bottom: 10px;
`;

const Date = styled.div`
  color: #777777;
`;
