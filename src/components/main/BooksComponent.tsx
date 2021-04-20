import {
    Hr, LikeInfoWrapper, LikeStudyTitleWrapper, LikeStudyWrapper,
    MainContainer, NewStudyBackground, NewStudyWrapper, RankBookImg, RankBookWrapper,
    StudyTypeDiv,
    StudyTypeImg,
    StudyTypeTitle,
    StudyTypeWrapper, TitleDiv, TotalView,
} from "../../styles/main/BooksStyle";
import {
    BookContainer,
    BookInfoContainer,
    LikeBookContainer,
    LikeBookNameContainer, LikeDateContainer, LikeTitleContainer, NewStudyContainer,
    Title
} from "../../containers/main/BooksContainer";

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
                                    <Title bookName={book.bookName}/>
                                    <BookContainer img={book.img}/>
                                    <BookInfoContainer bookInfo={book}/>
                                </MainContainer>
                            )
                        })}

                        <LikeStudyWrapper>
                            <LikeTitleContainer />
                            <RankBookWrapper>
                                <LikeInfoWrapper>
                                    <RankBookImg src='/assets/main/exBook.jpg'/>
                                    <LikeBookContainer />
                                    <LikeBookNameContainer />
                                    <LikeDateContainer />
                                </LikeInfoWrapper>
                                <LikeInfoWrapper>
                                    <RankBookImg src='/assets/main/exBook.jpg'/>
                                    <LikeBookContainer />
                                    <LikeBookNameContainer />
                                    <LikeDateContainer />
                                </LikeInfoWrapper>
                                <LikeInfoWrapper>
                                    <RankBookImg src='/assets/main/exBook.jpg'/>
                                    <LikeBookContainer />
                                    <LikeBookNameContainer />
                                    <LikeDateContainer />
                                </LikeInfoWrapper>
                            </RankBookWrapper>

                        </LikeStudyWrapper>

                        <NewStudyBackground>
                            <NewStudyWrapper>
                                <NewStudyContainer />
                            </NewStudyWrapper>
                        </NewStudyBackground>

                    </>
            }
        </>
    );
}


