import {
    BookBox, BookImg, HeartCnt, HeartIconBookBox,
    Hr, IconWrapper,
    MainContainer, StudyTitle,
    StudyTypeDiv,
    StudyTypeImg,
    StudyTypeTitle,
    StudyTypeWrapper, TitleWrapper, TotalView
} from "../../styles/main/BooksStyle";

interface BookData {
    bookName: string;
    img: string;
    studyName: Array<string>;
    host: Array<string>;
    memberCnt: Array<number>;
    startData: Array<string>;
    endData: Array<string>;
}

export default function BooksComponent(props: { bookData: BookData }): JSX.Element {
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
            <StudyTypeWrapper>
                {list}
            </StudyTypeWrapper>
            <Hr/>
            <MainContainer>
                <StudyTitle>
                    '판교의 젊은 기획자들'의
                </StudyTitle>
                <TitleWrapper>
                    <StudyTitle>
                        스터디
                    </StudyTitle>
                    <TotalView>
                        전체보기 &gt;
                    </TotalView>
                </TitleWrapper>
                <BookBox>
                    <BookImg src='/assets/main/exBook.jpg'/>
                    <IconWrapper>
                        <HeartIconBookBox src='/assets/main/heart.svg'/>
                        <HeartCnt>14</HeartCnt>
                    </IconWrapper>
                </BookBox>
            </MainContainer>
        </>

    );
}
