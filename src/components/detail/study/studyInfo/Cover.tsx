import styled from "styled-components";
import {
  DetailBackButton,
  MainBookStyle,
  SearchButton,
} from "../../../../styles/detail/common/commonStyle";
import Link from "next/link";
import Color from "color-thief-react";
import { MainBookCover } from "../../../../styles/detail/book/bookDetailStyle";

export function Cover(): JSX.Element {
  return (
    <>
      <ImgWrapper>
        <ImgShadow />
        <Img src="/assets/main/greenBook.jpg" />
      </ImgWrapper>
      <StudyDetailCover />
    </>
  );
}

export function StudyDetailCover(): JSX.Element {
  return (
    <>
      <Color src="/assets/main/greenBook.jpg" format="rgbString">
        {({ data }) => (
          <StudyBookCover backgroundColor={data}>
            <Link href="/detail/book">
              <DetailBackButton src="/assets/detail/back.svg" />
            </Link>
            <Link href="/search">
              <SearchButton src="/assets/detail/magnifyingGlass.svg" />
            </Link>
          </StudyBookCover>
        )}
      </Color>
    </>
  );
}

const StudyBookCover = styled(MainBookStyle)`
  width: 375px;
  height: 490px;
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
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  width: 164px;
  height: 236px;
  border-radius: 2px 8px 8px 2px;
  position: absolute;
  top: 130px;
  left: 104px;
  z-index: 10;
  mix-blend-mode: multiply;
`;
const ImgShadow = styled.div`
  position: absolute;
  top: 130px;
  left: 104px;
  width: 164px;
  height: 236px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
