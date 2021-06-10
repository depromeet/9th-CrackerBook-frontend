import Link from "next/link";
import styled from "styled-components";

import { useRouter } from "next/router";
import React from "react";
import MyProfileButtons from "./MyProfileButtons";
import OtherProfileButtons from "./OtherProfileButtons";

const ProfileBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 280px;
  width: 100%;

  background: #ffd262;
  border-radius: 0px 0px 40px 40px;
`;

const ButtonArea = styled.div`
  width: -webkit-fill-available;
  text-align: center;
  padding: 30px;
  padding-top: 20px;
  justify-content: space-between;
  display: inline-flex;
`;

const ProfileImgArea = styled.div`
  display: flex;
  width: 100%;
  padding-top: 75px;
  text-align: center;
`;

const EditProfile = styled.img`
  position: absolute;
  top: 75px;
  left: calc(50% + 20px);

  width: 26px;
  height: 26px;

  background: #ffffff;
  /* cracker grey */

  border: 1px solid #f1f1f3;
  box-sizing: border-box;
  box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
`;
const ProfileInfoArea = styled.div`
  width: 100%;
  text-align: center;
`;

const NameArea = styled.div`
  height: 36px;

  text-align: center;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;

  color: #222222;
`;

const ProfileMessage = styled.div`
  height: 20px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  /* text2 */
  color: #777777;
`;

const ProfileButton = styled.img`
  padding-top: 25px;
  padding-right: 5px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;

  border: 1px solid #f1f1sf3;
  box-sizing: border-box;
  border-radius: 100px;
`;

export default function ProfileArea(): JSX.Element {
  const router = useRouter();
  const data = router.query;
  const isOtherProfile = data.hasOwnProperty("id");

  return (
    <>
      {!isOtherProfile && <ProfileBackground />}
      <div style={{ position: "relative" }}>
        <ProfileImgArea>
          <ProfileImage src="/assets/profile/profile1.svg" />
          {!isOtherProfile && (
            <Link href="/profile/setting">
              <EditProfile src="/assets/profile/setting.svg" />
            </Link>
          )}
        </ProfileImgArea>
        <ProfileInfoArea>
          <NameArea>{"빈센조"}</NameArea>
          <ProfileMessage>{"디자인과 개발에 스터디에 관심이 많아용~"}</ProfileMessage>
        </ProfileInfoArea>

        <ButtonArea>
          {isOtherProfile ? <OtherProfileButtons /> : <MyProfileButtons />}
        </ButtonArea>
      </div>
    </>
  );
}
