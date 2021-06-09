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

const thisBookList = [
  {
    studyType: "토론",
    cnt: "3/7",
    studyName: "직장인 북클럽",
    date: "2021.04.26 ~ 05.21 수 14:00",
    heartCnt: 6,
  },
  {
    studyType: "글쓰기",
    cnt: "2/5",
    studyName: "겁내지 않고 이메일 작성하는 방법",
    date: "2021.06.26 ~ 06.29 일 14:00",
    heartCnt: 16,
  },
  {
    studyType: "토론",
    cnt: "5/9",
    studyName: "‘일센스’가 있는 사람이 되기 위해서는?",
    date: "2021.07.06 ~ 08.21 토 15:00",
    heartCnt: 9,
  },
];

export default function ThisBookBoxComponent(): JSX.Element {
  return (
    <>
      {thisBookList.map((thisbook, index) => {
        return (
          <>
            <Link href="/detail/study/studyDetail" key={index}>
              <NewBoxWrapper>
                <ThisBookContentWrapper>
                  <StudyContent isLike={false}>
                    <StudyIcon src="/assets/main/miniBook.svg" />
                    <StudyDiv>{thisbook.studyType}</StudyDiv>
                    <StudyIcon src="/assets/main/member.svg" />
                    <StudyDiv>멤버 {thisbook.cnt}</StudyDiv>
                  </StudyContent>
                  <StudyTitle isLike={false}>{thisbook.studyName}</StudyTitle>
                  <StudyContent isLike={false}>{thisbook.date}</StudyContent>
                </ThisBookContentWrapper>
                <IconWrapperContent>
                  <HeartIconBookBox src="/assets/main/heart.svg" />
                  <HeartCnt>{thisbook.heartCnt}</HeartCnt>
                </IconWrapperContent>
              </NewBoxWrapper>
            </Link>
          </>
        );
      })}
    </>
  );
}

const ThisBookContentWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;
