import styled from "styled-components";
import {
  DetailBackButton,
  MainBookStyle,
  SearchButton,
} from "../../../../styles/detail/common/commonStyle";
import Link from "next/link";

export function Cover(): JSX.Element {
  return (
    <>
      <StudyBookImg src="/assets/main/exBook.jpg" />
      <StudyDetailCover />
    </>
  );
}

export function StudyDetailCover(): JSX.Element {
  return (
    <>
      <StudyBookCover>
        <Link href="/detail/book">
          <DetailBackButton src="/assets/detail/back.svg" />
        </Link>
        <Link href="/search">
          <SearchButton src="/assets/detail/magnifyingGlass.svg" />
        </Link>
      </StudyBookCover>
    </>
  );
}

const StudyBookImg = styled.img`
  width: 164px;
  height: 236px;
  border-radius: 2px 8px 8px 2px;
  position: absolute;
  top: 130px;
  left: 104px;
  z-index: 10;
`;

const StudyBookCover = styled(MainBookStyle)`
  width: 375px;
  height: 490px;
`;
