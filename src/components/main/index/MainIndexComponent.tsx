import {
  BookBox,
  BookImg, DownImg, DropDown,
  HeartCnt,
  HeartIconBookBox,
  IconWrapper, IconWrapperContent, LikeDiv,
  LikeStudyTitleWrapper,
  MainContainer, MoreBtn, NewBookProfile, NewBoxWrapper,
  SmallBookImg,
  StudyContent,
  StudyContentWrapper,
  StudyDiv,
  StudyHost,
  StudyIcon,
  StudyImg,
  StudyInfoWrapper,
  StudyProfile, StudyTitle,
  TitleDiv,
  TitleWrapper,
  TotalView,
} from "../../../styles/main/BooksStyle";
import Link from "next/link";
import {useState} from "react";
import {Modal} from "../../detail/common/CommonComponent";
import {ThisBookContentWrapper} from "../../../styles/detail/book/bookDetailStyle";
import BooksHeaderComponent from "../header/BooksHeaderComponent";
import LikeBookComponent from "../likeStudy/LikeBookComponent";
import NewStudyComponent from "../newStudy/NewStudyComponent";
import OriginStudyComponent from "../originStudy/OriginStudyComponent";

interface BookData {
  bookName: string;
  img: string;
  studyName: string;
  host: string;
  memberCnt: number;
  startData: string;
  endData: string;
}

export default function MainIndexComponent(props: {
  bookData: Array<BookData>;
}): JSX.Element {
  const data = props.bookData;
  return (
    <>
      {!data ? (
        <div>로딩중</div>
      ) : (
        <>
          <BooksHeaderComponent/>
          <OriginStudyComponent bookData = {data}/>
          <LikeBookComponent/>
          <NewStudyComponent />
        </>
      )}
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
  const [isOpen, setIsOpen] = useState(false);
  const [pagePosition, setPagePosition] = useState({ pageX: 0, pageY: 0 });
  const viewModal = (e) => {
    setPagePosition({ pageX: e.clientX, pageY: e.clientY - 10 });
    setIsOpen(!isOpen);
  };
  return (
      <LikeStudyTitleWrapper>
        <TitleDiv>이 책의 스터디</TitleDiv>
        <TotalView onClick={viewModal}>
          {" "}
          모집중 <DropDown src="/assets/detail/dropDown.svg" />
        </TotalView>
        {isOpen ? <Modal modalPosition={pagePosition} /> : ""}
      </LikeStudyTitleWrapper>
  );
}

export function StudyContainer(): JSX.Element {
  return (
      <LikeStudyTitleWrapper>
        <TitleDiv>새로 생긴 스터디</TitleDiv>
        <TotalView>
          {" "}
          모집중 <DropDown src="/assets/detail/dropDown.svg" />{" "}
        </TotalView>
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

export function MoreButton(props: {backgroundColor: string}): JSX.Element {
  return (
      <MoreBtn background={props.backgroundColor}>
        더 보기 <DownImg src="/assets/main/caretDown.svg" />
      </MoreBtn>
  );
}

export function LikeDateContainer(): JSX.Element {
  return <StudyContent isLike={true}>04.26~05.26 토 14:00</StudyContent>;
}
