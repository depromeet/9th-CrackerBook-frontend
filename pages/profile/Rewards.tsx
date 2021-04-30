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

const BadgeButton = styled.div`
  /* cracker white */
  width: 73px;
  height: 73px;
  background: #FFFFFF;
  /* cracker grey */

  border: 1px solid #F1F1F3;
  box-sizing: border-box;
  box-shadow: 3px 4px 14px -2px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin: 0.5em;
`
const BadgeArea = styled.div`
  position: absolute;
  left: 9.6%;
  top: 23%;
`

const BadgeRow = styled.div`
  display: flex;
`


export default function Rewards(): JSX.Element {
    return (
        <div>
            <PageTitle>보유한 배지 5</PageTitle>
            <BadgeArea>
                <BadgeRow>
                    <BadgeButton/>
                    <BadgeButton/>
                    <BadgeButton/>
                </BadgeRow>
                <BadgeRow>
                    <BadgeButton/>
                    <BadgeButton/>
                    <BadgeButton/>
                </BadgeRow>
                <BadgeRow>
                    <BadgeButton/>
                    <BadgeButton/>
                    <BadgeButton/>
                </BadgeRow>
                <BadgeRow>
                    <BadgeButton/>
                    <BadgeButton/>
                    <BadgeButton/>
                </BadgeRow>
            </BadgeArea>
        </div>
    );
}
