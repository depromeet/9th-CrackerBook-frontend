import {
    Hr, LikeStudyTitleWrapper, LikeStudyWrapper,
    MainContainer, RankBookImg, RankBookWrapper,
    StudyTypeDiv,
    StudyTypeImg,
    StudyTypeTitle,
    StudyTypeWrapper, TitleDiv, TotalView,
} from "../../styles/main/BooksStyle";
import {BookContainer, BookInfoContainer, Title} from "../../containers/main/BooksContainer";

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
                            <LikeStudyTitleWrapper>
                                <TitleDiv>
                                    좋아요가 많은 스터디
                                </TitleDiv>
                                <TotalView>
                                    전체보기 &gt;
                                </TotalView>
                            </LikeStudyTitleWrapper>
                            <RankBookWrapper>
                                <RankBookImg src='/assets/main/exBook.jpg'/>
                                <RankBookImg src='/assets/main/exBook.jpg'/>
                                <RankBookImg src='/assets/main/exBook.jpg'/>
                            </RankBookWrapper>
                        </LikeStudyWrapper>

                    </>
            }
        </>
    );
}


