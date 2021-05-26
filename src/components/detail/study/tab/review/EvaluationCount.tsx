import styled from "styled-components";

export function EvaluationCount(): JSX.Element {
  return (
    <>
      <EvaluationIcon />
      <TotalReview />
    </>
  );
}

export function EvaluationIcon(): JSX.Element {
  const evaluationList = ["아쉬웠어요", "좋아요", "최고에요"];
  const evaluationCnt = ["1건", "5건", "10건"];
  const evaluationIcon = [
    "/assets/detail/sorry.svg",
    "/assets/detail/like.svg",
    "/assets/detail/best.svg",
  ];
  return (
    <IconWrapper>
      {evaluationList.map((evaluation, index) => {
        return (
          <IconBox key={index}>
            <Icon src={evaluationIcon[index]} />
            <Evaluation>{evaluation}</Evaluation>
            <EvaluationCnt>{evaluationCnt[index]}</EvaluationCnt>
          </IconBox>
        );
      })}
    </IconWrapper>
  );
}

export function TotalReview(): JSX.Element {
  return (
    <>
      <TotalText>총 22건의 후기가 있어요</TotalText>
    </>
  );
}

const IconWrapper = styled.div`
  padding: 40px 39px 32px 39px;
  display: flex;
  justify-content: space-around;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Evaluation = styled.div`
  color: #222222;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

const EvaluationCnt = styled.div`
  color: #999999;
  text-align: center;
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

const TotalText = styled.div`
  color: #777777;
  padding-top: 32px;
  padding-bottom: 32px;
`;
