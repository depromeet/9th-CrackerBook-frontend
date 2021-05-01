import {InfoWrapper} from "../../../../../styles/detail/study/studyCommonStyle";
import {RegitQuestion} from "./RegitQuestion";
import {Question} from "./Question";
import {Answer} from "./Answer";
import styled from "styled-components";

export const QnAIndex = (): JSX.Element => {

    return (
        <InfoWrapper>
            <RegitQuestion/>
            <QnAWrapper>
                <Question />
                <Answer />
            </QnAWrapper>
        </InfoWrapper>
    )
}

const QnAWrapper = styled.div`
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 32px;
`;
