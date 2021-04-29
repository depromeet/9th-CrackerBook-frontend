import {
  ListHeadWrapper,
  ListHeadTitle,
  ListHeadDetail,
  DetailLink,
  BookListWrapper,
  BookTitle,
  StudyListWrapper,
  StudyLiLink,
  StudyInfoWrapper,
  StudyProfile,
  StudyImg,
  StudyImgShadow,
  StudyContentWrapper,
  StudyContent,
  StudyDate,
  StudyIcon,
  StudyIconText,
  StudyDiv,
  StudySubDiv,
  StudyTitle,
  BookProfile,
  BookImgShadow,
  BookLikeImgBorder,
  BookLikeImg,
  BookImg,
  ListFooterWrapper,
  ListFooterIconBox,
} from "../../../styles/search/detailStyle";

import Link from "next/link";

export default function DetailContainer(): JSX.Element {
  return (
    <>
      <>
        <ListHeadWrapper>
          <ListHeadTitle>책</ListHeadTitle>
          <ListHeadDetail>전체보기</ListHeadDetail>
          <DetailLink>
            <Link href="/login/setNicname">
              <a>
                <img src="/assets/search/detaillink.svg" />
              </a>
            </Link>
          </DetailLink>
        </ListHeadWrapper>
        <BookListWrapper>
          <ul>
            <StudyInfoWrapper>
              <StudyProfile>
                <StudyImgShadow></StudyImgShadow>
                <StudyImg src="/assets/main/exBook.jpg" />
              </StudyProfile>
              <StudyContentWrapper>
                <BookTitle>사용자의 마음을 움직이는 UX 디자인의 힘</BookTitle>
                <StudyContent>
                  <StudyDiv>저자</StudyDiv>
                  <StudySubDiv>김동후</StudySubDiv>
                </StudyContent>
                <StudyContent>
                  <StudyDiv>출판</StudyDiv>
                  <StudySubDiv>맹그로브숲</StudySubDiv>
                  <StudySubDiv>2021.02.22</StudySubDiv>
                </StudyContent>
              </StudyContentWrapper>
              <BookLikeImgBorder src="/assets/search/bookLikeBorder.svg" />
              <BookLikeImg src="/assets/search/bookLike.svg" />
            </StudyInfoWrapper>
          </ul>
          <ul>
            <StudyInfoWrapper>
              <StudyProfile>
                <StudyImgShadow></StudyImgShadow>
                <StudyImg src="/assets/main/exBook.jpg" />
              </StudyProfile>
              <StudyContentWrapper>
                <BookTitle>사용자의 마음을 움직이는 UX 디자인의 힘</BookTitle>
                <StudyContent>
                  <StudyDiv>저자</StudyDiv>
                  <StudySubDiv>저자</StudySubDiv>
                </StudyContent>
                <StudyContent>
                  <StudyDiv>출판</StudyDiv>
                  <StudySubDiv>저자</StudySubDiv>
                  <StudySubDiv>2021.02.22</StudySubDiv>
                </StudyContent>
              </StudyContentWrapper>
              <BookLikeImgBorder src="/assets/search/bookLikeBorder.svg" />
              <BookLikeImg src="/assets/search/bookLike.svg" />
            </StudyInfoWrapper>
          </ul>
        </BookListWrapper>
      </>

      <>
        <ListHeadWrapper>
          <ListHeadTitle>스터디</ListHeadTitle>
          <ListHeadDetail>전체보기</ListHeadDetail>
          <DetailLink>
            <Link href="/login/setNicname">
              <a>
                <img src="/assets/search/detaillink.svg" />
              </a>
            </Link>
          </DetailLink>
        </ListHeadWrapper>
        <StudyListWrapper>
          <StudyLiLink>
            <BookProfile>
              <BookImgShadow></BookImgShadow>
              <BookImg src="/assets/main/exBook.jpg" />
            </BookProfile>
            <StudyContent>
              <StudyIcon src="/assets/main/bookIcon.svg" />
              <StudyIconText>토론</StudyIconText>
              <StudyIcon src="/assets/main/memberIcon.svg" />
              <StudyIconText>멤버 3/6</StudyIconText>
            </StudyContent>
            <StudyTitle>UX디자인 실습하기</StudyTitle>
            <StudyDate>04.26~05.26 토 14:00</StudyDate>
          </StudyLiLink>
          <StudyLiLink>
            <BookProfile>
              <BookImgShadow></BookImgShadow>
              <BookImg src="/assets/main/exBook.jpg" />
            </BookProfile>
            <StudyContent>
              <StudyIcon src="/assets/main/bookIcon.svg" />
              <StudyIconText>토론</StudyIconText>
              <StudyIcon src="/assets/main/memberIcon.svg" />
              <StudyIconText>멤버 3/6</StudyIconText>
            </StudyContent>
            <StudyTitle>UX디자인 실습하기</StudyTitle>
            <StudyDate>04.26~05.26 토 14:00</StudyDate>
          </StudyLiLink>
          <StudyLiLink>
            <BookProfile>
              <BookImgShadow></BookImgShadow>
              <BookImg src="/assets/main/exBook.jpg" />
            </BookProfile>
            <StudyContent>
              <StudyIcon src="/assets/main/bookIcon.svg" />
              <StudyIconText>토론</StudyIconText>
              <StudyIcon src="/assets/main/memberIcon.svg" />
              <StudyIconText>멤버 3/6</StudyIconText>
            </StudyContent>
            <StudyTitle>UX디자인 실습하기</StudyTitle>
            <StudyDate>04.26~05.26 토 14:00</StudyDate>
          </StudyLiLink>
          <StudyLiLink>
            <BookProfile>
              <BookImgShadow></BookImgShadow>
              <BookImg src="/assets/main/exBook.jpg" />
            </BookProfile>
            <StudyContent>
              <StudyIcon src="/assets/main/bookIcon.svg" />
              <StudyIconText>토론</StudyIconText>
              <StudyIcon src="/assets/main/memberIcon.svg" />
              <StudyIconText>멤버 3/6</StudyIconText>
            </StudyContent>
            <StudyTitle>UX디자인 실습하기</StudyTitle>
            <StudyDate>04.26~05.26 토 14:00</StudyDate>
          </StudyLiLink>
        </StudyListWrapper>
      </>

      <ListFooterWrapper>
        더 보기
        <ListFooterIconBox>
          <img src="/assets/search/arrowdown.svg" />
        </ListFooterIconBox>
      </ListFooterWrapper>
    </>
  );
}
