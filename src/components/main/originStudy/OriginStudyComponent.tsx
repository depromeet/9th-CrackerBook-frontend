import {
  MainContainer
} from "../../../styles/main/BooksStyle";
import BookInfoComponent from "./BookInfoComponent";
import TitleComponent from "./TitleComponent";
import BookImgComponent from "./BookImgComponent";

type BookData = {
  bookName: string;
  img: string;
  studyName: string;
  host: string;
  memberCnt: number;
  startData: string;
  endData: string;
}

export default function OriginStudyComponent(props: { bookData: Array<BookData> }): JSX.Element {
  const data = props.bookData;
  return (
    <>
      {data.map((book, index) => {
        return (
          <MainContainer key={index}>
            <TitleComponent bookName={book.bookName} />
            <BookImgComponent img={book.img} />
            <BookInfoComponent bookInfo={book} />
          </MainContainer>
        );
      })}
    </>
  );
}


