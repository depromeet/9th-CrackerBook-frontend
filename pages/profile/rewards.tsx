import styled from "styled-components";

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
  background: #FFFFFF;
  padding: 1em;
  padding-bottom: 0;
`
const BadgeArea = styled.div`
  position: absolute;
  left: 9.6%;
  top: 23%;

  

`

const BadgeRow = styled.div`
  display: inline-flex;
  
  
`
const RowWrapper = styled.div`
  width: 100%;
  text-align: center;
  
`

const RewardName = styled.div`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  /* text1 */

  color: #222222;
`




export default function Rewards(): JSX.Element {
    return (
        <div>
            <PageTitle>보유한 배지 5</PageTitle>
            <BadgeArea>
                <RowWrapper>
                    <BadgeRow>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward1.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward2.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward3.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                    </BadgeRow>
                </RowWrapper>
                <RowWrapper>
                    <BadgeRow>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward4.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward5.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward6.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                    </BadgeRow>
                </RowWrapper>
                <RowWrapper>
                    <BadgeRow>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward7.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward8.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward9.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                    </BadgeRow>
                </RowWrapper>
                <RowWrapper>
                    <BadgeRow>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward10.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward11.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                        <div>
                            <BadgeButton src="/assets/profile/rewards/reward12.svg" />
                            <RewardName>rewardName</RewardName>
                        </div>
                    </BadgeRow>
                </RowWrapper>
            </BadgeArea>
        </div>
    );
}
