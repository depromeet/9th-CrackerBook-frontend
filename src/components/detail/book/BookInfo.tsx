import {
  BookImg,
  MainBookCover,
  TitleInfoWrapper,
} from "../../../styles/detail/book/bookDetailStyle";
import {
  BookDetail,
  BookDetailWrapper,
  DetailBackButton,
  SearchButton,
  Title,
  TitleInner,
} from "../../../styles/detail/common/commonStyle";
import Link from "next/link";
import styled from "styled-components";
import Color from "color-thief-react";

export function BookCover(): JSX.Element {
  return (
    <>
      <Color src="/assets/main/greenBook.jpg" format="rgbString">
        {({ data }) => (
          <MainBookCover backgroundColor={data}>
            <Link href="/main">
              <DetailBackButton src="/assets/detail/back.svg" />
            </Link>
            <Link href="/search">
              <SearchButton src="/assets/detail/magnifyingGlass.svg" />
            </Link>
            <ImgWrapper>
              <ImgShadow />
              <Img src="/assets/main/greenBook.jpg" />
            </ImgWrapper>
          </MainBookCover>
        )}
      </Color>
    </>
  );
}

export function BookInfo(): JSX.Element {
  return (
    <TitleInfoWrapper>
      <TitleInner>
        <Title>눈치껏 못 배웁니다, 일센스</Title>
        <BookDetailWrapper>
          <BookDetail> 공여사들 저 |</BookDetail>
          <BookDetail> 21세기북스 |</BookDetail>
          <BookDetail> 2021. 04. 14 </BookDetail>
        </BookDetailWrapper>
      </TitleInner>
    </TitleInfoWrapper>
  );
}

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
  height: 173px;
  width: 115px;
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
