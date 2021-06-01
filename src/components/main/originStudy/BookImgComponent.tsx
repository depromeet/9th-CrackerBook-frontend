import Link from "next/link";
import {
  BookBox,
  HeartCnt,
  HeartIconBookBox,
  IconWrapper,
} from "../../../styles/main/BooksStyle";
import styled from "styled-components";
import Color from "color-thief-react";

export default function BookImgComponent(props: { img: string }): JSX.Element {
  return (
    <>
      <Color src={props.img} format="rgbString">
        {({ data }) => (
          <Link href="/detail/book">
            <BookBox backgroundColor={data}>
              <ImgWrapper>
                <ImgShadow />
                <Img src={props.img} />
              </ImgWrapper>
              <IconWrapper>
                <HeartIconBookBox src="/assets/main/bookLike.svg" />
                <HeartCnt>14</HeartCnt>
              </IconWrapper>
            </BookBox>
          </Link>
        )}
      </Color>
    </>
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
