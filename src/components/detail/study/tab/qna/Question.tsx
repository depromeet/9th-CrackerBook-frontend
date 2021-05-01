import styled from "styled-components";
import {Profile} from "../../../../../styles/detail/common/commonStyle";

export function Question(): JSX.Element {

    return (
        <>
            <QuestionWrapper>
                <Profile src='/assets/main/surprised.svg'/>
                <CotentWrapper>
                    <Name>
                        제이호
                    </Name>
                    <DateWrapper>
                        <Date>
                            2021.04.12
                        </Date>
                        <Publish>
                            공개
                        </Publish>
                    </DateWrapper>
                    <QuestionDiv>
                        하이 ~ HI~~~ 숙제가 있나요?
                    </QuestionDiv>
                </CotentWrapper>
            </QuestionWrapper>
        </>
    )
}

const Name = styled.div`
  font-weight: bold;
  padding-bottom: 13px;
`;

const Date = styled.div`
  color: #999999;
  padding-bottom: 15px;
`;

const QuestionWrapper = styled.div`
  display: flex;
`;

const CotentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateWrapper = styled.div`
  display: flex;
`;

const Publish = styled.div`
  padding-left: 20px;
  color: #999999;
  padding-bottom: 15px;
`;

const QuestionDiv = styled.div`
  
`;

