import styled from "styled-components";
import HeaderBar from "../../src/components/common/HeaderBar";
import React from "react";

const PageTitle = styled.p`
  position: absolute;
  left: 20px;
  top: 100px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */

  /* text1 */

  color: #222222;
`;

const BadgeButton = styled.img`
  /* cracker white */
  width: 73px;
  height: 73px;
  background: #ffffff;
  padding: 1em;
  padding-bottom: 0;
`;
const BadgeArea = styled.div`
  position: absolute;
  left: 9.6%;
  top: 23%;
`;

const BadgeRow = styled.div`
  display: inline-flex;
`;
const RowWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const RewardName = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* text1 */

  color: #222222;
`;

export default function Rewards(): JSX.Element {
  return (
    <div>
      <HeaderBar title={"활동 배지"} routingUrl={"profile"} />
      <PageTitle>보유한 배지 12</PageTitle>
      <BadgeArea>
        <RowWrapper>
          <BadgeRow>
            <div>
              <BadgeButton src="/assets/profile/rewards/tree.svg" />
              <RewardName>크래커 꿈나무</RewardName>
            </div>
            <div>
              <BadgeButton src="/assets/profile/rewards/first_in.svg" />
              <RewardName>스터디 참여</RewardName>
            </div>
            <div>
              <BadgeButton src="/assets/profile/rewards/first_make.svg" />
              <RewardName>첫 스터디 주최</RewardName>
            </div>
          </BadgeRow>
        </RowWrapper>
        <RowWrapper>
          <BadgeRow>
            <div>
              <BadgeButton src="/assets/profile/rewards/everyday.svg" />
              <RewardName>개근상</RewardName>
            </div>
            <div>
              <BadgeButton src="/assets/profile/rewards/popular.svg" />
              <RewardName>인기스터디장</RewardName>
            </div>
            <div>
              <BadgeButton src="/assets/profile/rewards/friends.svg" />
              <RewardName>싹트는 우정</RewardName>
            </div>
          </BadgeRow>
        </RowWrapper>
        <RowWrapper>
          <BadgeRow>
            <div>
              <BadgeButton src="/assets/profile/rewards/travle.svg" />
              <RewardName>장르 탐험가</RewardName>
            </div>
            <div>
              <BadgeButton src="/assets/profile/rewards/mania.svg" />
              <RewardName>깊이있는 마니아</RewardName>
            </div>
            <div>
              <BadgeButton src="/assets/profile/rewards/genius.svg" />
              <RewardName>소통 천재</RewardName>
            </div>
          </BadgeRow>
        </RowWrapper>
        <RowWrapper>
          <BadgeRow>
            <div>
              <BadgeButton src="/assets/profile/rewards/holic.svg" />
              <RewardName>하트홀릭</RewardName>
            </div>
            <div>
              <BadgeButton src="/assets/profile/rewards/trust.svg" />
              <RewardName>신뢰의 시작</RewardName>
            </div>
            <div>
              <BadgeButton src="/assets/profile/rewards/review.svg" />
              <RewardName>슬기로운 후기</RewardName>
            </div>
          </BadgeRow>
        </RowWrapper>
      </BadgeArea>
    </div>
  );
}
