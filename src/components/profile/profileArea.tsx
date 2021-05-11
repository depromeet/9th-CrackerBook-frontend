import Link from "next/link";
import styled from "styled-components";
// import {ExistIcon} from "../../src/styles/login/setNicnameStyle";
// import
// import {StartBtn} from "../../src/styles/login/setNicnameStyle";

const ProfileBackground = styled.div`
  height: 296px;
  background: #FFD262;
  border-radius: 0px 0px 40px 40px;
`;

const ButtonArea = styled.div`
  text-align: center;
  top: 29.02%;
  bottom: 62.7%;
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
`;

const ActivityButton = styled.div`
  top: 29.02%;
  bottom: 62.7%;
  height: 73px;
  width: 73px;
  margin: 0.5em;
  text-align: center;
  vertical-align: middle;
  
  box-shadow: 3px 4px 14px rgba(0, 0, 0, 0.15);
  border-radius: 26px;
`;

const ProfileImgArea = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 148px;
  top: 75px;

  //background: #8EDABC;
  /* cracker grey */

  border: 1px solid #F1F1F3;
  box-sizing: border-box;
  border-radius: 100px;
`;

const EditProfile = styled.img`
  /* Ellipse 71 */

  position: absolute;
  width: 26px;
  height: 26px;
  left: 206px;
  top: 75px;

  /* cracker white */

  background: #FFFFFF;
  /* cracker grey */

  border: 1px solid #F1F1F3;
  box-sizing: border-box;
  box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.15);

`;

const NameArea = styled.div`
    position: absolute;
    width: 67px;
    height: 36px;
    left: 154px;
    top: 165px;
    
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    
    /* text1 */
    
    color: #222222;

`;

const ProfileMessage = styled.div`
  position: absolute;
  width: 237px;
  height: 20px;
  left: 69px;
  top: 204px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* text2 */
  color: #777777;
`

const ProfileButton = styled.img`
  padding-top: 25px;
  padding-right: 5px;
`;

export default function ProfileArea(): JSX.Element {
    return (
        <div>
            <ProfileBackground>
                <ProfileImgArea>
                    <img src="/assets/profile/profile1.svg"/>
                </ProfileImgArea>
                <Link href="/profile/setting">
                    <EditProfile src="/assets/profile/setting.svg"/>
                </Link>
            </ProfileBackground>
            <ButtonArea>
                <ButtonWrapper>
                    <Link href={"/profile/rewards"}>
                        <ActivityButton>
                            <img src="/assets/profile/activityrewards.svg" />
                        </ActivityButton>
                    </Link>
                    <Link href={"/profile/interestedBook"}>
                        <ActivityButton>
                        <img src="/assets/profile/interestbook.svg" />
                        </ActivityButton>
                    </Link>
                    <Link href={"/profile/hostedStudy"}>
                        <ActivityButton>
                            <img src="/assets/profile/studypencil.svg" />
                        </ActivityButton>
                    </Link>
                </ButtonWrapper>
            </ButtonArea>
            <NameArea>{"빈센조"}</NameArea>
            <ProfileMessage>{"프로필 메시지"}</ProfileMessage>
        </div>
    );
}
