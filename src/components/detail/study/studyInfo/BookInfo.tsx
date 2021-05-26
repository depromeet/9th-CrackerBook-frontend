import { TitleStudyInfoWrapper } from "../../../../styles/detail/study/studyCommonStyle";
import {
  BookDetail,
  BookDetailWrapper,
  Title,
  TitleInner,
} from "../../../../styles/detail/common/commonStyle";
import { HostBoxContainer } from "./HostBox";

export function BookInfo(): JSX.Element {
  return (
    <TitleStudyInfoWrapper>
      <TitleInner>
        <Title>눈치껏 못 배웁니다, 일센스</Title>
        <BookDetailWrapper>
          <BookDetail> 공여사들 저 |</BookDetail>
          <BookDetail> 21세기북스 |</BookDetail>
          <BookDetail> 2021. 04. 14 </BookDetail>
        </BookDetailWrapper>
      </TitleInner>
      <HostBoxContainer />
    </TitleStudyInfoWrapper>
  );
}
