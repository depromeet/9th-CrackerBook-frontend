import {
    BookDetail,
    BookDetailWrapper,
    BookImg,
    MainBookCover, TabButton, TabWrapper,
    Title,
    TitleInfoWrapper,
    TitleInner
} from "../../styles/bookDetail/bookDetailStyle";

export function BookCover():JSX.Element {

    return (
        <MainBookCover>
            <BookImg src='/assets/main/exBook.jpg'/>
        </MainBookCover>
    )
}

export function BookInfo():JSX.Element {
    
    return (
        <TitleInfoWrapper>
            <TitleInner>
                <Title>
                    눈치껏 못 배웁니다, 일센스
                </Title>
                <BookDetailWrapper>
                    <BookDetail> 공여사들 저 |</BookDetail>
                    <BookDetail> 21세기북스 |</BookDetail>
                    <BookDetail> 2021. 04. 14 </BookDetail>
                </BookDetailWrapper>
            </TitleInner>
        </TitleInfoWrapper>
    )
}

export function TabContainer():JSX.Element {

    return (
        <TabWrapper>
            <TabButton active={true}> 스터디(4)</TabButton>
            <TabButton active={false}> 후기(23)</TabButton>
            <TabButton active={false}> 책소개</TabButton>
        </TabWrapper>
    )
}
