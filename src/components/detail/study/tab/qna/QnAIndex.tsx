import { InfoWrapper } from "../../../../../styles/detail/study/studyCommonStyle";
import { RegitQuestion } from "./RegitQuestion";
import { Question } from "./Question";
import { Answer } from "./Answer";
import styled from "styled-components";

const QnAData = [
  {
    question: {
      img: "/assets/main/surprised.svg",
      name: "제이호",
      date: "2021.04.12",
      publish: "공개",
      question: "하이 ~ HI ~~~ 숙제가 있나요",
    },
    answer: {
      img: "/assets/main/surprised.svg",
      name: "빈센조",
      date: "2021.04.15",
      answer:
        "‘눈치껏 못 배웁니다, 일센스’ 책을 한 챕터씩 읽어오는 것이 숙제입니다. 글 쓰는 것은 스터디 시간에 같이 하니 부담 없으셔도 됩니다. 관심 가져주셔서 감사합니다.",
    },
  },
  {
    question: {
      img: "/assets/main/surprised.svg",
      name: "쿨제이",
      date: "2021.05.15",
      publish: "비공개",
      question: "비공개입니다.",
    },
    answer: {
      img: "/assets/main/surprised.svg",
      name: "빈센조",
      date: "2021.04.15",
      answer: "비공개입니다.",
    },
  },
];
export const QnAIndex = (): JSX.Element => {
  return (
    <InfoWrapper>
      <RegitQuestion />
      {QnAData.map((qna, index) => {
        return (
          <QnAWrapper key={index}>
            <Question question={qna.question} />
            <Answer answer={qna.answer} />
          </QnAWrapper>
        );
      })}
    </InfoWrapper>
  );
};

const QnAWrapper = styled.div`
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 32px;
  margin-bottom: 32px;
`;
