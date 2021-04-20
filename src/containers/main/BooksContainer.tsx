import {
    BookBox,
    BookImg,
    BookTitle,
    HeartCnt,
    HeartIconBookBox,
    IconWrapper, IconWrapperContent,
    MainContainer,
    StudyContent,
    StudyContentWrapper,
    StudyDiv,
    StudyHost,
    StudyIcon,
    StudyImg, StudyInfoWrapper,
    StudyProfile, StudyTitle,
    TitleWrapper,
    TotalView
} from "../../styles/main/BooksStyle";

interface BookData {
    bookName: string;
    img: string;
    studyName: string;
    host: string;
    memberCnt: number;
    startData: string;
    endData: string;
}

export function Title(props: { bookName: string }) {

    return (
        <>
            <BookTitle>
                '{props.bookName}'의
            </BookTitle>
            <TitleWrapper>
                <BookTitle>
                    스터디
                </BookTitle>
                <TotalView>
                    전체보기 &gt;
                </TotalView>
            </TitleWrapper>
        </>
    )
}

export function BookContainer(props: { img: string }) {
    return (
        <>
            <BookBox>
                <BookImg src={props.img}/>
                <IconWrapper>
                    <HeartIconBookBox src='/assets/main/heart.svg'/>
                    <HeartCnt>14</HeartCnt>
                </IconWrapper>
            </BookBox>
        </>
    )
}

export function BookInfoContainer(props: { bookInfo: BookData }) {
    const bookData = props.bookInfo;
    return (
        <>
            <StudyInfoWrapper>
                <StudyProfile>
                    <StudyImg src='/assets/main/exBook.jpg'/>
                    <StudyHost>
                        {bookData.host}
                    </StudyHost>
                </StudyProfile>
                <StudyContentWrapper>
                    <StudyContent>
                        <StudyIcon src='/assets/main/bookIcon.svg'/>
                        <StudyDiv>토론</StudyDiv>
                        <StudyIcon src='/assets/main/memberIcon.svg'/>
                        <div>멤버 3/6</div>
                    </StudyContent>
                    <StudyTitle>
                        {bookData.studyName}
                    </StudyTitle>
                    <StudyContent>
                        {bookData.startData} ~ {bookData.endData} 토 14:00
                    </StudyContent>
                </StudyContentWrapper>
                <IconWrapperContent>
                    <HeartIconBookBox src='/assets/main/heart.svg'/>
                    <HeartCnt>6</HeartCnt>
                </IconWrapperContent>
            </StudyInfoWrapper>
        </>
    )
}
