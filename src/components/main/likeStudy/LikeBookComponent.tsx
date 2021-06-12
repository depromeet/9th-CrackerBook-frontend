import {
  BookBox,
  LikeDiv,
  LikeInfoWrapper,
  LikeRank,
  LikeStudyTitleWrapper,
  LikeStudyWrapper,
  RankBookImg,
  RankBookWrapper,
  StudyContent,
  StudyIcon,
  StudyTitle,
  TitleDiv,
  TotalView,
} from "../../../styles/main/BooksStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSetRecoilState } from "recoil";
import {
  CategoryTypeState,
  HeaderTextState,
} from "../../../state/main/mainState";
import styled from "styled-components";

export default function LikeBookComponent(): JSX.Element {
  return (
    <LikeStudyWrapper>
      <LikeTitleContainer />
      <RankBookWrapper>
        <Swiper spaceBetween={1} slidesPerView={2.5} initialSlide={0}>
          <SwiperSlide>
            <LikeInfoWrapper>
              <ImgWrapper>
                <ImgShadow />
                <Img src="/assets/main/categoryBook2.svg" loading="lazy" />
              </ImgWrapper>
              <LikeBookContainer />
              <LikeBookNameContainer />
              <LikeDateContainer />
              <LikeRank src="/assets/main/like1.svg" />
            </LikeInfoWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <LikeInfoWrapper>
              <ImgWrapper>
                <ImgShadow />
                <Img src="/assets/main/category1.svg" loading="lazy" />
              </ImgWrapper>
              <LikeBookContainer />
              <LikeBookNameContainer />
              <LikeDateContainer />
              <LikeRank src="/assets/main/like2.svg" />
            </LikeInfoWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <LikeInfoWrapper>
              <ImgWrapper>
                <ImgShadow />
                <Img src="/assets/main/categoryBook3.svg" loading="lazy" />
              </ImgWrapper>
              <LikeBookContainer />
              <LikeBookNameContainer />
              <LikeDateContainer />
              <LikeRank src="/assets/main/like3.svg" />
            </LikeInfoWrapper>
          </SwiperSlide>
        </Swiper>
      </RankBookWrapper>
    </LikeStudyWrapper>
  );
}

export function LikeBookContainer(): JSX.Element {
  return (
    <StudyContent isLike={true}>
      <StudyIcon src="/assets/main/miniBook.svg" />
      <LikeDiv>토론</LikeDiv>
      <StudyIcon src="/assets/main/member.svg" />
      <LikeDiv>멤버 3/6</LikeDiv>
    </StudyContent>
  );
}

export function LikeBookNameContainer(): JSX.Element {
  return <StudyTitle isLike={true}>한달 한권</StudyTitle>;
}

export function LikeTitleContainer(): JSX.Element {
  const setCategoryState = useSetRecoilState<string>(CategoryTypeState);
  const setHeaderState = useSetRecoilState<string>(HeaderTextState);
  return (
    <LikeStudyTitleWrapper className="main-content">
      <TitleDiv>좋아요가 많은 스터디</TitleDiv>
      <TotalView
        onClick={() => {
          setCategoryState("likeDetail");
          setHeaderState("좋아요가 많은 스터디");
        }}
      >
        전체보기 &gt;
      </TotalView>
    </LikeStudyTitleWrapper>
  );
}

export function LikeDateContainer(): JSX.Element {
  return <StudyContent isLike={true}>04.26~05.26 토 14:00</StudyContent>;
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
  width: 120px;
  height: 173px;
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
  height: 173px;
  width: 13.33px;
  background: linear-gradient(
    270deg,
    rgba(207, 207, 207, 0) 27.95%,
    rgba(136, 136, 136, 0.426) 100%
  );
  mix-blend-mode: multiply;
  z-index: 0;
`;
