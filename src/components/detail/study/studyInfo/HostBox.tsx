import {
  HostContent1,
  Profile,
  StudyContentCover,
} from "../../../../styles/detail/study/studyCommonStyle";
import styled from "styled-components";
import { Box } from "../../../../styles/detail/common/commonStyle";

export function HostBoxContainer(): JSX.Element {
  return (
    <HostBox>
      <Profile src="/assets/detail/profileIcon.svg" />
      <div>
        <HostContentCover>
          <HostContent1>빈센조</HostContent1>
        </HostContentCover>
        <StudyContentCover>
          <div>활동배지</div>
          <Number>7</Number>
          <Bar>|</Bar>
          <div>스터디</div>
          <Number>286</Number>
          <Bar>|</Bar>
          <div>후기 </div>
          <Number>286</Number>
        </StudyContentCover>
      </div>
    </HostBox>
  );
}

const HostBox = styled(Box)`
  margin: 35px 20px 40px;
  padding: 20px 40px 20px 20px;
  display: flex;
  align-items: center;
`;

const HostContentCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 130px;
`;

const Bar = styled.div`
  color: #f1f1f3;
  padding-left: 10px;
  padding-right: 10px;
`;

const Number = styled.div`
  padding-left: 3px;
  padding-top: 1px;
  font-family: "Nunito", sans-serif;
`;
