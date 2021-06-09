import {
  HeartCnt,
  HeartIconBookBox,
  IconWrapperContent,
  LikeInfoWrapper,
  NewBookProfile,
  NewBoxWrapper,
  SmallBookImg,
  StudyContent,
  StudyContentWrapper,
  StudyDiv,
  StudyIcon,
  StudyTitle,
} from "../../../styles/main/BooksStyle";
import styled from "styled-components";

export default function NewStudyBox(): JSX.Element {
  return (
    <>
      <NewBoxWrapper>
        <NewBookProfile>
          <ImgWrapper>
            <ImgShadow />
            <Img src="/assets/main/exBook.jpg" loading="lazy" />
          </ImgWrapper>
        </NewBookProfile>
        <StudyContentWrapper>
          <StudyContent isLike={false}>
            <StudyIcon src="/assets/main/miniBook.svg" loading="lazy" />
            <StudyDiv>토론</StudyDiv>
            <StudyIcon src="/assets/main/member.svg" loading="lazy" />
            <StudyDiv>멤버 3/6</StudyDiv>
          </StudyContent>
          <StudyTitle isLike={false}>미움 받을 용기</StudyTitle>
          <StudyContent isLike={false}>
            2021.04.26 ~ 05.21 토 14:00
          </StudyContent>
        </StudyContentWrapper>
        <IconWrapperContent>
          <HeartIconBookBox src="/assets/main/heart.svg" loading="lazy" />
          <HeartCnt>6</HeartCnt>
        </IconWrapperContent>
      </NewBoxWrapper>
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
  width: 51px;
  height: 74px;
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
  height: 74px;
  width: 13.33px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
