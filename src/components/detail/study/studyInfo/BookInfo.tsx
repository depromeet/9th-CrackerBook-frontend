import {TitleStudyInfoWrapper} from "../../../../styles/detail/study/studyCommonStyle";
import {BookDetail, BookDetailWrapper, Title} from "../../../../styles/detail/common/commonStyle";
import styled from "styled-components";
import {HostBoxContainer} from "./HostBox";

export function BookInfo(): JSX.Element {
    return (
        <TitleStudyInfoWrapper>
            <TitleInner>
                <Title>눈치껏 못 배웁니다, 일센스</Title>
                <BookDetailWrapper>
                    <BookDetail> 공여사들 저 |</BookDetail>
                    <BookDetail> 21세기북스 |</BookDetail>
                    <BookDetail> 2021. 04. 14 </BookDetail>
                </BookDetailWrapper>
            </TitleInner>
            <HostBoxContainer/>
        </TitleStudyInfoWrapper>
    );
}


const TitleInner = styled.div`
  padding: 50px 87px 0 20px;
`;
