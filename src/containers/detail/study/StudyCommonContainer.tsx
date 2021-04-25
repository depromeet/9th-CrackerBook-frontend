import {StudyBookCover, StudyBookImg, TitleStudyInfoWrapper} from "../../../styles/detail/study/studyCommonStyle";
import {TitleInner} from "../../../styles/detail/book/bookDetailStyle";
import {
    BackButton,
    BookDetail,
    BookDetailWrapper,
    SearchButton,
    Title
} from "../../../styles/detail/common/commonStyle";

export function StudyDetailCover(): JSX.Element {
    return (
        <>
            <StudyBookCover>
                <BackButton src="/assets/detail/back.svg"/>
                <SearchButton src="/assets/detail/magnifyingGlass.svg"/>
                <StudyBookImg src="/assets/main/exBook.jpg"/>
            </StudyBookCover>
        </>
    )
}

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
        </TitleStudyInfoWrapper>
    );
}
