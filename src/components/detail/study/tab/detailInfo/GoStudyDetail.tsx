import { StudyIntroTitle } from "../../../../../styles/detail/study/detailInfoStyle";
import styled from "styled-components";
import { MainBookCover } from "../../../../../styles/detail/book/bookDetailStyle";
import Color from "color-thief-react";

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
    <Color src="/assets/main/greenBook.jpg" format="rgbString">
      {({ data }) => (
        <BookBoxStyle backgroundColor={data}>
          <ImgWrapper>
            <ImgShadow />
            <Img src="/assets/main/greenBook.jpg" loading="lazy" />
          </ImgWrapper>
        </BookBoxStyle>
      )}
    </Color>
  );
};

const BookBoxStyle = styled.div<{ backgroundColor: string }>`
  border-radius: 10px 10px 10px 10px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 180px 20px;
  width: 335px;
  height: 226px;
`;

// 공통화 되면 지우기
const ImgWrapper = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
  z-index: 1;
`;

const Img = styled.img`
  width: 100px;
  height: 144px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0 5px 5px 0;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
`;
const ImgShadow = styled.div`
  position: absolute;
  top: 0;
  height: 115px;
  width: 13.33px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
