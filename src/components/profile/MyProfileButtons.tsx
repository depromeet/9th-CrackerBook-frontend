import styled from "styled-components";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import Link from "next/link";

const ButtonNLabel = styled.div`
  &.p {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
`;
const ActivityButton = styled.div`
  height: 73px;
  width: 73px;
  margin: 0.5em;

  background: #ffffff;
  /* book shadow */

  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 26px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MyProfileButtons(): JSX.Element {
  return (
    <>
      <Link href={"/profile/rewards"}>
        <ButtonNLabel>
          <ActivityButton>
            <img src="/assets/profile/activityrewards.svg" />
          </ActivityButton>
          <p>활동 배지</p>
        </ButtonNLabel>
      </Link>
      <Link href={"/profile/interestedBook"}>
        <ButtonNLabel>
          <ActivityButton>
            <img src="/assets/profile/interestbook.svg" />
          </ActivityButton>
          <p>관심 목록</p>
        </ButtonNLabel>
      </Link>
      <Link href={"/profile/hostStudyList"}>
        <ButtonNLabel>
          <ActivityButton>
            <img src="/assets/profile/studypencil.svg" />
          </ActivityButton>
          <p>주최한 스터디</p>
        </ButtonNLabel>
      </Link>
    </>
  );
}
