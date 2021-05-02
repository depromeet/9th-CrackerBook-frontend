import styled from "styled-components";
import {Profile} from "../../../../../styles/detail/common/commonStyle";

type QuestionType = {
    img: string;
    name: string;
    date: string;
    publish: string;
    question: string;
}

export function Question(props: {question: QuestionType}): JSX.Element {
    const questionData = props.question;
    return (
        <>
            <QuestionWrapper>
                <Profile src={questionData.img}/>
                <CotentWrapper>
                    <Name>
                        {questionData.name}
                    </Name>
                    <DateWrapper>
                        <Date>
                            {questionData.date}
                        </Date>
                        <Publish>
                            {questionData.date}
                        </Publish>
                    </DateWrapper>
                    <QuestionDiv>
                        {questionData.question}
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

