import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 39px;
  height: 51px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
`;
const ArrowLeft = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  line-height: 45px;
  left: 20px;
`;
const Progress = styled.svg`
  position: absolute;
  color: #ffd262;
  .progress-container {
    stroke: #f1f1f3;
  }
  .progress-content {
    stroke: #ffd262;
  }

  .progress-content > line {
    stroke-dasharray: 100%;
    stroke-dashoffset: ${(props: { dashoffset: number }) => props.dashoffset}%;
    animation: svg-progress 2s ease-out;
  }
  @keyframes svg-progress {
    0% {
      stroke-dashoffset: 100%;
    }
    100% {
      stroke-dashoffset: ${(props: { dashoffset: number }) =>
        props.dashoffset}%;
    }
  }
`;

export default function IndexComponent(props: {
  dashoffset: number;
}): JSX.Element {
  return (
    <>
      <HeaderWrapper>
        <ArrowLeft>
          <Link href="/main/books">
            <a>
              <img src="/assets/search/arrowleft.svg" />
            </a>
          </Link>
        </ArrowLeft>
        <div>스터디 주최</div>
      </HeaderWrapper>
      <Progress dashoffset={props.dashoffset} height="375" width="375">
        <g className="progress-container">
          <line x1="0" y1="0" x2="100%" y2="0" strokeWidth="2" />
        </g>
        <g className="progress-content">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            fill="transparent"
            strokeWidth="2"
          />
        </g>
      </Progress>
    </>
  );
}
