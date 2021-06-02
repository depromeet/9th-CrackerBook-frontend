import Link from "next/link";
import {
  HeartCnt,
  HeartIconBookBox,
  IconWrapperContent,
  NewBoxWrapper,
  StudyContent,
  StudyDiv,
  StudyIcon,
  StudyTitle,
} from "../../../styles/main/BooksStyle";
import styled from "styled-components";

export default function ThisBookBoxComponent(): JSX.Element {
  return (
    <>
      <Link href="/detail/study/studyDetail">
        <NewBoxWrapper>
          <ThisBookContentWrapper>
            <StudyContent isLike={false}>
              <StudyIcon src="/assets/main/miniBook.svg" />
              <StudyDiv>토론</StudyDiv>
              <StudyIcon src="/assets/main/member.svg" />
              <StudyDiv>멤버 3/6</StudyDiv>
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
      </Link>
    </>
  );
}

const ThisBookContentWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;
