import {
    BookBox,
    BookImg,
    BookTitle,
    HeartCnt,
    HeartIconBookBox,
    Hr,
    IconWrapper, IconWrapperContent,
    MainContainer,
    StudyContent,
    StudyContentWrapper, StudyDate, StudyDiv,
    StudyHost,
    StudyIcon,
    StudyImg,
    StudyInfoWrapper,
    StudyProfile,
    StudyTitle,
    StudyTypeDiv,
    StudyTypeImg,
    StudyTypeTitle,
    StudyTypeWrapper,
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

export default function BooksComponent(props: { bookData: Array<BookData> }): JSX.Element {
    const data = props.bookData;
    const array = new Array(5).fill(1)
    const list = array.map((a, index) => (
            <StudyTypeDiv>
                <StudyTypeImg key={index} src='/assets/main/main.png'/>
                <StudyTypeTitle>
                    토론
                </StudyTypeTitle>
            </StudyTypeDiv>
        )
    );

    return (
        <>
            {
                !data ?
                    <div>로딩중</div> :
                    <>
                        <StudyTypeWrapper>
                            {list}
                        </StudyTypeWrapper>
                        <Hr/>
                        {data.map((book, index) => {
                            return (
                                <MainContainer key={index}>
                                    <BookTitle>
                                        '{book.bookName}'의
                                    </BookTitle>
                                    <TitleWrapper>
                                        <BookTitle>
                                            스터디
                                        </BookTitle>
                                        <TotalView>
                                            전체보기 &gt;
                                        </TotalView>
                                    </TitleWrapper>

                                    <BookBox>
                                        <BookImg src={book.img}/>
                                        <IconWrapper>
                                            <HeartIconBookBox src='/assets/main/heart.svg'/>
                                            <HeartCnt>14</HeartCnt>
                                        </IconWrapper>
                                    </BookBox>
                                    <StudyInfoWrapper>
                                        <StudyProfile>
                                            <StudyImg src='/assets/main/exBook.jpg'/>
                                            <StudyHost>
                                                {book.host}
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
                                                {book.studyName}
                                            </StudyTitle>
                                            <StudyContent>
                                                {book.startData} ~ {book.endData} 토 14:00
                                            </StudyContent>
                                        </StudyContentWrapper>
                                        <IconWrapperContent>
                                            <HeartIconBookBox src='/assets/main/heart.svg'/>
                                            <HeartCnt>6</HeartCnt>
                                        </IconWrapperContent>
                                    </StudyInfoWrapper>
                                </MainContainer>
                            )
                        })}

                    </>
            }
        </>

    );
}
