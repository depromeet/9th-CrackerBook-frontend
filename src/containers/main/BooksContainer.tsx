import {
  BookBox,
  BookImg,
  TitleDiv,
  HeartCnt,
  HeartIconBookBox,
  IconWrapper,
  IconWrapperContent,
  StudyContent,
  StudyContentWrapper,
  StudyDiv,
  StudyHost,
  StudyIcon,
  StudyImg,
  StudyInfoWrapper,
  StudyProfile,
  StudyTitle,
  TitleWrapper,
  TotalView,
  LikeDiv,
  LikeStudyTitleWrapper,
  NewBoxWrapper,
  NewBookProfile,
  SmallBookImg,
  MoreBtn,
  DownImg, DropDown,
} from "../../styles/main/BooksStyle";
import {ThisBookContentWrapper} from "../../styles/detail/book/bookDetailStyle";
import {ModalWrapper} from "../../styles/detail/common/commonStyle";
import {Modal} from "../detail/common/commonContainer";
import {useEffect, useState} from "react";

interface BookData {
  bookName: string;
  img: string;
  studyName: string;
  host: string;
  memberCnt: number;
  startData: string;
  endData: string;
}

export function Title(props: { bookName: string }): JSX.Element {
  return (
    <>
      <TitleDiv>&apos;{props.bookName}&lsquo;의</TitleDiv>
      <TitleWrapper>
        <TitleDiv>스터디</TitleDiv>
        <TotalView>전체보기 &gt;</TotalView>
      </TitleWrapper>
    </>
  );
}

export function BookContainer(props: { img: string }): JSX.Element {
  return (
    <>
      <BookBox>
        <BookImg src={props.img} />
        <IconWrapper>
          <HeartIconBookBox src="/assets/main/bookLike.svg" />
          <HeartCnt>14</HeartCnt>
        </IconWrapper>
      </BookBox>
    </>
  );
}

export function BookInfoContainer(props: { bookInfo: BookData }): JSX.Element {
  const bookData = props.bookInfo;
  return (
    <>
      <StudyInfoWrapper>
        <StudyProfile>
          <StudyImg src="/assets/main/exBook.jpg" />
          <StudyHost>{bookData.host}</StudyHost>
        </StudyProfile>
        <StudyContentWrapper>
          <StudyContent isLike={false}>
            <StudyIcon src="/assets/main/bookIcon.svg" />
            <StudyDiv>토론</StudyDiv>
            <StudyIcon src="/assets/main/memberIcon.svg" />
            <div>멤버 3/6</div>
          </StudyContent>
          <StudyTitle isLike={false}>{bookData.studyName}</StudyTitle>
          <StudyContent isLike={false}>
            {bookData.startData} ~ {bookData.endData} 토 14:00
          </StudyContent>
        </StudyContentWrapper>
        <IconWrapperContent>
          <HeartIconBookBox src="/assets/main/heart.svg" />
          <HeartCnt>6</HeartCnt>
        </IconWrapperContent>
      </StudyInfoWrapper>
    </>
  );
}

export function LikeBookContainer(): JSX.Element {
  return (
    <StudyContent isLike={true}>
      <StudyIcon src="/assets/main/bookIcon.svg" />
      <LikeDiv>토론</LikeDiv>
      <StudyIcon src="/assets/main/memberIcon.svg" />
      <div>멤버 3/6</div>
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

export function BookStudyContainer(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const viewModal = (e) => {
    setPageX(e.pageX);
    setPageY(e.pageY);
    setIsOpen(!isOpen);
  }
  return (
    <LikeStudyTitleWrapper>
      <TitleDiv>새로 생긴 스터디</TitleDiv>
      <TotalView onClick={viewModal}> 모집중 <DropDown src='/assets/detail/dropDown.svg'/>
        {isOpen ? <Modal pageX={pageX} pageY={pageX} /> : ''}
      </TotalView>
    </LikeStudyTitleWrapper>
  );
}

export function StudyContainer(): JSX.Element {

  return (
      <LikeStudyTitleWrapper>
        <TitleDiv>새로 생긴 스터디</TitleDiv>
        <TotalView > 모집중 <DropDown src='/assets/detail/dropDown.svg'/> </TotalView>
      </LikeStudyTitleWrapper>
  );
}

export function NewStudyBox(): JSX.Element {
  return (
    <>
      <NewBoxWrapper>
        <NewBookProfile>
          <SmallBookImg src="/assets/main/exBook.jpg" />
        </NewBookProfile>
        <StudyContentWrapper>
          <StudyContent isLike={false}>
            <StudyIcon src="/assets/main/bookIcon.svg" />
            <StudyDiv>토론</StudyDiv>
            <StudyIcon src="/assets/main/memberIcon.svg" />
            <div>멤버 3/6</div>
          </StudyContent>
          <StudyTitle isLike={false}>직장인 북클럽</StudyTitle>
          <StudyContent isLike={false}>
            2021.04.26 ~ 05.21 토 14:00
          </StudyContent>
        </StudyContentWrapper>
        <IconWrapperContent>
          <HeartIconBookBox src="/assets/main/heart.svg" />
          <HeartCnt>6</HeartCnt>
        </IconWrapperContent>
      </NewBoxWrapper>
    </>
  );
}

export function ThisBookBox(): JSX.Element {
  return (
      <>
        <NewBoxWrapper>
          <ThisBookContentWrapper>
            <StudyContent isLike={false}>
              <StudyIcon src="/assets/main/bookIcon.svg" />
              <StudyDiv>토론</StudyDiv>
              <StudyIcon src="/assets/main/memberIcon.svg" />
              <div>멤버 3/6</div>
            </StudyContent>
            <StudyTitle isLike={false}>직장인 북클럽</StudyTitle>
            <StudyContent isLike={false}>
              2021.04.26 ~ 05.21 토 14:00
            </StudyContent>
          </ThisBookContentWrapper>
          <IconWrapperContent>
            <HeartIconBookBox src="/assets/main/heart.svg" />
            <HeartCnt>6</HeartCnt>
          </IconWrapperContent>
        </NewBoxWrapper>
      </>
  );
}

export function MoreButton(): JSX.Element {
  return (
    <MoreBtn>
      더 보기 <DownImg src="/assets/main/caretDown.svg" />
    </MoreBtn>
  );
}

export function LikeDateContainer(): JSX.Element {
  return <StudyContent isLike={true}>04.26~05.26 토 14:00</StudyContent>;
}
