import {InfoWrapper, ReviewWrapper} from "../../../../../styles/detail/study/studyCommonStyle";
import {EvaluationCount} from "./EvaluationCount";
import styled from "styled-components";
import {ReviewContent} from "./ReviewContent";
import {MoreButton} from "../../../../main/BooksComponent";

export const ReviewIndex = (): JSX.Element => {

    return (
        <>
            <InfoWrapper>
                <EvaluationCount />
            </InfoWrapper>
            <Line />
            <ReviewWrapper>
                <ReviewContent />
                <MoreButton backgroundColor='white' />
            </ReviewWrapper>
        </>

    )
}

const Line = styled.div`
  height: 1px;
  background-color: #F1F1F3;
`;
