import { StudyIntroTitle } from "../../../../../styles/detail/study/detailInfoStyle";
import styled from "styled-components";

export const GoStudyDetail = (): JSX.Element => {
  return (
    <>
      <StudyIntroTitle>책 상세정보</StudyIntroTitle>
      <BookBox />
    </>
  );
};

export const BookBox = (): JSX.Element => {
  return (
    <BookBoxStyle>
      <BookImg src="/assets/main/exBook.jpg" loading="lazy" />
    </BookBoxStyle>
  );
};

const BookBoxStyle = styled.div`
  border-radius: 10px 10px 10px 10px;
  background-color: #09a969;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 180px 20px;
  width: 335px;
  height: 226px;
`;

const BookImg = styled.img`
  width: 100px;
  height: 144px;
  border-radius: 2px 8px 8px 2px;
`;
