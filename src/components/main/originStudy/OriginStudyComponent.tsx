import {
    BookBox,
    BookImg, HeartCnt, HeartIconBookBox,
    IconWrapper,
    MainContainer,
    TitleDiv,
    TitleWrapper,
    TotalView
} from "../../../styles/main/BooksStyle";
import Link from "next/link";
import BookInfoComponent from "./BookInfoComponent";

interface BookData {
    bookName: string;
    img: string;
    studyName: string;
    host: string;
    memberCnt: number;
    startData: string;
    endData: string;
}

export default function OriginStudyComponent(props: {bookData: Array<BookData>}): JSX.Element {
    const data = props.bookData;
    return (
        <>
            {data.map((book, index) => {
                return (
                    <MainContainer key={index}>
                        <Title bookName={book.bookName} />
                        <BookContainer img={book.img} />
                        <BookInfoComponent bookInfo={book} />
                    </MainContainer>
                );
            })}
        </>
    )
}


export function Title(props: { bookName: string }): JSX.Element {
    const bookName = props.bookName.length > 11 ? props.bookName.slice(0, 10) + '...' : props.bookName;
    return (
        <>
            <TitleDiv>&apos;{bookName}&lsquo;의</TitleDiv>
            <TitleWrapper>
                <TitleDiv>스터디</TitleDiv>
                <TotalView>전체보기 &gt;</TotalView>
            </TitleWrapper>
        </>
    );
}


export function BookContainer(props: { img: string }): JSX.Element {
    return (
        <>
            <Link href="/detail/book">
                <BookBox>
                    <BookImg src={props.img} />
                    <IconWrapper>
                        <HeartIconBookBox src="/assets/main/bookLike.svg" />
                        <HeartCnt>14</HeartCnt>
                    </IconWrapper>
                </BookBox>
            </Link>
        </>
    );
}
