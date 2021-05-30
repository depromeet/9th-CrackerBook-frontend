import styled from "styled-components";
import { Title } from "../../../../../styles/detail/study/detailInfoStyle";

export function StudyIntro(): JSX.Element {
  return (
    <>
      <Title>스터디 소개</Title>
      <StudyContentWrapper>
        왜 꾸준히 쓰고 기록하는 건 어려울까요? <br />
        잘 기록할 수 있는 방법은 없을까요? <br />
        이 책은 개인의 기록부터 성장을 위한 기록까지 다양한 <br />
        기록의 방법들을 제안하며 구체적인 노하우를 전해줍니다. <br />
        첫문장의 시작, 당신의 이야기를 들려주세요. <br />
      </StudyContentWrapper>
    </>
  );
}

const StudyContentWrapper = styled.div`
  display: flex;
  justify-content: left;
  color: #222222;
  font-size: 14px;
  line-height: 20px;
`;
