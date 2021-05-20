import {
  BookImg,
  MainBookCover,
  TitleInfoWrapper
} from "../../../styles/detail/book/bookDetailStyle";
import {
  BackButton,
  BookDetail,
  BookDetailWrapper,
  SearchButton,
  Title, TitleInner
} from "../../../styles/detail/common/commonStyle";
import Link from "next/link";

export function BookCover(): JSX.Element {
  return (
    <MainBookCover>
      <Link href="/main">
        <BackButton src="/assets/detail/back.svg" />
      </Link>
      <Link href="/search">
        <SearchButton src="/assets/detail/magnifyingGlass.svg" />
      </Link>
      <BookImg src="/assets/main/exBook.jpg" />
    </MainBookCover>
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
