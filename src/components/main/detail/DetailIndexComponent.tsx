import BookImgComponent from "../originStudy/BookImgComponent";
import styled from "styled-components";
import BookInfoComponent from "../originStudy/BookInfoComponent";

export default function DetailIndexComponent(): JSX.Element {
  const book = {
    bookName: "데이터 분석하는 디자이너 되기",
    img: "/assets/main/exBook.jpg",
    studyName: "같이 포트폴리오 만들어요",
    host: "데이지",
    memberCnt: 3,
    startData: "2021.05.21",
    endData: "05.29",
  };
  return (
    <BookDetailWrapper>
      <BookImgComponent img="/assets/main/exBook.jpg" />
      <BookInfoComponent bookInfo={book} />
    </BookDetailWrapper>
  );
}

const BookDetailWrapper = styled.div`
  padding: 20px;
`;
