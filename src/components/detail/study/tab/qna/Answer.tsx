import styled from "styled-components";
import {Profile} from "../../../../../styles/detail/common/commonStyle";

type AnswerType = {
    img: string;
    name: string;
    date: string;
    answer: string;
}

export function Answer(props: {answer: AnswerType}): JSX.Element {
    const answerData = props.answer;
    return (
        <>
            <AnswerBox>
                <Wrapper>
                    <HostWrapper>
                        <Profile src={answerData.img}/>
                        <Info>
                            <Name>
                                {answerData.name}
                            </Name>
                            <Date>
                                {answerData.date}
                            </Date>
                        </Info>
                    </HostWrapper>
                    <AnswerContent>
                        {answerData.answer}
                    </AnswerContent>
                </Wrapper>
            </AnswerBox>
        </>
    )
}

const AnswerBox = styled.div`
  margin-top: 20px;
  background-color: #F1F1F3;
  border-radius: 15px;
  width: 281px;
  margin-left: auto;
`;

const Wrapper = styled.div`
  padding: 32px;
`;

const HostWrapper = styled.div`
  display: flex;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnswerContent = styled.div`
  padding-top: 10px;
  line-height: 20px;
`;

const Name = styled.div`
  font-weight: bold;
  padding-bottom: 13px;
`;

const Date = styled.div`
  color: #999999;
  padding-bottom: 15px;
`;
