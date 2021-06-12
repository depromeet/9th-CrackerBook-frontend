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

type StudyInfo = {
  studyName: string;
  startDate: string;
  endDate: string;
  memberCnt: string;
  imgPath: string;
  studyType: string;
};
export default function NewStudyBox(props: { study: StudyInfo }): JSX.Element {
  const studyData = props.study;
  const studyName =
    studyData.studyName.length > 13
      ? studyData.studyName.slice(0, 13) + "..."
      : studyData.studyName;
  return (
    <>
      <NewBoxWrapper>
        <NewBookProfile>
          <ImgWrapper>
            <ImgShadow />
            <Img src={studyData.imgPath} loading="lazy" />
          </ImgWrapper>
        </NewBookProfile>
        <StudyContentWrapper>
          <StudyContent isLike={false}>
            <StudyIcon src="/assets/main/miniBook.svg" loading="lazy" />
            <StudyDiv>토론</StudyDiv>
            <StudyIcon src="/assets/main/member.svg" loading="lazy" />
            <StudyDiv>멤버 {studyData.memberCnt}</StudyDiv>
          </StudyContent>
          <StudyTitle isLike={false}>{studyName}</StudyTitle>
          <StudyContent isLike={false}>
            {studyData.startDate} ~ {studyData.endDate}
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
