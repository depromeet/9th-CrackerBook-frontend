import {BookBoxStyle, BookImg, StudyIntroTitle} from "../../../../../styles/detail/study/detailInfoStyle";

export const GoStudyDetail = (): JSX.Element => {
    return (
        <>
            <StudyIntroTitle>
                책 상세정보
            </StudyIntroTitle>
            <BookBox/>
        </>
    )
}

export const BookBox = (): JSX.Element => {

    return (
        <BookBoxStyle>
            <BookImg src="/assets/main/exBook.jpg"/>
        </BookBoxStyle>
    )
}
