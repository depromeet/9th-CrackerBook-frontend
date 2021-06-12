import BookImgComponent from "../originStudy/BookImgComponent";
import styled from "styled-components";
import BookInfoComponent from "../originStudy/BookInfoComponent";

export default function DetailIndexComponent(): JSX.Element {
  const bookList = [
    {
      studyName: "사회초년생을 위한 직팁",
      host: "데이지",
      memberCnt: 3,
      startData: "2021.05.21",
      endData: "05.29",
      profile: "/assets/main/profile2.svg",
    },
    {
      studyName: "'일센스'가 있는 사람이 되기 위해",
      host: "이지지",
      memberCnt: 3,
      startData: "2021.05.21",
      endData: "05.29",
      profile: "/assets/main/profileGreen.svg",
    },
    {
      studyName: "사회초년생을 위한 직팁",
      host: "오이지",
      memberCnt: 3,
      startData: "2021.05.21",
      endData: "05.29",
      profile: "/assets/main/profileOrange.svg",
    },
    {
      studyName: "'일센스'가 있는 사람이 되기 위해",
      host: "아지지",
      memberCnt: 3,
      startData: "2021.05.21",
      endData: "05.29",
      profile: "/assets/main/profilePuple.svg",
    },
  ];
  return (
    <BookDetailWrapper>
      <BookImgComponent img="/assets/main/greenBook.jpg" />
      {bookList.map((book) => {
        return (
          <>
            <BookInfoComponent bookInfo={book} />
          </>
        );
      })}
    </BookDetailWrapper>
  );
}

const BookDetailWrapper = styled.div`
  padding: 20px;
  margin-bottom: 100px;
`;
