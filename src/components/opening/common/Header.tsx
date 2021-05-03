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
  border-bottom: 2px solid #ffd262;
`;
const ArrowLeft = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  line-height: 45px;
  left: 20px;
  font-size: 19px;
`;
const Progress = styled.svg`
  border-radius: 7px;
  color: #35495e;
  .progress-container {
    stroke: #eee;
  }
  .progress-content {
    stroke: #35495e;
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
    <HeaderWrapper>
      <ArrowLeft>
        <Link href="/main/books">
          <a>
            <img src="/assets/search/arrowleft.svg" />
          </a>
        </Link>
      </ArrowLeft>
      <div>스터디 개설</div>
      <Progress dashoffset={props.dashoffset} height="150" width="150">
        <g className="progress-container">
          <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="20" />
        </g>
        <g className="progress-content">
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            fill="transparent"
            strokeWidth="20"
          />
        </g>
      </Progress>
    </HeaderWrapper>
  );
}
