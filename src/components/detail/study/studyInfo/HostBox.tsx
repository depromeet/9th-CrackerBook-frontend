import {
  HostContent1,
  HostContent2,
  HostContent3,
  Profile,
  StudyContentCover,
} from "../../../../styles/detail/study/studyCommonStyle";
import styled from "styled-components";
import { Box } from "../../../../styles/detail/common/commonStyle";

export function HostBoxContainer(): JSX.Element {
  return (
    <HostBox>
      <Profile src="/assets/main/surprised.svg" />
      <div>
        <HostContentCover>
          <HostContent1>빈센조</HostContent1>
          <HostContent3 src="/assets/detail/trophy.svg" />
          <HostContent2>슈퍼크래커</HostContent2>
        </HostContentCover>
        <StudyContentCover>
          <div>스터디 7</div>
          <Bar>|</Bar>
          <div>후기 286</div>
        </StudyContentCover>
      </div>
    </HostBox>
  );
}

const HostBox = styled(Box)`
  margin: 35px 20px 40px;
  padding: 20px 100px 20px 20px;
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
