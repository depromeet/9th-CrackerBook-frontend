import styled from "styled-components";
import BookComponent from "./BookComponent";

const bookDataList = [
  {
    img: "/assets/main/categoryBook2.svg",
    studyName: "UI디자인 실습하기",
    memberCnt: "3/6",
    startData: "05.21",
    endData: "05.21 토 14:00",
    isLike: false,
    rank: 1,
  },
  {
    img: "/assets/main/category1.svg",
    studyName: "도메인 주도 설계 철저 입문",
    memberCnt: "3/7",
    startData: "05.21",
    endData: "05.28 토 14:00",
    profile: "/assets/main/profilePuple.svg",
    rank: 2,
  },
  {
    img: "/assets/main/categoryBook3.svg",
    studyName: "UX/Ui 심리 스터디",
    memberCnt: "8/9",
    startData: "05.21",
    endData: "06.21 토 14:00",
    profile: "/assets/main/profileBlue.svg",
    rank: 3,
  },
  {
    img: "/assets/main/categoryBook4.svg",
    studyName: "바깥은 여름",
    memberCnt: "8/9",
    startData: "05.21",
    endData: "06.21 토 14:00",
    profile: "/assets/main/profileBlue.svg",
    rank: 4,
  },
  {
    img: "/assets/main/categoryBook5.svg",
    studyName: "미라클 모닝",
    memberCnt: "8/9",
    startData: "05.21",
    endData: "06.21 토 14:00",
    profile: "/assets/main/profileBlue.svg",
    rank: 5,
  },
  {
    img: "/assets/main/categoryBook6.svg",
    studyName: "다양성을 엮는 스터디",
    memberCnt: "8/9",
    startData: "05.21",
    endData: "06.21 토 14:00",
    profile: "/assets/main/profileBlue.svg",
    rank: 6,
  },
  {
    img: "/assets/main/categoryBook7.svg",
    studyName: "미래 스터디",
    memberCnt: "8/9",
    startData: "05.21",
    endData: "06.21 토 14:00",
    profile: "/assets/main/profileBlue.svg",
    rank: 7,
  },
  {
    img: "/assets/main/categoryBook8.svg",
    studyName: "라페르노",
    memberCnt: "8/9",
    startData: "05.21",
    endData: "06.21 토 14:00",
    profile: "/assets/main/profileBlue.svg",
    rank: 8,
  },
  {
    img: "/assets/main/categoryBook9.svg",
    studyName: "야나두 영어 스터디",
    memberCnt: "8/9",
    startData: "05.21",
    endData: "06.21 토 14:00",
    profile: "/assets/main/profileBlue.svg",
    rank: 8,
  },
  {
    img: "/assets/main/categoryBook10.svg",
    studyName: "달리기 스터디",
    memberCnt: "8/9",
    startData: "05.21",
    endData: "06.21 토 14:00",
    profile: "/assets/main/profileBlue.svg",
    rank: 8,
  },
];

export default function CategoryComponent(props: {
  type: string;
}): JSX.Element {
  // api 연동 되었을 때 타입에 맞게 fetch 해오기
  return (
    <Wrapper>
      {bookDataList.map((book, index) => {
        const bookName =
          book.studyName.length > 11
            ? book.studyName.slice(0, 11) + "..."
            : book.studyName;
        return (
          <>
            <BookWrapper key={index}>
              <BookComponent
                rank={book.rank}
                img={book.img}
                categoryType={props.type}
              />
              <BookInfoWrapper>
                <IconImg src="/assets/main/miniBook.svg" />
                <BookInfo1>토론</BookInfo1>
                <IconImg src="/assets/main/member.svg" />
                <BookInfo1>멤버 {book.memberCnt}</BookInfo1>
              </BookInfoWrapper>
              <BookInfo2>{bookName}</BookInfo2>
              <BookInfo3>
                {book.startData} ~ {book.endData}
              </BookInfo3>
            </BookWrapper>
          </>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 43px 180px 43px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 126px;
  padding-top: 36px;
`;

const BookInfoWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 10px;
`;

const IconImg = styled.img`
  width: 18px;
  height: 18px;
  padding-right: 5px;
`;

const BookInfo1 = styled.div`
  color: #677ac7;
  font-size: 12px;
  padding-right: 7px;
`;

const BookInfo2 = styled.div`
  padding-top: 4px;
  font-size: 13px;
  font-weight: 400;
`;

const BookInfo3 = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 10px;
  color: #777777;
  padding-top: 10px;
`;
