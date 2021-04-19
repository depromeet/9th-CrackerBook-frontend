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

                <BookTitle>
                    '판교의 젊은 기획자들'의
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
                    <BookImg src='/assets/main/exBook.jpg'/>
                    <IconWrapper>
                        <HeartIconBookBox src='/assets/main/heart.svg'/>
                        <HeartCnt>14</HeartCnt>
                    </IconWrapper>
                </BookBox>

                <StudyInfoWrapper>
                    <StudyProfile>
                        <StudyImg src='/assets/main/exBook.jpg'/>
                        <StudyHost>
                            주리
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
                            데이터 분석하는 방법
                        </StudyTitle>
                        <StudyContent>
                            2021.04.26 ~ 05.21 토 14:00
                        </StudyContent>
                    </StudyContentWrapper>
                    <IconWrapperContent>
                        <HeartIconBookBox src='/assets/main/heart.svg'/>
                        <HeartCnt>6</HeartCnt>
                    </IconWrapperContent>
                </StudyInfoWrapper>

            </MainContainer>
        </>

    );
}
