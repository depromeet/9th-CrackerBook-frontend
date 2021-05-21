import {
  LikeDiv,
  LikeInfoWrapper, LikeStudyTitleWrapper,
  LikeStudyWrapper,
  RankBookImg,
  RankBookWrapper, StudyContent, StudyIcon, StudyTitle,
  TitleDiv, TotalView
} from "../../../styles/main/BooksStyle";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LikeBookComponent(): JSX.Element {
  return (
    <LikeStudyWrapper>
      <LikeTitleContainer />
      <RankBookWrapper>
        <Swiper
          spaceBetween={1}
          slidesPerView={2.5}
          initialSlide={0}
        >
          <SwiperSlide>
            <LikeInfoWrapper>
              <RankBookImg src="/assets/main/exBook.jpg" loading="lazy" />
              <LikeBookContainer />
              <LikeBookNameContainer />
              <LikeDateContainer />
            </LikeInfoWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <LikeInfoWrapper>
              <RankBookImg src="/assets/main/exBook.jpg" loading="lazy" />
              <LikeBookContainer />
              <LikeBookNameContainer />
              <LikeDateContainer />
            </LikeInfoWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <LikeInfoWrapper>
              <RankBookImg src="/assets/main/exBook.jpg" loading="lazy"/>
              <LikeBookContainer />
              <LikeBookNameContainer />
              <LikeDateContainer />
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
  return (
    <LikeStudyTitleWrapper>
      <TitleDiv>좋아요가 많은 스터디</TitleDiv>
      <TotalView>전체보기 &gt;</TotalView>
    </LikeStudyTitleWrapper>
  );
}

export function LikeDateContainer(): JSX.Element {
  return <StudyContent isLike={true}>04.26~05.26 토 14:00</StudyContent>;
}
