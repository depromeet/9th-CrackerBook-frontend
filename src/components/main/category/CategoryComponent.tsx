import styled from "styled-components";
import BookComponent from "./BookComponent";

export default function CategoryComponent(props: {
  type: string;
}): JSX.Element {
  // api 연동 되었을 때 타입에 맞게 fetch 해오기
  return (
    <Wrapper>
      <BookWrapper>
        <BookComponent />
        <BookInfoWrapper>
          <IconImg src="/assets/main/miniBook.svg" />
          <BookInfo1>토론</BookInfo1>
          <IconImg src="/assets/main/member.svg" />
          <BookInfo1>멤버 3/6</BookInfo1>
        </BookInfoWrapper>
        <BookInfo2>UX디자인 실습하기</BookInfo2>
        <BookInfo3>04.26 ~ 0.5.21 토 14:00</BookInfo3>
      </BookWrapper>
      <BookWrapper>
        <BookComponent />
        <BookInfoWrapper>
          <IconImg src="/assets/main/miniBook.svg" />
          <BookInfo1>토론</BookInfo1>
          <IconImg src="/assets/main/member.svg" />
          <BookInfo1>멤버 3/6</BookInfo1>
        </BookInfoWrapper>
        <BookInfo2>UX디자인 실습하기</BookInfo2>
        <BookInfo3>04.26 ~ 0.5.21 토 14:00</BookInfo3>
      </BookWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 32px 30px 180px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
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
  padding-right: 10px;
`;

const BookInfo2 = styled.div`
  padding-top: 4px;
`;

const BookInfo3 = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  color: #777777;
  padding-top: 10px;
`;
