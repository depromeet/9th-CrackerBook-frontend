import {
  NoticeContent,
  Title
} from "../../../../../styles/detail/study/detailInfoStyle";
import {
  HostContent1,
  NoticeBox,
  Profile,
  StudyContentCover
} from "../../../../../styles/detail/study/studyCommonStyle";
import { Wrapper } from "../../../../../styles/detail/common/commonStyle";
import styled from "styled-components";
import Link from "next/link";

export function StudyNotice(): JSX.Element {

  return (
    <>
      <StudyNoticeTitle />
      <Box />
    </>

  );
}

export function StudyNoticeTitle(): JSX.Element {
  return (
    <StudyIntroWrapper>
      <Title>
        스터디 공지
      </Title>
      <Link href="/notice">
        <TotalView>
          전체보기 &gt;
        </TotalView>
      </Link>
    </StudyIntroWrapper>
  );
}

export function Box(): JSX.Element {
  return (
    <NoticeBox>
      <Wrapper>
        <Profile src="/assets/main/surprised.svg" loading="lazy" />
        <HostWrapper>
          <HostContent1>빈센조</HostContent1>
          <StudyContentCover>
            <DateDiv>
              2021.05.05
            </DateDiv>
          </StudyContentCover>
        </HostWrapper>
      </Wrapper>

      <NoticeContent>
        안녕하세요 스터디장 빈센조입니다! <br />

        이번주는 원래 4장까지 읽어오기로 했지만, 3장 길이가 너무 많은 관계로 3장까지만 읽어오는걸로 하겠습니다 :-) <br />
        모두 다음주에 만나요!
      </NoticeContent>
    </NoticeBox>
  );
}

const StudyIntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 85px;
`;

const TotalView = styled.div`
  color: #999999;
  font-size: 14px;
  cursor: pointer;
`;

const HostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  justify-content: left;
`;

const DateDiv = styled.div`
  padding-top: 10px;
`;
