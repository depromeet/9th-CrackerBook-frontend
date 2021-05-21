import Link from "next/link";
import { BookBox, HeartCnt, HeartIconBookBox, IconWrapper } from "../../../styles/main/BooksStyle";
import styled from "styled-components";

export default function BookImgComponent(props: { img: string }): JSX.Element {
  return (
    <>
      <Link href="/detail/book">
        <BookBox>
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
`;

const Img = styled.img`
  height: 173px;
  width: 115px;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0 5px 5px 0;
  background: linear-gradient(270deg,
  rgba(207, 207, 207, 0) 27.95%,
  rgba(136, 136, 136, 0.426) 100%);
  mix-blend-mode: multiply;
`;
const ImgShadow = styled.div`
  position: absolute;
  top: 0;
  height: 115px;
  width: 13.33px;
  background: linear-gradient(270deg,
  rgba(207, 207, 207, 0) 27.95%,
  rgba(136, 136, 136, 0.426) 100%);
  mix-blend-mode: multiply;
  z-index: 0;
`;
