interface BookData {
  bookName: string;
  img: string;
  studyName: Array<string>;
  host: Array<string>;
  memberCnt: Array<number>;
  startData: Array<string>;
  endData: Array<string>;
}

export default function BooksComponent(props: {bookData: BookData}): JSX.Element {
  return (
    <>
      {props.bookData ? props.bookData.bookName : '로오옹딩'}
    </>
  );
}
